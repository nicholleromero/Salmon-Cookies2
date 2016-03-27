function cookieShop (shop, min, max, average) {
  this.shop = shop;
  this.min = min;
  this.max = max;
  this.average = average;
  this.total = 0;
  this.numCustomers = function() {
    var i = (Math.random() * 100 + 1);
    while ((i <= this.min) && (i >= this.max)) {
      i = (Math.random() * 100 + 1);
    }
      var cookieAmount = Math.floor((i * this.average));
      this.total += cookieAmount;
      return cookieAmount;
  }
}

var pioneerSquare = new cookieShop ('Pioneer Square', 17, 88, 5.2);
var portlandAirport = new cookieShop ('Portland Airport', 6, 24, 1.2);
var washingtonSquare = new cookieShop ('Washington Square', 11, 38, 1.9);
var sellwood = new cookieShop ('Sellwood', 20, 48, 3.3);
var pearlDistrict = new cookieShop ('Pearl District', 3, 24, 2.6);

var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
var shops = [pioneerSquare, portlandAirport, washingtonSquare, sellwood, pearlDistrict]

function addNumbers () {
  var listItem = document.getElemntById("pioneerSquare");
  listItem.innerHTML = pioneerSquare.numCustomers();
  var listItem = document.getElemntById("portlandAirport");
  listItem.innerHTML = portlandAirport.numCustomers();
  var listItem = document.getElemntById("washingtonSquare");
  listItem.innerHTML = washingtonSquare.numCustomers();
  var listItem = document.getElemntById("sellwood");
  listItem.innerHTML = sellwood.numCustomers();
  var listItem = document.getElemntById("pearlDistrict");
  listItem.innerHTML = pearlDistrict.numCustomers();
}

function addNumbersToList(place, cart) {
  var list = document.getElementById(place);
    for (var x = 0; x < hours.length; x++) {
      var listNumber = "<li>"+hours[x]+": "+cart.numCustomers()+" cookies"+"</li>";
      list.innerHTML += listNumber;
  }
    list.innerHTML += "<li>"+"Total: "+cart.total+" cookies"+"</li>"
}

shops.push(pioneerSquare);
shops.push(portlandAirport);
shops.push(washingtonSquare);
shops.push(sellwood);
shops.push(pearlDistrict);

addNumbersToList("pioneerSquare", pioneerSquare);
addNumbersToList("portlandAirport", portlandAirport);
addNumbersToList("washingtonSquare", washingtonSquare);
addNumbersToList("sellwood", sellwood);
addNumbersToList("pearlDistrict", pearlDistrict);
