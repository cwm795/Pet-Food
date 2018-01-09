        'use strict';
const $ = require("jquery");
const _StartCase = require("lodash.startcase");

module.exports.displayFood = (dogData) => {
    let $dogFood = $("#dogFood");
dogData.forEach((brand, index) => {
  // console.log(`brand${index}`);
  $dogFood.append(`<h3>${_StartCase(brand.name)}</h3>`);
  brand.types.forEach(brandType => {
    $dogFood.append(`<h4>${_StartCase(brandType.type)}</h4>`);
    brandType.volumes.forEach(vol => {
      $dogFood.append(`<h5> Size: ${vol.name} Price: $${vol.price}</h5>`);
    });
  });
});
};