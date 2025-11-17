/*
  # Populate Topic Tags

  ## Overview
  This migration populates the topic_tags table with comprehensive policy categories
  extracted from all 51 candidates' electoral messages in the 2025 Hong Kong
  Legislative Council Election.

  ## Changes
  - Insert 45 topic tags covering all major policy areas mentioned by candidates
  - Each tag includes Chinese name, English name, category, and icon

  ## Topic Categories
  1. Employment & Labor (就業與勞工)
  2. Housing (房屋)
  3. Healthcare (醫療)
  4. Elderly Care (長者服務)
  5. Transportation (交通)
  6. Education (教育)
  7. Economy (經濟)
  8. Youth Development (青年發展)
  9. Family Support (家庭支援)
  10. Urban Development (城市發展)
  11. Environment (環境)
  12. Social Welfare (社會福利)
  13. Community Services (社區服務)
  14. Retirement Protection (退休保障)
  15. Middle Class Support (中產支援)
  16. Small Business Support (中小企支援)
  17. Technology & Innovation (科技創新)
  18. Safety & Security (安全)
*/

-- Insert topic tags
INSERT INTO topic_tags (name_zh, name_en, category, icon) VALUES
('就業保障', 'Employment Protection', '就業與勞工', '💼'),
('本地優先就業', 'Local Employment Priority', '就業與勞工', '🏠'),
('勞工權益', 'Labor Rights', '就業與勞工', '⚖️'),
('公營房屋', 'Public Housing', '房屋', '🏘️'),
('租者置其屋', 'Tenants Purchase Scheme', '房屋', '🔑'),
('青年置業', 'Youth Home Ownership', '房屋', '🏡'),
('醫療改革', 'Healthcare Reform', '醫療', '🏥'),
('基層醫療', 'Primary Healthcare', '醫療', '💊'),
('長者服務', 'Elderly Services', '長者服務', '👴'),
('安老院舍', 'Elderly Care Homes', '長者服務', '🏡'),
('樂齡科技', 'Gerontechnology', '長者服務', '📱'),
('交通基建', 'Transportation Infrastructure', '交通', '🚇'),
('鐵路發展', 'Railway Development', '交通', '🚄'),
('巴士服務', 'Bus Services', '交通', '🚌'),
('教育資源', 'Education Resources', '教育', '📚'),
('多元教育', 'Diverse Education', '教育', '🎓'),
('經濟發展', 'Economic Development', '經濟', '💰'),
('旅遊經濟', 'Tourism Economy', '經濟', '✈️'),
('青年向上流動', 'Youth Upward Mobility', '青年發展', '📈'),
('青年就業', 'Youth Employment', '青年發展', '👨‍💼'),
('創業支援', 'Entrepreneurship Support', '青年發展', '💡'),
('家庭友善', 'Family-Friendly', '家庭支援', '👨‍👩‍👧‍👦'),
('托兒服務', 'Childcare Services', '家庭支援', '👶'),
('育兒支援', 'Parenting Support', '家庭支援', '🍼'),
('市區重建', 'Urban Renewal', '城市發展', '🏗️'),
('北部都會區', 'Northern Metropolis', '城市發展', '🌆'),
('海濱發展', 'Waterfront Development', '城市發展', '🌊'),
('綠色城市', 'Green City', '環境', '🌳'),
('環境保護', 'Environmental Protection', '環境', '♻️'),
('社區配套', 'Community Facilities', '社區服務', '🏪'),
('康樂設施', 'Recreation Facilities', '社區服務', '⚽'),
('弱勢社群', 'Vulnerable Groups', '社會福利', '🤝'),
('婦女權益', 'Women''s Rights', '社會福利', '👩'),
('退休保障', 'Retirement Protection', '退休保障', '💳'),
('強積金改革', 'MPF Reform', '退休保障', '💰'),
('中產權益', 'Middle Class Rights', '中產支援', '👔'),
('稅務優惠', 'Tax Benefits', '中產支援', '💵'),
('中小企支援', 'SME Support', '中小企支援', '🏢'),
('營商環境', 'Business Environment', '中小企支援', '📊'),
('創科發展', 'Innovation & Technology', '科技創新', '🔬'),
('智慧城市', 'Smart City', '科技創新', '🤖'),
('社區安全', 'Community Safety', '安全', '🛡️'),
('網絡安全', 'Cybersecurity', '安全', '🔒'),
('樓宇更新', 'Building Renewal', '城市發展', '🔧'),
('無障礙設施', 'Barrier-Free Facilities', '社區服務', '♿'),
('消費者權益', 'Consumer Rights', '社會福利', '🛒')
ON CONFLICT (name_zh) DO NOTHING;
