import { isLocalStorageCart, isLocalStorageCartEmpty, lengthLocalStorageCart } from "./cart.js";

/**
 * Affiche le nombre de produit contenu dans le panier
 */
export function displayNbProduct(){
    let nbProduct = 0;
    if(isLocalStorageCart() && !isLocalStorageCartEmpty()){
        nbProduct = lengthLocalStorageCart();
    }
    document.getElementById('nb__product').textContent = nbProduct;
}

displayNbProduct();