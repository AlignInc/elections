/*
  # Link Candidates to Constituencies

  ## Overview
  This migration updates the candidates table to link each candidate with their
  corresponding constituency_id from the constituencies table.

  ## Changes
  - Update constituency_id for all 51 candidates based on their constituency_zh field
  - Establish foreign key relationships between candidates and constituencies

  ## Data Mapping
  Maps each candidate to their constituency using constituency name matching
*/

-- Update candidates with constituency_id
UPDATE candidates SET constituency_id = (
  SELECT id FROM constituencies WHERE name_zh = '香港島東'
) WHERE constituency_zh = '香港島東';

UPDATE candidates SET constituency_id = (
  SELECT id FROM constituencies WHERE name_zh = '香港島西'
) WHERE constituency_zh = '香港島西';

UPDATE candidates SET constituency_id = (
  SELECT id FROM constituencies WHERE name_zh = '九龍東'
) WHERE constituency_zh = '九龍東';

UPDATE candidates SET constituency_id = (
  SELECT id FROM constituencies WHERE name_zh = '九龍西'
) WHERE constituency_zh = '九龍西';

UPDATE candidates SET constituency_id = (
  SELECT id FROM constituencies WHERE name_zh = '九龍中'
) WHERE constituency_zh = '九龍中';

UPDATE candidates SET constituency_id = (
  SELECT id FROM constituencies WHERE name_zh = '新界東南'
) WHERE constituency_zh = '新界東南';

UPDATE candidates SET constituency_id = (
  SELECT id FROM constituencies WHERE name_zh = '新界北'
) WHERE constituency_zh = '新界北';

UPDATE candidates SET constituency_id = (
  SELECT id FROM constituencies WHERE name_zh = '新界西北'
) WHERE constituency_zh = '新界西北';

UPDATE candidates SET constituency_id = (
  SELECT id FROM constituencies WHERE name_zh = '新界西南'
) WHERE constituency_zh = '新界西南';

UPDATE candidates SET constituency_id = (
  SELECT id FROM constituencies WHERE name_zh = '新界東北'
) WHERE constituency_zh = '新界東北';
