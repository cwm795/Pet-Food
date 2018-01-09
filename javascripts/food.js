'use strict';
console.log("Hey there");

const $ = require('jquery');

// ajax call
$.ajax({
    url: '../data/food.json'
})
.done( (dogData) => {
console.log(dogData.dog_brands);
let $dogFood = $("#dogFood");
dogData.dog_brands.forEach( (brand, index) =>{
        // console.log(`brand${index}`);
        $("#dogFood").append(`<h3>${brand.name}</h3>`);
        brand.types.forEach( (brandType) => {
            $("#dogFood").append(`<h4>${brandType.type}</h4>`);
                brandType.volumes.forEach( (vol) => {
                    $dogFood.append('<h5>Size: ${vol.name} Price: $${vol.price}</h5>');
             });
        });
    });
})
.fail( (error) =>{
    console.log('whoops', error.statusText);

});