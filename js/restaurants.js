genRestaurants();

function genRestaurants() {
  var restaurantsData = genRestaurantsData();
  
  var html = "";
  
  for (var i = 0; i < restaurantsData.length; i++) {
    var restaurant = restaurantsData[i];
    
    var menuLink = "menus/" + restaurant.menu;
    var imageLink = "img/logos/" + restaurant.image;
    
    if (i % 4 == 0) {
      html += '<div class="row">';
    }
    
    html += '<div class="span3">' +
      '<div class="media">' +
        '<a class="pull-left" target="_blank" href="' + menuLink + '">' +
          '<img class="media-object img-rounded" src="' + imageLink + '">' + 
        '</a>' +
        '<div class="media-body">' +
          '<h4 class="media-heading">' + restaurant.name + '</h4>' +
          '<a target="_blank" href="' + menuLink + '">View Menu</a>' +
        '</div>' +
      '</div>' +
    '</div>';
    
    if (i % 4 == 3) {
      html += '</div>';
      if (i + 1 != restaurantsData.length) {
        html += '<br />';
      }
    }
  }
  
  $("#restaurants").append(html);
}

function genRestaurantsData() {
  var restaurantsData = new Array();
  
  var restaurant = {"name": "Bangkok Cuisine", "image": "Bangkok Cuisine.png", "menu": "Bangkok Cuisine.pdf"};
  restaurantsData.push(restaurant);
  
  var restaurant = {"name": "Crepevine", "image": "crepevine.png", "menu": "crepevine.pdf"};
  restaurantsData.push(restaurant);
  
  var restaurant = {"name": "Darbar", "image": "Darbar.png", "menu": "Darbar Menu.pdf"};
  restaurantsData.push(restaurant);
  
  var restaurant = {"name": "Garden Fresh", "image": "garden_fresh.jpg", "menu": "garden_fresh.pdf"};
  restaurantsData.push(restaurant);
  
  var restaurant = {"name": "Howie Artisan Pizza", "image": "Howie Artisan Pizza.png", "menu": "Howie Artisan Pizza Takeaway Menu.pdf"};
  restaurantsData.push(restaurant);
  
  var restaurant = {"name": "Hunan Garden", "image": "hunan_garden.png", "menu": "hunan_garden.pdf"};
  restaurantsData.push(restaurant);
  
  var restaurant = {"name": "Kanpai Sushi", "image": "kanpai.gif", "menu": "kanpai_sushi.pdf"};
  restaurantsData.push(restaurant);
  
  var restaurant = {"name": "Oren's Hummus", "image": "orens_hummus.png", "menu": "orens_hummus.pdf"};
  restaurantsData.push(restaurant);
  
  var restaurant = {"name": "Patxi's Pizza", "image": "Patxi.png", "menu": "Patxis Pizza Menu.pdf"};
  restaurantsData.push(restaurant);
  
  var restaurant = {"name": "Sprout Cafe", "image": "sprout_cafe.gif", "menu": "sprout_cafe.pdf"};
  restaurantsData.push(restaurant);
  
  var restaurant = {"name": "Tamarine", "image": "Tamarine.png", "menu": "Tamarine Menu.pdf"};
  restaurantsData.push(restaurant);
  
  var restaurant = {"name": "Village Cheese House", "image": "village_cheese_house.png", "menu": "village_cheese_house.pdf"};
  restaurantsData.push(restaurant);
  
  return restaurantsData;
}