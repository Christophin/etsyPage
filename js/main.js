// image: etsyData.results[i].Images[0].url_75x75
//
// shop name: etsyData.results[i].Shop.login_name
//
// price: etsyData.results[i].price
//
// title: etsyData.results[i].title
//
// description(hover): etsyData.results[i].description
//
// link: etsyData.results[i].url

var populateProducts = function ()  {
  for (i = 0; i < 16; i++)  {
    var image = etsyData.results[i].Images[0].url_170x135;
    var shopName = etsyData.results[i].Shop.login_name;
    var price = etsyData.results[i].price;
    var title = etsyData.results[i].title.substring(0, 24);
    var product = $(".product").eq(i);
    $(product).html(`<img class="image" src="${image}" /> \n <div class="title">${title}...</div> \n <div class="shop-name">${shopName}</div> \n <div class="price">${price}</div>`);
  }
}

populateProducts();
