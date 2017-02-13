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
    var title = etsyData.results[i].title;
    var link = etsyData.results[i].url;
    var hover = etsyData.results[i].description;
    $(".products").append(`
                      <div class="product" title="${title}">
                      <a href="${link}">
                      <div class="image-box">
                        <img class="hamburger" src="./assets/hamburger.png"/>
                        <img class="heart" src="./assets/heart.png"/>
                        <img class="image" src="${image}" />
                      </div>

                      \n <div class="prod-box"><div class="title">${title}</div>
                      \n <div class="shop-name">${shopName}</div>
                      \n <div class="price">$${price}</div></div>
                      </a>
                      </div>
                    `);
  }
}

populateProducts();
