// for the navigation
var responsiveNav = document.querySelector(".responsive-nav");
var hamburgerMenu = document.querySelector("#menu-hamburger");

hamburgerMenu.addEventListener("click", function () {
  responsiveNav.classList.toggle("menu-open");
  hamburgerMenu.classList.toggle("hamburger-menu");
});

// for cart navigation

var cartshow = document.querySelector(".cart");
var cartOpen = document.querySelector(".cart__open");
var shoppingbag = document.querySelector("#shopping-bag");

shoppingbag.addEventListener("click", function () {
  cartshow.classList.toggle("menu-open");
});

cartOpen.addEventListener("click", function () {
  cartshow.classList.toggle("menu-open");
});
// snipcart

var cartd = document.querySelector(".cart__content")

document.addEventListener('snipcart.ready', function() {
    console.log(Snipcart.api.items.all());
    createItemCart(Snipcart.api.items.all(), cartd)
    Snipcart.subscribe('item.added', function (item) {
      createItemCart(Snipcart.api.items.all(), cartd)
      cartshow.classList.toggle("menu-open");
    });
});

function createItemCart(obj, append) {
  append.innerHTML = "";

  var allEle = [];

  obj.forEach(function (current) {
    var createTitle = document.createElement("h2");
    createTitle.innerHTML = current.description;
    var createQuantity = document.createElement("p");
    createQuantity.innerHTML = "quantity " + current.quantity;
    var createPrice = document.createElement("p");
    createPrice.innerHTML = "price " + current.price;

    allEle.push(createTitle);
    allEle.push(createQuantity);
    allEle.push(createPrice);
  });

  allEle.forEach(function (current){
    append.appendChild(current);
  });

}
