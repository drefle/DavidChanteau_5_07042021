import { initCart } from "./cart.js";

main()

function main(){
    displayConfirmation();  //Affichage de la confirmation de commande
    localStorage.clear();   //Vidage du panier
    initCart();             //Initialisation du panier
}


/**
 * Accède à l'orderId si il existe dans le localStorage, sinon renvoie null
 * @return {String} l'orderId reçu par le serveur
 */

function getOrder(){
    return localStorage.getItem('order');
}

/**
 * Accède au firstName si il existe dans le localStorage, sinon renvoie null
 * @return {String} le firstName de l'utilisateur
 */
function getfirstName(){
    return localStorage.getItem('firstName')
}


/**
 * Accède au prix si il existe dans le localStorage, sinon renvoie null
 * @return {String} le prix du panier
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