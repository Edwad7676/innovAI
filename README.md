# innovAI
 React Web project using AI Engine Clarifai to detect face
 
 Setting up database using pgadmin:
  create table users(
  id serial NOT NULL,
  email text NOT NULL,
  joined TIMESTAMP
  )
  
  create table login(
   id serial PRIMARY KEY,
   email text NOT NULL,
   hash varchar(100)
  )
 
 server.js:
 host = localhost
 port = your port
 user= "your user"
 password = "your password"
 database="your database"
 
in frontend/my-app:
 npm start
 
in backend:
 npm start
 

