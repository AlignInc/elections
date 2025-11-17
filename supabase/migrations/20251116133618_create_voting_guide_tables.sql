/*
  # Create Voting Day Guide Tables

  1. New Tables
    - `voting_guide_sections`
      - `id` (uuid, primary key)
      - `section_order` (integer) - Order for display
      - `title_zh` (text) - Chinese title
      - `title_en` (text) - English title
      - `icon` (text) - Icon name from lucide-react
      - `category` (text) - Section category
      - `created_at` (timestamptz)
    
    - `voting_guide_steps`
      - `id` (uuid, primary key)
      - `section_id` (uuid, foreign key to voting_guide_sections)
      - `step_order` (integer) - Order of step
      - `title_zh` (text) - Chinese step title
      - `title_en` (text) - English step title
      - `description_zh` (text) - Chinese description
      - `description_en` (text) - English description
      - `tip_zh` (text, nullable) - Chinese tip
      - `tip_en` (text, nullable) - English tip
      - `created_at` (timestamptz)
    
    - `voting_requirements`
      - `id` (uuid, primary key)
      - `region` (text) - Region name
      - `requirement_type` (text) - Type of requirement (id, proof_of_residence, etc)
      - `description_zh` (text) - Chinese description
      - `description_en` (text) - English description
      - `is_required` (boolean) - Whether required or optional
      - `display_order` (integer)
      - `created_at` (timestamptz)
    
    - `voting_faqs`
      - `id` (uuid, primary key)
      - `question_zh` (text) - Chinese question
      - `question_en` (text) - English question
      - `answer_zh` (text) - Chinese answer
      - `answer_en` (text) - English answer
      - `category` (text) - FAQ category
      - `display_order` (integer)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add SELECT policies for public access (read-only voting guide data)

  3. Indexes
    - Add indexes for ordering and foreign key lookups
*/

CREATE TABLE IF NOT EXISTS voting_guide_sections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section_order integer NOT NULL DEFAULT 0,
  title_zh text NOT NULL,
  title_en text NOT NULL,
  icon text NOT NULL DEFAULT 'Info',
  category text NOT NULL DEFAULT 'general',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS voting_guide_steps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id uuid REFERENCES voting_guide_sections(id) ON DELETE CASCADE,
  step_order integer NOT NULL DEFAULT 0,
  title_zh text NOT NULL,
  title_en text NOT NULL,
  description_zh text NOT NULL,
  description_en text NOT NULL,
  tip_zh text,
  tip_en text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS voting_requirements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  region text NOT NULL DEFAULT 'hong_kong',
  requirement_type text NOT NULL,
  description_zh text NOT NULL,
  description_en text NOT NULL,
  is_required boolean DEFAULT true,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS voting_faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question_zh text NOT NULL,
  question_en text NOT NULL,
  answer_zh text NOT NULL,
  answer_en text NOT NULL,
  category text NOT NULL DEFAULT 'general',
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE voting_guide_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE voting_guide_steps ENABLE ROW LEVEL SECURITY;
ALTER TABLE voting_requirements ENABLE ROW LEVEL SECURITY;
ALTER TABLE voting_faqs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view voting guide sections"
  ON voting_guide_sections FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can view voting guide steps"
  ON voting_guide_steps FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can view voting requirements"
  ON voting_requirements FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can view voting FAQs"
  ON voting_faqs FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_voting_guide_sections_order ON voting_guide_sections(section_order);
CREATE INDEX IF NOT EXISTS idx_voting_guide_steps_section ON voting_guide_steps(section_id, step_order);
CREATE INDEX IF NOT EXISTS idx_voting_requirements_order ON voting_requirements(display_order);
CREATE INDEX IF NOT EXISTS idx_voting_faqs_category_order ON voting_faqs(category, display_order);