const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//database
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: '12345678',
        database: 'postgres'
    }
});

//bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;


// URL of image. Change this to your image. Clarifai
let IMAGE_URL = "";
const token = "c133d7ffb1514e25bd87e69094deb4c8";
const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");
const stub = ClarifaiStub.grpc();
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + token);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send(database.users);
    console.log(req.body)
})

app.post('/signin', (req, res) => {

    knex.select('*').from('login').where('email', req.body.email).then(user => {
        let comparevar = " "
        try {
            comparevar = user[0].hash
        } catch {
            console.log("not found")
        }

        bcrypt.compare(req.body.password, comparevar, function (err, result) {
            if (result === true) {
                res.json("accepted");
            } else {
                res.json("wrong email or password")
            }
        });
    })
    
})

app.post('/register', (req, res) => {

    knex("users").count('email').where('email', req.body.email).then(data => {
        if (data[0].count > 0) {
            console.log("user exist")
            res.json("user exist")
        } else {
            knex("users").insert({
                email: req.body.email
            }).then(data => console.log("processing.."))
            bcrypt.hash(req.body.password, saltRounds).then(function (hash) {
                knex("login").insert({
                    email: req.body.email,
                    hash: hash
                }).then(data => console.log("processing.."))
            })
            res.json("registered");
        }                                    
    })                               
})
app.post('/predict', (req, res) => {
    IMAGE_URL = req.body.img_url
 
    stub.PostModelOutputs(
        {
            user_app_id: {
                "user_id": "clarifai",
                "app_id": "main"
            },
            model_id: "face-detection",
            // version_id: "6dc7e46bc9124c5c8824be4822abe105",  // This is optional. Defaults to the latest model version
            inputs: [
                { data: { image: { url: IMAGE_URL } } }
            ]
        },
        metadata,
        (err, response) => {
            if (err) {
                /*throw new Error(err);*/
                console.log(err)
            }

            if (response.status.code !== 10000) {
                /*throw new Error("Post model outputs failed, status: " + response.status.description);*/
                console.log("Post model outputs failed, status: " + response.status.description + "on route /predict")
            }

            // Since we have one input, one output will exist here.
            const output = response.outputs[0];
            const raw = {
                data: [

                ]
            }
            /*console.log(output.data.regions[0].region_info.bounding_box)*/
            for (i in output.data.regions) {
                /*console.log(output.data.regions[i].region_info.bounding_box)*/
                raw.data.push(output.data.regions[i].region_info.bounding_box)
            }
            res.json(raw);
        }
    );
    
})

app.listen(3000, () => {
    console.log("app is running on port 3000")
})
