genRestaurants();

function genRestaurants() {
  var restaurantsData = genRestaurantsData();
  
  var numOfColumns = 4;
  
  var html = "";
  
  for (var i = 0; i < restaurantsData.length; i++) {
    var restaurant = restaurantsData[i];
    
    var menuLink = "menus/" + restaurant.menu;
    var imageLink = "img/logos/" + restaurant.image;
    
    if (i % numOfColumns == 0) {
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
    
    if (i % numOfColumns == numOfColumns - 1) {
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
  
  var restaurant = {"name": "Cafe 220", "image": "cafe.png", "menu": "cafe220.pdf"};
  restaurantsData.push(restaurant);
  
  var restaurant = {"name": "Bangkok Cuisine", "image": "Bangkok Cuisine.png", "menu": "Bangkok Cuisine.pdf"};
  restaurantsData.push(restaurant);
  
  var restaurant = {"name": "Crepevine", "image": "crepevine.png", "menu": "crepevine.pdf"};
  restaurantsData.push(restaurant);
  
  var restaurant = {"name": "Darbar", "image": "Darbar.png", "menu": "Darbar Menu.pdf"};
  restaurantsData.push(restaurant);
  
  var restaurant = {"name": "LYFE Kitchen", "image": "lyfe.jpg", "menu": "lyfe.pdf"};
  restaurantsData.push(restaurant);
  
  var restaurant = {"name": "Howie's Artisan Pizza", "image": "Howie Artisan Pizza.png", "menu": "Howie Artisan Pizza Takeaway Menu.pdf"};
  restaurantsData.push(restaurant);
  
  var restaurant = {"name": "Taipan", "image": "taipan.png", "menu": "taipan.pdf"};
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
  
  return restaurantsData;
}