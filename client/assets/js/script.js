//'use strict'; 
//import axios from "axios";

const card_row = document.querySelector('.card-row')
// const feed = document.createElement("div");
const btn = document.querySelector('.getdata');

// create a card
let card = document.createElement('div');
let title = document.createElement('p');
let price = document.createElement('p');
card.append(title, price);
title.classList.add('card-title');
price.classList.add('card-price');


// Search 
let search_input = document.querySelector('search-input');
const search_btn = document.querySelector('search-btn');

const url = 'http://localhost:3000/books';
let booksData = [];

// let getBooks = async () => {
//     //let booksData = await axios.get(url)
//     let booksData = await fetch(url);
//     console.log(booksData);
// }

let getBooks = () => {
    fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(data => {
            booksData = data;
            console.log(booksData);
            booksData.forEach(book => {
                //display(book.title, book.price);
                let card = document.createElement('div');
                let title = document.createElement('p');
                let price = document.createElement('p');
                card.append(title, price);
                card.classList.add('card', 'col-', 'col-md-3');
                title.classList.add('card-title');
                price.classList.add('card-price');
                title.innerHTML = book.name;
                price.innerHTML = book.price;
                console.log(card)

                card_row.append(card)

            })
        })
        .catch(err => console.error(err));

}


btn?.addEventListener('click', getBooks);

let display = (t, p) => {
    console.log('display');

    title.innerHTML = t;
    price.innerHTML = p;

}

let getSearchInput = () => {
    console.log("search");
}

search_btn?.addEventListener('click', getSearchInput);

