import { isLocalStorageCart, isLocalStorageCartEmpty, lengthLocalStorageCart } from "./cart.js";

export function displayNbProduct(){
    let nbProduct = 0;
    if(isLocalStorageCart() && !isLocalStorageCartEmpty()){
        nbProduct = lengthLocalStorageCart();
    }
    document.getElementById('nb__product').textContent = nbProduct;
}

displayNbProduct();