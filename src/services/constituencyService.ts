import { supabase, type Constituency, type Candidate } from '../lib/supabase';

export const constituencyService = {
  async getAllConstituencies(): Promise<Constituency[]> {
    const { data, error } = await supabase
      .from('constituencies')
      .select('*')
      .order('region', { ascending: true })
      .order('name_zh', { ascending: true });

    if (error) throw error;
    return data || [];
  },

  async getConstituenciesByType(type: string): Promise<Constituency[]> {
    const { data, error } = await supabase
      .from('constituencies')
      .select('*')
      .eq('type', type)
      .order('region', { ascending: true })
      .order('name_zh', { ascending: true });

    if (error) throw error;
    return data || [];
  },

  async getConstituencyById(id: string): Promise<Constituency | null> {
    const { data, error } = await supabase
      .from('constituencies')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  async getCandidatesByConstituency(constituencyId: string): Promise<Candidate[]> {
    const { data, error } = await supabase
      .from('candidates')
      .select('*')
      .eq('constituency_id', constituencyId)
      .order('candidate_number', { ascending: true });

    if (error) throw error;
    return data || [];
  },

  async findConstituencyByDatabaseLookup(address: string): Promise<Constituency | null> {
    const normalizedAddress = address.trim().toLowerCase();

    const { data: mappings, error } = await supabase
      .from('address_mappings')
      .select('constituency_id, district, landmark_name, street_pattern, priority, constituencies(*)')
      .or(`district.ilike.%${normalizedAddress}%,landmark_name.ilike.%${normalizedAddress}%,street_pattern.ilike.%${normalizedAddress}%`)
      .order('priority', { ascending: false })
      .limit(10);

    if (error) {
      console.error('Database lookup error:', error);
      throw error;
    }

    if (mappings && mappings.length > 0) {
      let bestMatch = mappings[0];
      let bestScore = 0;

      for (const mapping of mappings) {
        let score = mapping.priority || 0;

        const district = (mapping.district || '').toLowerCase();
        const landmark = (mapping.landmark_name || '').toLowerCase();
        const streetPattern = (mapping.street_pattern || '').toLowerCase();

        if (district && normalizedAddress.includes(district)) {
          score += 20;
        }
        if (landmark && normalizedAddress.includes(landmark)) {
          score += 25;
        }
        if (streetPattern && normalizedAddress.includes(streetPattern)) {
          score += 30;
        }
        if (district && district === normalizedAddress) {
          score += 50;
        }
        if (landmark && landmark === normalizedAddress) {
          score += 50;
        }

        if (score > bestScore) {
          bestScore = score;
          bestMatch = mapping;
        }
      }

      if (bestScore > 0 && bestMatch.constituencies) {
        return bestMatch.constituencies as unknown as Constituency;
      }
    }

    return null;
  },

  async findConstituencyByAddress(address: string): Promise<Constituency | null> {
    const normalizedAddress = address.trim();

    try {
      const dbResult = await this.findConstituencyByDatabaseLookup(normalizedAddress);
      if (dbResult) {
        return dbResult;
      }
    } catch (error) {
      console.error('Database lookup error:', error);
    }

    const searchAddress = normalizedAddress.toLowerCase().includes('香港')
      ? normalizedAddress
      : `香港 ${normalizedAddress}`;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchAddress)}&accept-language=zh-HK&limit=1&countrycodes=hk`,
        {
          headers: {
            'User-Agent': 'HK-Election-Info-App/1.0'
          },
          signal: controller.signal
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error('Geocoding failed');
      }

      const results = await response.json();

      if (results && results.length > 0) {
        const { lat, lon } = results[0];
        return await this.findConstituencyByCoordinates(parseFloat(lat), parseFloat(lon));
      }
    } catch (error) {
      console.error('Geocoding error:', error);
    }

    return null;
  },

  async findConstituencyByCoordinates(lat: number, lng: number): Promise<Constituency | null> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=zh-HK`,
        {
          headers: {
            'User-Agent': 'HK-Election-Info-App/1.0'
          },
          signal: controller.signal
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error('Reverse geocoding failed');
      }

      const data = await response.json();

      const addressParts = [
        data.address?.suburb,
        data.address?.neighbourhood,
        data.address?.city_district,
        data.address?.city,
        data.address?.town,
        data.address?.village,
        data.address?.quarter
      ].filter(Boolean);

      for (const part of addressParts) {
        if (part) {
          try {
            const result = await this.findConstituencyByDatabaseLookup(part);
            if (result) {
              return result;
            }
          } catch (error) {
            console.error('Error looking up address part:', part, error);
            continue;
          }
        }
      }

      if (data.display_name) {
        const displayNameParts = data.display_name.split(',').map((p: string) => p.trim());
        for (const part of displayNameParts) {
          try {
            const result = await this.findConstituencyByDatabaseLookup(part);
            if (result) {
              return result;
            }
          } catch (error) {
            continue;
          }
        }
      }

      return null;
    } catch (error) {
      console.error('Geolocation lookup error:', error);
      return null;
    }
  },

  getConstituencyTypes(): string[] {
    return ['地方選區', '功能界別', '選舉委員會界別'];
  },

  getRegions(): string[] {
    return ['香港島', '九龍', '新界'];
  }
};
