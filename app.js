// IMPORT MODULES
import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';


// GLOBAL VARIABLES & INIT ETC.
dotenv.config();
const app                   = express();
const notula_server_url     = process.env.NOTULA_MAIN_SERVER_URL;
const notula_server_port    = process.env.NOTULA_MAIN_SERVER_PORT;

// USE
app.use(express.static(__dirname + '/public'));

// ENDPOINT
app.get('/', (req, res) => {
    res.status(200).sendFile('index.html');
});

app.get('/verify', (req, res) => {
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
            res.status(503).redirect("/");
            return;
        }
        res.status(200).redirect("/");
    })
    .catch(error => {
        res.status(500);
        // console.log(error);
    })

});

export default app;

