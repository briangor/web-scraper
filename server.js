import express from 'express';
import cors from 'cors';
import { books } from './db.js';

const app = express();
app.use(cors());

const hostname = 'briangor.xyz';
const port = 3000;


app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
    res.send('REST API with Node.js!');
});
app.get('/books', books);

//app.get('/books/:id', (req, res) => {});

app.listen(port, hostname, () => {
    console.log(`Express app listening on ${hostname}:${port}`);
});
