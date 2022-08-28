//'use strict'; 
//import axios from "axios";

const home = document.querySelector('.home');
// const feed = document.createElement("div");
const btn = document.querySelector('.getdata');

// if (typeof window !== 'undefined') {
//     //here `window` is available, so `window.document` (or simply `document`) is available too
//     const feed = document.createElement("div");
//   }

const url = 'http://localhost:3000/books';
let booksData = [];

let getBooks = async () => {
    //let booksData = await axios.get(url)
    //let booksData = await fetch(url);
    console.log(booksData);
}

let showAction = () => {
console.log('some activity')
}

btn?.addEventListener('click', getBooks);

// fetch(url).then(res => res.json())
// .then(data => console.log(data));

fetch('http://localhost:3000/books')
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err)); 