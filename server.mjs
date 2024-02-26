// import http from 'node:http';
import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello world with express'));

app.listen(3000);
console.log('Server on Port 3000');;