import express from 'express';
import cors from 'cors';
import { getBookById, getBooks } from './db.js';

const app = express();
app.use(cors());

const hostname = 'briangor.xyz';
const port = 3000;


app.get('/', (req, res) => {
    res.send('REST API with Node.js!');
});
app.get('/books', getBooks);

app.get('/books/:id', getBookById);

app.listen(port, hostname, () => {
    console.log(`Express app listening on ${hostname}:${port}`);
}); 
