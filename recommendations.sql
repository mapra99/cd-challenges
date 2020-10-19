-- write your code in PostgreSQL 9.4
SELECT place
FROM (
  SELECT place,
    COUNT(CASE WHEN opinion='recommended' THEN 1 END) AS recommended_count,
    COUNT(CASE WHEN opinion='not recommended' THEN 1 END) AS not_recommended_count
  FROM opinions
  GROUP BY place
  ) AS rec_counts
WHERE rec_counts.recommended_count > rec_counts.not_recommended_count;
