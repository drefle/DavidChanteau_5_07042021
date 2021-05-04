import {isLocalStorageCart,isLocalStorageCartEmpty} from './cart.js';
import { displayNbProduct } from './nbProduct.js';

main()

async function main(){

    //Vérification que le panier existe et qu'il n'est pas vide
    if(isLocalStorageCart() && !isLocalStorageCartEmpty()){
        let cart = JSON.parse(localStorage.getItem("cart"));
        let totalPrice = 0;

        //Affichage des éléments du panier et du prix total du panier
        for(let teddy of cart){
            totalPrice += (teddy.product.price * parseInt(teddy.quantity,10) )/ 100;
            displayCart(teddy);
        }

        localStorage.setItem('price', totalPrice);
        document.getElementById("total__price").textContent = totalPrice + " €";

        let listeBtn = document.getElementsByClassName('btn');

        //Ajout d'une fonction de suppression de produit à chaque bouton associé au produit
        for(let btn of listeBtn){
            btn.addEventListener('click',function(e){
                deleteElement(btn)
            });
        }

    }
    else{
        window.alert('Le panier est vide')
    }
}


/**
 * Affichage de l'objet passé en paramètre
 * @param {Object} teddy 
 */
function displayCart(teddy){
    
    const templateElt = document.getElementById("templatePanier");
    const cloneElt = document.importNode(templateElt.content,true);
    cloneElt.getElementById("article__img").src = teddy.product.imageUrl;
    cloneElt.getElementById("article__name").textContent = teddy.product.name;
    cloneElt.getElementById("article__price").textContent = (teddy.product.price * parseInt(teddy.quantity,10) )/ 100 + " €";
    cloneElt.getElementById("article__colors").textContent = teddy.product.colors;
    cloneElt.getElementById("article__quantity").textContent = 'Quantité : ' +teddy.quantity;

    document.getElementById("tbody").appendChild(cloneElt);
}


/**
 * Supprime l'article associé au bouton passé en paramètre
 * @param {HTMLButtonElement} btn 
 */
function deleteElement(btn){
    let listeBtn = document.getElementsByClassName('btn');
    let indice = 0;

    while(listeBtn[indice]!= btn){
        indice++;
    }
    let cart = JSON.parse(localStorage.getItem('cart'));
    let listeArticle = document.getElementsByClassName('article');
    let priceArticle = parseInt(cart[indice].product.price,10)/100 * parseInt(cart[indice].quantity,10) ;

    cart.splice(indice,1);   //Supprime 1 élément dans le tableau à partir de l'indice fournit en paramètre
    localStorage.setItem('cart',JSON.stringify(cart));

    document.getElementById("total__price").textContent = parseInt(document.getElementById("total__price").textContent,10) - priceArticle + " €";
    listeArticle[indice].parentNode.removeChild(listeArticle[indice]); //Supprime l'article du DOM à la position de l'indice dans la liste d'articles
    displayNbProduct(); //Actualise le nombre d'article au compteur d'articles
    
    //Affiche un message si le panier est vide
    if(isLocalStorageCartEmpty()){
        window.alert('Le panier est vide')
    }
}
