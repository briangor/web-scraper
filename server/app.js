import axios from 'axios';
import cheerio from 'cheerio';
//import fs from 'fs';
import { conn } from './db.js';

// URL of the page we want to scrape
const url = 'https://textbookcentre.com/catalogue/category/books';
const baseUrl = 'https://textbookcentre.com/';
 
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
            const book = { title: '', author: '', price: '', image: ''  };

            // Select the text content of the elements
            // Store the textcontent in the above object
            book.title = $(el).find($(".product-card-name")).text();
            book.author = $(el).find($("span.text-muted")).text();
            book.price = $(el).find($(".stockrecord-price-current")).text().trim(); // implement conversion to number
            book.image = `${baseUrl}`+$(el).find($('.product-card-img-container img')).attr().src;

            if (book.author == ' ' || book.author == null) {
                book.author = 'Publishers';
            }

            books.push(book);
        });
        // Logs books array to the console
        console.dir(books);
        console.log(books.length);

        // Write books array in books.json file
        /* fs.writeFile("books.json", JSON.stringify(books, null, 2), (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("Successfully written data to file");
        });
        fs.close(); */

        // Write scraped books data in mysql db once 
        // Implement a mechanism to prevent duplicates
        conn.query( `INSERT INTO books (title, author, price, image) VALUES ? `, 
        [books.map(book => [book.title, book.author, book.price, book.image])],(err, res) => {
            if(err) throw err;
            console.log("Data inserted successfully!");
        }
        ) 

    } catch (err) {
        console.error(err);
    }
}

// Invoke the above function
scrapeData();

// Storing the JSON format data in data object
// const data = fs.readFileSync("books.json");
// const books = JSON.parse(data);
// console.log(books);