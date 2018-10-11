// IMPORT MODULES
import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';

// GLOBAL VARIABLES & INIT ETC.
dotenv.config();
const app                   = express();
const notula_server_url     = process.env.NOTULA_MAIN_SERVER_URL;
const notula_server_port    = process.env.NOTULA_MAIN_SERVER_PORT;

// USE middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ENDPOINT
// app.get('*', (req, res) => {
//     res.status(200).sendFile('index.html');
// });

app.get('/api/verify', (req, res) => {
    // parse request
    let email   = req.query.email;
    let token   = req.query.token;
    let req_url = `http://${notula_server_url}:${notula_server_port}/verify?email=${email}&token=${token}`;

    fetch(req_url, {
        method: 'GET'
    })
    .then(res => {
        return res.json();
    })
    .then(json => {
        console.log(json);
        if (json.bk.code === 44) {
            res.status(503);
            return;
        }
        res.status(200).redirect("/");
    })
    .catch(error => {
        res.status(500);
        // console.log(error);
    })

});

app.post('/api/register', (req, res) => {
    console.log(req.body.email);
    // res.json({message: "benar"});
    res.sendStatus(200);
});

// Static files
app.use('/', express.static(__dirname + '/public'));

// Default every route except the above to serve the index.html
app.get('*',  (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

export default app;