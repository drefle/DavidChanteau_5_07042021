import {getOneProduct} from './getProduct.js';
import {store} from './cart.js';
import {displayNbProduct} from './nbProduct.js'

main()

async function main(){
    const url =new URL(window.location.href);

    //Vérification qu'un produit à bien été passé par l'url
    if(url.searchParams.get("id")){

        const id = url.searchParams.get("id");// Récupération de l'id compris dans l'url de la page

        const objet = await getOneProduct(id);//Récupère le produit correspondant à l'id passé dans l'url

        displayArticle(objet);//Affichage de l'objet dynamiquement

        const btn__store = document.getElementById("btn__store");

        //On ajoute le produit au panier lors du click sur le bouton Ajouter au Panier et actualise le compteur d'articles dans le panier
        btn__store.addEventListener('click',() => {
            store(objet);
            displayNbProduct();
        });
    }
    else{
        window.alert("Aucun nounours n'a été sélectionné!")
    }
}

/**
 * Affiche dynamiquement le produit de la page produit ainsi que ses options
 * @param {Object} product 
 */

function displayArticle(product){

    const templateElt = document.getElementById("templateArticle");
    const cloneElt = document.importNode(templateElt.content,true);
    cloneElt.getElementById("article__img").src = product.imageUrl;
    cloneElt.getElementById("article__img").alt = "Nounours : " + product.name;
    cloneElt.getElementById("article__name").textContent = product.name;
    cloneElt.getElementById("article__price").textContent = product.price / 100 + " €";
    cloneElt.getElementById("article__description").textContent = product.description;

    for(let color of product.colors){
        let colorElt = document.createElement('option');
        colorElt.value = color;
        colorElt.textContent = color;
        cloneElt.getElementById("article__colors").appendChild(colorElt);
    }

    document.getElementById("main").appendChild(cloneElt);
    
}

