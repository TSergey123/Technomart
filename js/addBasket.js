// let addBasket = document.getElementById("basket_add");
let addBasket = document.getElementsByClassName("basket_add");

let valueBasket = document.getElementById("basket_value");
let i = 11;

addBasket.onclick = function () {
	valueBasket.innerHTML = "Корзина: " + i++;
};
