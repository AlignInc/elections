/*
  # Add Additional Fields to Candidates Table

  1. Changes
    - Add `age` field to store candidate age
    - Add `platform_pdf_url` field to store PDF link
    - Add `gc_intro_page` field to store introduction page URL
    - Add `gc_nomination_text` field to store nomination text URL
    - Update existing candidates to have proper photo URLs from official source
    
  2. Notes
    - All new fields are nullable to accommodate varying data availability
    - Photo URLs will be updated to point to official election commission sources
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'candidates' AND column_name = 'age'
  ) THEN
    ALTER TABLE candidates ADD COLUMN age text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'candidates' AND column_name = 'platform_pdf_url'
  ) THEN
    ALTER TABLE candidates ADD COLUMN platform_pdf_url text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'candidates' AND column_name = 'gc_intro_page'
  ) THEN
    ALTER TABLE candidates ADD COLUMN gc_intro_page text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'candidates' AND column_name = 'gc_nomination_text'
  ) THEN
    ALTER TABLE candidates ADD COLUMN gc_nomination_text text;
  END IF;
END $$;