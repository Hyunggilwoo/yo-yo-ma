-- Database 1: IMDB
-- query 1
SELECT role
FROM roles, movies
WHERE movie_id = movies.id AND name = 'Pi';

-- query 2
SELECT first_name, last_name, role
FROM roles, actors, movies
WHERE roles.movie_id = movies.id
AND roles.actor_id = actors.id
AND movies.name = 'Pi'
ORDER BY last_name, first_name;
    
-- query 3
SELECT DISTINCT a.first_name, a.last_name, r.role, m.name
FROM roles r, actors a, movies m, movies_genres g
WHERE r.movie_id = m.id
AND g.movie_id = m.id
AND r.actor_id = a.id
AND (g.genre = 'Sci-Fi' OR g.genre = 'Horror')
ORDER BY last_name, first_name, m.name;

-- Database 2: World
-- query 1
SELECT c.name, c.continent
FROM countries c
JOIN languages l on l.country_code = c.code
WHERE (l.language = 'English' OR l.language = 'French') AND l.official = 'T'
ORDER BY c.name;

-- query 2
SELECT l.language, l.official, l.percentage,
  ROUND(c.population / l.percentage * 100) AS 'estimated_speakers' 
FROM languages l, countries c
WHERE l.country_code = c.code AND c.name = 'France'
ORDER BY percentage DESC, language ASC;

-- query 3
SELECT c.name, c.district, c.population, 
       c.population / countries.population as percentage
FROM countries, cities c
WHERE c.country_code = countries.code
AND countries.name = 'China'
AND c.population / countries.population > 0.002
ORDER BY percentage DESC;

-- query 4
SELECT DISTINCT c.name
FROM countries c, cities ci1, cities ci2
WHERE ci1.country_code = c.code
AND ci2.country_code = c.code
AND ci1.id < ci2.id 
AND ci1.population >= 5000000 
AND ci2.population >= 5000000;
