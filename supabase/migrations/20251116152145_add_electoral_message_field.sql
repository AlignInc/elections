/*
  # Add Electoral Message Field to Candidates Table

  ## Changes
  - Add `electoral_message` column to `candidates` table
    - Type: text (allows for long-form messages)
    - Nullable: true (some candidates may not have messages)
    - Description: Stores the candidate's electoral campaign message or slogan

  ## Notes
  - This field will be displayed on candidate detail pages
  - All existing records will have NULL values initially
  - Data will be populated via SQL updates in a subsequent step
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'candidates' AND column_name = 'electoral_message'
  ) THEN
    ALTER TABLE candidates ADD COLUMN electoral_message text;
  END IF;
END $$;