//import axios from "axios";

const card_row = document.querySelector('.card-row')
// const feed = document.createElement("div");
const btn = document.querySelector('.getdata');
const placeholders = document.getElementById("placeholder");

// Search 
let search_input = document.querySelector('.search-input');
const search_btn = document.querySelector('.search-btn');

const url = 'http://localhost:3000/books';
let booksData = [];

let getBooks = async () => {
    try {
        let res = await fetch('http://localhost:3000/books')
        let booksData = await res.json();
        console.log(booksData);

        // image urls
        // https://edit.org/images/cat/book-covers-big-2019101610.jpg
        // https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198
        // https://assets.teenvogue.com/photos/5cd4384fac4d9e712fe2ebb0/2:3/w_1852,h_2778,c_limit/The%20Gravity%20of%20Us_.jpg

        let getBooks = () => {
            fetch('http://localhost:3000/books')
                .then(response => response.json())
                .then(data => {
                    booksData = data;
                    // console.log(booksData);
                    booksData.forEach(book => {
                        //display(book.title, book.price);
                        let card = document.createElement('div');
                        let title = document.createElement('h5');
                        let author = document.createElement('p');
                        let price = document.createElement('p');
                        let image = document.createElement('img');
                        card.append(image, title, author, price);
                        card.classList.add('card', 'col-', 'col-sm-4', 'col-md-3');
                        title.classList.add('card-title', 'fw-bold');
                        author.classList.add('card-author');
                        price.classList.add('card-price', 'fw-bold', 'text-success');
                        image.classList.add('card-image');
                        title.innerHTML = book.title;
                        author.innerHTML = book.author;
                        price.innerHTML = book.price;
                        image.src = book.image;

                        //console.log(card)
                        booksData.forEach(book => {
                            //display(book.title, book.price);
                            let card = document.createElement('div');
                            let title = document.createElement('h5');
                            let author = document.createElement('p');
                            let price = document.createElement('p');
                            let image = document.createElement('img');
                            card.append(image, title, author, price);
                            card.classList.add('card', 'col-', 'col-sm-4', 'col-md-3');
                            title.classList.add('card-title', 'fw-bold');
                            author.classList.add('card-author');
                            price.classList.add('card-price', 'fw-bold', 'text-success');
                            image.classList.add('card-image');
                            title.innerHTML = book.title;
                            author.innerHTML = book.author;
                            price.innerHTML = book.price;
                            image.src = book.image;

                            //console.log(card)

                            card_row.append(card)
                        })
                        placeholders.remove();
                    } catch (error) {
                        console.log(error);
                    }
                }

// Invoke the function to fetch data
getBooks();

            btn?.addEventListener('click', getBooks);

            let getSearchInput = () => {
                let keyword = search_input.value;
                //console.log(booksData);
                booksData.forEach(book => {
                    console.log(book.title);
                    if (book.title == keyword) {
                        console.log('Found the book!');
                        console.table(book.title, book.author, book.price);
                    }
                })

            }

            search_btn?.addEventListener('click', getSearchInput);

