import express from 'express';
//import { json } from 'body-parser';
import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';

const app = express();

// URL of the page we want to scrape
//const url = "https://scrapeme.live/shop/";
const url = 'https://yum.co.ke/menu/kfc-junction';
 
//  axios.get(url)
//       .then(({ data }) => console.log(data));

// Async function which scrapes the data
async function scrapeData() {
    try {
        // Fetch HTML of the page we want to scrape
        const { data } = await axios.get(url);

        // Load HTML we fetched in the previous line
        const $ = cheerio.load(data);

        // Select all the list items in plainlist class
        //const listItems = $(".plainlist ul li");
        const foodItems = $(".food-menu");
        // .menu-text
        // .tab-content > #menu > .row _ div _ .row 
        // row>block+graybar+card _ .food-menu
        // .food-menu > li > .item > div > p
        // Stores data for all countries
        const foods = [];
        let priceArray = [];
        //console.log($(".food-menu>li.menuItem>div.item>div.container-fluid>p.name").text());
        //console.log($(".food-menu>li.menuItem>div.item>div.pull-right>span").text());
        // Use .each method to loop through the li we selected
        foodItems.each((idx, el) => {
            // Object holding data for each food item
            const food = { name: '', price: ''};
            let priceFood;
            // Select the text content of a and span elements
            // Store the textcontent in the above object
            //food.name = $(el).children("li.menuItem>div.item>div.container-fluid>p.name").text();
            //food.price = $(el).children("span").text();
            //food.name = $(el).find($("p.name").text());
            //food.price = $(el).find($("div.pull-right").children("span")).text(); // works with logic err
            // priceFood = $(el).find($("div.item")).find($("span")).text();
            priceFood = $(el).end($("span"))
            // Populate foods array with food data
            //countries.push(country);
            foods.push(food);
            priceArray.push(priceFood);
        });
        // Logs foods array to the console
        console.dir(foods);
        console.log(priceArray);

        // Write countries array in countries.json file
        /* fs.writeFile("coutries.json", JSON.stringify(countries, null, 2), (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("Successfully written data to file");
        }); */
    } catch (err) {
        console.error(err);
    }
}

  // Invoke the above function
  scrapeData();