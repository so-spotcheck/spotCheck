/*
Your company is building a website for a local movie theater.
You are using a SQL database with a table called 'movies' that looks like this:

id      title                 genre         duration
1       Mad Max: Fury Road    Action        120
2       Selma                 Drama         128
3       Inside Out            Animation     94
4       It Follows            Horror        100
5       Self/less             Drama         103   
6       Ted 2                 Comedy        115

Build queries for the following:

1) Find all the films with genre that are not comedy and return all info about those films

2) Find all films with duration equal or longer than 100, order by duration (longest to shortest), return only titles and duration

3) Find all films that are shorter than 120 and are dramas, return title, genre and duration

4) Add a new film to the database:
Title - Spy
Genre - Comedy
Duration - 120

5) A few mistakes where made when the film 'Self/less' was added to the database.
Change the film's genre to 'Action' and the duration to 116.

 */

-- write queries below --

/* 1 */
SELECT *
FROM movies
WHERE genre != 'Comedy';

/* 2 */
SELECT title, duration
FROM movies
WHERE duration >= 100;

/* 3 */
SELECT title, genre, duration
FROM movies
WHERE duration < 120
AND genre = 'Drama';

/* 4 */
INSERT INTO movies (title, genre, duration)
VALUES ('Spy', 'Comedy', 120)

/* 5 */
UPDATE movies
SET genre = 'Action', duration = 116
WHERE title = 'Self/less';