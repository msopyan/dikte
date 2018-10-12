import commandCreator from './utils';
import dotenv from 'dotenv';

dotenv.config();

export function registration(node) {
    let email = document.getElementById(node).value;
    let express_server  = `${process.env.EXPRESS_SERVER_PROTOCOL}://${process.env.EXPRESS_SERVER_URL}:${process.env.EXPRESS_SERVER_PORT}`;
    let url = `${express_server}/api/register`;
    let data = new FormData();
    data.append('email', email);

    console.log(`
        email: ${email},
        express_server: ${express_server},
        data: ${data.email}
        url: ${url}
    `);

    fetch(express_server + '/api/register', {
        method: 'POST',
        header: {
            "Content-Type":  "application/x-www-form-urlencoded"
        },
        body: data
    })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}