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

function evaluateForm(userForm) {
if (userForm.store.value == "") {
  userForm.store.setAttribute("class", "required");
  alert("Please enter in store name.");
}
if (userForm.min.value == ""){
  userForm.min.setAttribute("class", "required");
  alert("Please enter in minimum customers.");
}
if (userForm.max.value == ""){
  userForm.max.setAttribute("class", "required");
  alert("Please enter in maximum customers.");
}
if (userForm.average.value == ""){
  userForm.average.setAttribute("class", "required");
  alert("Please enter in average cookies purchased.");
}
var newName = userForm.store.value;
var newMin = parseInt(userForm.min.value);
var newMax = parseInt(userForm.max.value);
var newAvg = parseInt(userForm.average.value);
var newStore = new cookieShop (newName, newMin, newMax, newAvg);
addNumbersToList(newStore)
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
  var listItem = document.getElemntById("newStore");
  listItem.innerHTML = pearlDistrict.numCustomers();
}



function addNumbersToList(cart) {
  var list = document.getElementById("place");


  var shopData = "<tr>"+"<td>"+cart.shop+"</td>"
  for (var y = 0; y <hours.length; y++) {
      shopData += "<td>"+cart.numCustomers()+"</td>"
  }
  shopData += "</tr>"
  list.innerHTML += shopData

}
//    list.innerHTML += "<li>"+"Total: "+cart.total+" cookies"+"</li>"
var listItem = document.getElementById("hours");
  for(var times = 0; times < hours.length; times++) {
    var listTable = "<th>"+hours[times]+"</th>";
    listItem.innerHTML += listTable;

}

shops.push(pioneerSquare);
shops.push(portlandAirport);
shops.push(washingtonSquare);
shops.push(sellwood);
shops.push(pearlDistrict);
//shops.push(newStore);

addNumbersToList(pioneerSquare);
addNumbersToList(portlandAirport);
addNumbersToList(washingtonSquare);
addNumbersToList(sellwood);
addNumbersToList(pearlDistrict);
