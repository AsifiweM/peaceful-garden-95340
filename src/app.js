import 'babel-polyfill';
import express from 'express';
import routes from '../src/routes/routes';
import {} from 'dotenv/config';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.use(routes);

app.listen(port);
console.log('App running on Localhost:' + port);
