import axios from 'axios';
import cheerio from 'cheerio';
// import fs from 'fs';
// import { conn } from './db.js';
//const app = express();

// URL of the page we want to scrape
const url = 'https://textbookcentre.com/catalogue/category/books';

// Async function which scrapes the data
async function scrapeData() {
    try {
        // Fetch HTML of the page we want to scrape
        const { data } = await axios.get(url);

        // Load HTML we fetched in the previous line
        const $ = cheerio.load(data);

        // Select all the list items in plainlist class
        const bookItems = $(".product-item");

        // Stores data for all books
        const books = [];

        // Use .each method to loop through the bookItems
        bookItems.each((idx, el) => {
            // Object holding data for each book item
            const book = { title: '', author: '', price: 0 , image: ''};

            // Select the text content of a and span elements
            // Store the textcontent in the above object
            book.title = $(el).find($(".product-card-name")).text();
            book.author = $(el).find($(".text-muted")).text().trim();
            book.price = $(el).find($(".stockrecord-price-current")).text().trim();
            book.image = $(el).find($('img')).attr();

            console.log(book.author)

            books.push(book);

        });
        // Logs books array to the console
        //console.dir(books);
        console.log(books.length);

        


    } catch (err) {
        console.error(err);
    }
}

scrapeData();

