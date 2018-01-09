"use strict";


const $ = require('jquery');

module.exports.fetchDogFood = () => {
    return new Promise( (resolve, reject) => {

        $.ajax({
        url: "../data/food.json"
        })
        .done(dogData => {
            resolve(dogData);
        })
        .fail( (error) =>{
            reject(error.statusText);
        });
    });
};

