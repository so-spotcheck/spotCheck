/*

-- first command is entered from regular terminal shell, others should be from sqlite3 CLI
-- multiple solutions available for join table- see guideline for other examples

 */

sqlite3 database1.db

CREATE TABLE Cities(Name TEXT);
CREATE TABLE States(Name TEXT);
INSERT INTO Cities (Name) VALUES ('Los Angeles'), ('Portland'), ('New York');
INSERT INTO States (Name) VALUES ('California'), ('Oregon'), ('New York');
SELECT * FROM Cities NATURAL JOIN States;
