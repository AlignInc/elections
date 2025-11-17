/*
  # Populate Constituencies

  ## Overview
  This migration populates the constituencies table with all 10 geographical
  constituencies for the 2025 Hong Kong Legislative Council Election.

  ## Changes
  - Insert 10 geographical constituencies with Chinese and English names
  - Set type as '地方選區' (Geographical Constituency)
  - Include region information for each constituency
  - Set appropriate number of seats per constituency

  ## Constituencies
  1. 香港島東 (Hong Kong Island East)
  2. 香港島西 (Hong Kong Island West)
  3. 九龍東 (Kowloon East)
  4. 九龍西 (Kowloon West)
  5. 九龍中 (Kowloon Central)
  6. 新界東南 (New Territories South East)
  7. 新界北 (New Territories North)
  8. 新界西北 (New Territories North West)
  9. 新界西南 (New Territories South West)
  10. 新界東北 (New Territories North East)
*/

-- Insert constituencies only if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM constituencies WHERE name_zh = '香港島東') THEN
    INSERT INTO constituencies (name_zh, name_en, type, region, seats) VALUES
    ('香港島東', 'Hong Kong Island East', '地方選區', '香港島', 5),
    ('香港島西', 'Hong Kong Island West', '地方選區', '香港島', 5),
    ('九龍東', 'Kowloon East', '地方選區', '九龍', 5),
    ('九龍西', 'Kowloon West', '地方選區', '九龍', 5),
    ('九龍中', 'Kowloon Central', '地方選區', '九龍', 6),
    ('新界東南', 'New Territories South East', '地方選區', '新界', 5),
    ('新界北', 'New Territories North', '地方選區', '新界', 5),
    ('新界西北', 'New Territories North West', '地方選區', '新界', 5),
    ('新界西南', 'New Territories South West', '地方選區', '新界', 5),
    ('新界東北', 'New Territories North East', '地方選區', '新界', 5);
  END IF;
END $$;
