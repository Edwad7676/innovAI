# innovAI
## personal React Web project using AI Engine Clarifai to detect face
 innovAI is a interactive website created using react and node.js, powered by AI Engine [Clarifai](https://www.clarifai.com/)  
# setting up
## database
 ```sh
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
 ```
 server.js:
 ```sh
 host = localhost
 port = port
 user= "your user"
 password = "your password"
 database="your database"
 ```
 
 ## frontend
in frontend/my-app:
```sh
 npm start
 ```
 
 ##  backend
 ```sh
in backend:
 npm start
```

#about clarifai
this project using [face-detection model](https://clarifai.com/clarifai/main/models/face-detection)

change token in server.js:
```sh
const token = "your token"
```
 ##dependencies
 all dependencies in json files 

