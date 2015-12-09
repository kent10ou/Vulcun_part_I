//README

For part I, I utilized generatedata.com to generate the random data into a csv and then loaded up the data into a mysql server. When querying the mysql db, I utilized the LIKE value which uses the Turbo Boyer-Moore algorithm to initialize the pattern for the string to search quickly. 

SELECT * FROM users WHERE full_name LIKE '%john%';