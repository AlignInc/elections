/*
  # Remove Duplicate Biography Field

  ## Overview
  The biography field duplicates the occupation field. This migration removes
  the biography column from the candidates table.

  ## Changes
  - Drop the biography column from candidates table
  - Occupation field already contains the same information

  ## Data Safety
  - No data loss as occupation field retains the information
*/

-- Drop the biography column as it duplicates occupation
ALTER TABLE candidates DROP COLUMN IF EXISTS biography;
