import {getProducts} from './getProduct.js';
import { initCart, isLocalStorageCart } from './cart.js';

main()
async function main(){
    if(!isLocalStorageCart()){
        initCart(); //Initialisation du panier si il n'existe pas
    }
    const products = await getProducts(); //Récupération de tous les produits auprès de l'api

    //Affichage de tous les products
    for(let product of products){
        displayAllProducts(product);
    }
}


/**
 * Affichage de l'article passé en paramètre
 * @param {Object} product 
 */
function displayAllProducts(product){
    const templateElt = document.getElementById("templateProduct");
    const cloneElt = document.importNode(templateElt.content,true);
    cloneElt.getElementById("product").setAttribute("href","article.html?id="+product._id);
    cloneElt.getElementById("product__img").src = product.imageUrl;
    cloneElt.getElementById("product__img").alt = "Nounours : " + product.name;
    cloneElt.getElementById("product__name").textContent = product.name;
    cloneElt.getElementById("product__description").textContent = product.description;
    cloneElt.getElementById("product__price").textContent = product.price / 100 + " €";

    document.getElementById("main").appendChild(cloneElt);
}

