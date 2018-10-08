import request from 'supertest';
import app from '../app';

describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return ( 
            request(app)
            .get('/')
            .then((response) => {
                expect(response.statusCode).toBe(200);

            })
        );
    });
});

describe('Test the /verify path', () => {
    test('It should have all variable', () => {
        retrun (
            request(app)
            .get('/verify')
            .then((response))
        )
    })
})