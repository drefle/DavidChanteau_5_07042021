import { initCart } from "./cart.js";

main()

function main(){
    displayConfirmation();
    localStorage.clear();
    initCart();
}


/**
 * Accède à l'orderId si il existe dans le localStorage, sinon renvoie null
 */

function getOrder(){
    return localStorage.getItem('order');
}

/**
 * Accède au firstName si il existe dans le localStorage, sinon renvoie null
 */
function getfirstName(){
    return localStorage.getItem('firstName')
}


/**
 * Accède au prix si il existe dans le localStorage, sinon renvoie null
 */
function getPrice(){
    return localStorage.getItem('price');
}



/**
 * Affiche dynamiquement la page de confirmation de commande
 */
function displayConfirmation(){

    const templateElt = document.getElementById("templateConfirmation");
    const cloneElt = document.importNode(templateElt.content,true);
    cloneElt.getElementById("confirmation__orderid").textContent = getOrder();
    cloneElt.getElementById("confirmation__prénom").textContent = getfirstName();
    cloneElt.getElementById("confirmation__price").textContent =  getPrice() +  " €";

    document.getElementById("main").appendChild(cloneElt);
}