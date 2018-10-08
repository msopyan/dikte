import app from './app';

// GLOBAL VARIABLES & INIT ETC.
const port = 4000;

// SERVER LISTEN
app.listen(port, () => {
    console.log(`App is running -> PORT ${port}`);
});