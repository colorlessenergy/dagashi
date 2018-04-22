document.addEventListener('snipcart.ready', function () {
    createItemCart(Snipcart.api.items.all(), document.querySelector(".checkout"))
});