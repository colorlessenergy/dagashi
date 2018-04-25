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
  $(".opaque__screen")[0].classList.toggle("open-opaque");
});

cartOpen.addEventListener("click", function () {
  cartshow.classList.toggle("menu-open");
  $(".opaque__screen")[0].classList.toggle("open-opaque");
});


// snipcart

var cartd = document.querySelector(".cart__content");

// close the cart menu when pressing outside of it
window.onclick = function (event) {
  if (event.target == document.querySelector(".open-opaque")) {
    cartshow.classList.toggle("menu-open");
    $(".opaque__screen")[0].classList.toggle("open-opaque");
  }
}
// the value of the input quantity update the value in the cart
$('.desktop .buying__input').change(function () {
    $('.desktop .buying__button').data('item-quantity', $(this).val());
});

$('.mobile .buying__input').change(function () {
  $('.mobile .buying__button').data('item-quantity', $(this).val());
});

document.addEventListener('snipcart.ready', function() {
	createItemCart(Snipcart.api.items.all(), cartd);
	createCart(Snipcart.api.items.all(), $(".template-checkout-items"));

    Snipcart.subscribe('item.added', function (item) {

      createItemCart(Snipcart.api.items.all(), cartd)
			createCart(Snipcart.api.items.all(), $(".template-checkout-items"));

			// toggle css to focus on the cart
			cartshow.classList.toggle("menu-open");
      $(".opaque__screen")[0].classList.toggle("open-opaque");
    });
});

// create the meta data for each item in the quick cart.

function createItemCart(obj, append) {
  if (append) {
		append.innerHTML = "";
		obj.forEach(function (current) {
			// console.log(current);
			$(append)
				.append("<div class='cart__item'> <img src=" + current.image + " /> <div class='cart__meta'> <h2> " + current.description + " </h2> <p> quantity: " + current.quantity + " </p> <p> price: " + current.price + " </p> </div> <p data-item-id='"+ current.id + "' class='exit'> x </p> </div>");

			deleteItem(current);


		});

  }

}

function createCart(obj, append) {

	if (append) {
		
		append.innerHTML = "";
		obj.forEach(function (current) {
		$(append)
			.append(
			'<div class= "template-checkout template-checkout-items"><div class="template-checkout__cart"><img src="' + current.image + '" alt=""><div class="cart__meta"><h2> ' + current.description + ' </h2><p> ID: ' + current.id + ' </p><p class="exit" data-item-id="'+ current.id + '">remove</p></div></div><p class="template-checkout__price">$' + current.price + '</p><div class="template-checkout__qty"><input type="number" value="' + Number(current.quantity) + '" class="buying__input"></div><p class="template-checkout__total">$' + current.totalPrice + '</p></div>'
			)

			deleteItem(current);
		});

	};
  
}


function deleteItem(obj) {
	$(".exit[data-item-id='" + obj.id + "']").click(function () {

		Snipcart.api.items.remove($(this).data("item-id"))
			.then(function (item) {
				// remove the items both in the subcart and the actual cart page
				createItemCart(Snipcart.api.items.all(), cartd);

				createCart(Snipcart.api.items.all(), document.querySelector(".template-checkout-items"));
			});
	});
}
