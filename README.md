# innovAI
## React Web using AI Engine
Welcome to my personal project portofolio.
innovAI is a interactive website created using react and node.js, powered by AI Engine [Clarifai](https://www.clarifai.com/) 
# Created by
- React js(front end)
- Node js(back end)
- PostgreSQL(login system)

# Usage
once you have register and login you can insert picture url to detect faces
![example](https://github.com/Edwad7676/innovAI/blob/main/detect_faces.png)


# setting up
## database setup
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
 # to run
 do the following steps in order
 
 ##  backend
 in backend:
 ```sh
 npm start
```
 
 ## frontend
in frontend/my-app:
```sh
 npm start
 ```
 
# about clarifai
clarifai is an Ai Engine which you can choose many Ai model to use.
this project using [face-detection model](https://clarifai.com/clarifai/main/models/face-detection)
to get new token -> click the link above then use model>call by API>create a new token

change token in server.js:
```sh
const token = "your token"
```
 # dependencies
 all dependencies in json files (backend and front end json is seperated).
 to install dependencies install:
 ```sh
 npm install
 ```
