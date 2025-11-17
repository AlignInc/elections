/*
  # Restore Official URL Fields

  ## Overview
  This migration restores important fields that were mistakenly removed:
  - platform_pdf_url: Link to candidate's official PDF profile
  - source_gc_intro_page: Link to constituency introduction page
  - source_gc_nomination_text: Link to constituency nomination document
  
  ## Changes
  - Add back platform_pdf_url field (candidate PDF profile URL)
  - Add back source_gc_intro_page field (constituency page URL)
  - Add back source_gc_nomination_text field (constituency nomination PDF URL)
  
  ## Data Safety
  - Fields are nullable to allow gradual data population
  - No data loss as we're only adding fields back
*/

-- Add back the official URL fields
ALTER TABLE candidates 
  ADD COLUMN IF NOT EXISTS platform_pdf_url TEXT,
  ADD COLUMN IF NOT EXISTS source_gc_intro_page TEXT,
  ADD COLUMN IF NOT EXISTS source_gc_nomination_text TEXT;

-- Add comments for documentation
COMMENT ON COLUMN candidates.platform_pdf_url IS 'URL to candidate official PDF profile from elections.gov.hk';
COMMENT ON COLUMN candidates.source_gc_intro_page IS 'URL to constituency introduction page on elections.gov.hk';
COMMENT ON COLUMN candidates.source_gc_nomination_text IS 'URL to constituency nomination document PDF';
