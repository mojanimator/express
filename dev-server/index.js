import express from 'express';

const app = express();
const HOST_NAME = 'localhost';
const PORT = 3000;

const registerRoutes = require('./routes');
const setEnvironment = require('./config/env');

const {connectToDB} = require('./config/db');

// import {registerRoutes} from "./routes";

setEnvironment(app);
connectToDB();
registerRoutes(app);


app.get('/', (req, res) => {
    if (process.env.NODE_ENV !== 'production') {
        return res.send('run server in dev mode');
    } else {
        return res.sendFile('index.html', {root: __dirname + "/../dist/"})
    }
});
app.listen(PORT, () => console.log(`server run in ${process.env.NODE_ENV} at http://${HOST_NAME}:${PORT}/`));


// nodejs codes
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('hello');
// });
//
// server.listen(PORT, HOST_NAME, () => {
//     console.log(`server run at http://${HOST_NAME}:${PORT}/`)
// });