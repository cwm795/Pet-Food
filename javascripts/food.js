'use strict';
console.log("Hey there");

const $ = require('jquery');
const _StartCase = require("lodash.startcase");

// ajax call
$.ajax({
    url: '../data/food.json'
})
.done( (dogData) => {
console.log(dogData.dog_brands);
let $dogFood = $("#dogFood");
dogData.dog_brands.forEach( (brand, index) =>{
        // console.log(`brand${index}`);
        $("#dogFood").append(`<h3>${_StartCase(brand.name)}</h3>`);
        brand.types.forEach( (brandType) => {
            $("#dogFood").append(`<h4>${_StartCase(brandType.type)}</h4>`);
                brandType.volumes.forEach( (vol) => {
                    $dogFood.append(`<h5> Size: ${vol.name} Price: $${vol.price}</h5>`);
             });
        });
    });
})
.fail( (error) =>{
    console.log('whoops', error.statusText);

});