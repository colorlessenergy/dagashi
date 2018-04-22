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

var cartd = document.querySelector(".cart__content");

// the value of the input qunatity update the value in the cart
$('.desktop .buying__input').change(function() {
  $('.desktop .buying__button').data('item-quantity', $(this).val());
});

document.addEventListener('snipcart.ready', function() {
    createItemCart(Snipcart.api.items.all(), cartd)
    Snipcart.subscribe('item.added', function (item) {
      console.log(item, Snipcart.api.items.all());
      createItemCart(Snipcart.api.items.all(), cartd)
      cartshow.classList.toggle("menu-open");
    });
});

// create the meta data for each item in the quick cart.

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
// // remove item
//
// // Snipcart.api.items.remove('SMARTPHONE')
// //     .then(function (item) { console.log(item); });
