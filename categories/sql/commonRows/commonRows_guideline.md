##CommonRows Guidelines
-----------------------

###Clarifying Questions (when asked in person):

  - What are some advantages and disadvantages of sqlite3?

    - Advantages: zero configuration required, file instead of server based, great mobile/embedded solution
    - Disadvantages: no user management, lack of configuration options for perfomance, doesn't scale/distribute

  - Is this the only way to find the intersection between the tables?

    - No, these two queries would also work
    - SELECT * FROM Cities INNER JOIN States on Cities.name = States.name;
    - SELECT Cities.*,States.* FROM Cities, States WHERE Cities.Name = States.Name;

###Rubric:

  - **Remote:**

    - Run student's code and review. Pass or Fail based on whether or not the tables are created correctly and the final query returns 'New York' or 'New York|New York'

  - **In person:**

    - **Bonus points**
        - [ ] Student notes that there are multiple ways to achieve the final query

    - **Pass** (Achieves 4 out of 4 learning objectives):
        - [ ] Student's code creates a sqlite3 database
        - [ ] Student's code creates two separate tables
        - [ ] Student's code inserts three rows into each table, with at least common field between them
        - [ ] Student's final query returns the shared field between the two tables
    
    - **Fail** (Student doesn't achieve all of the previous learning objectives)

###Additional Resources:

  - [stackoverflow: difference between inner and outer joins](http://stackoverflow.com/questions/38549/difference-between-inner-and-outer-joins)

  - [tutorialspoint: sqlite using joins](http://www.tutorialspoint.com/sqlite/sqlite_using_joins.htm)

  - [digitalocean: sqlite vs mysql vs postgres](https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems)
