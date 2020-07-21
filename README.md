
 
## Directions:
Initialize node/package json:
* npm init -y
Install the following dependencies:
* npm i express pg
* npm install --save cors
 
## Checklist:
* [✅] Duplicate old folder?
* [✅] Decide what your new DB will contain
* [✔] Create a new <code>movies</code> DB in PSQL
 * [✔q] Fill new DB with some generic content
* [✔ ] Add dependencies & node
 * [✔] Run <code>npm init -y</code>
 * [✔ ] Run <code>npm i express pg</code>
 * [ ✔] Run <code>npm i --save cors</code>
* [ ] Access DB 
 * [ ] Change existing queries to match new DB structure 
 * [ ] View json in console 
* [ ] Manipulate information to have a good looking app
* [ ] Create README.md V1
* [ ] Push to github
 * [ ] Create repo
 * [ ] Initialize git repository 
 * [ ] Add files to be committed
 * [ ] Create first commit
 * [ ] add origin
 * [ ] Push to origin master branch 


 CREATE TABLE movies (
    id serial NOT NULL,
    title VARCHAR(255) NOT NULL,
    leadactor VARCHAR(255) NOT NULL,
    poster text NOT NULL,
    director VARCHAR(255) NOT NULL,
    writer VARCHAR(255) NOT NULL,
    year VARCHAR(255) NOT NULL
);

INSERT INTO movies ( title, leadactor, poster, director, writer, year) 
VALUES ('John Wick', 'Keanu Reeves', 'https://cdn.shopify.com/s/files/1/0747/3829/products/mHP0101.jpeg?v=1571444280', 'Chad Stahelski', 'Derek Kolstad', '2017')

INSERT INTO movies ( title, leadactor, poster, director, writer, year) 
VALUES ('The Notebook', 'Rachel McAdams, Ryan Gosling', 'https://images-na.ssl-images-amazon.com/images/I/81zHy%2BInA5L._AC_SL1303_.jpg','Nick Cassavetes', 'Nicholas Sparks', '2004')