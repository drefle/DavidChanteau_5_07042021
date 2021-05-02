import {getTeddies} from './getTeddy.js';
import { initCart } from './cart.js';

main()
async function main(){
    initCart(); //Initialisation du panier si il n'existe pas
    const teddies = await getTeddies(); //Récupération de tous les teddies auprès de l'api

    //Affichage de tous les teddies
    for(let teddy of teddies){
        displayAllTeddy(teddy);
    }
}


/**
 * Affichage de l'article passé en paramètre
 * @param {Object} teddy 
 */
function displayAllTeddy(teddy){
    const templateElt = document.getElementById("templateTeddy");
    const cloneElt = document.importNode(templateElt.content,true);
    cloneElt.getElementById("teddy").setAttribute("href","article.html?id="+teddy._id);
    cloneElt.getElementById("teddy__img").src = teddy.imageUrl;
    cloneElt.getElementById("teddy__img").alt = "Nounours : " + teddy.name;
    cloneElt.getElementById("teddy__name").textContent = teddy.name;
    cloneElt.getElementById("teddy__price").textContent = teddy.price / 100 + " €";

    document.getElementById("main").appendChild(cloneElt);
}

