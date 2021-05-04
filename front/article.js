import {getOneTeddy} from './getTeddy.js';
import {store} from './cart.js';
import {displayNbProduct} from './nbProduct.js'

main()

async function main(){
    const url =new URL(window.location.href);

    //Vérification qu'un item à bien été passé par l'url
    if(url.searchParams.get("id")){

        const id = url.searchParams.get("id");// Récupération de l'id compris dans l'url de la page

        const objet = await getOneTeddy(id);//Récupère le teddy correspondant à l'id passé dans l'url

        displayArticle(objet);//Affichage de l'objet dynamiquement

        const btn__store = document.getElementById("btn__store");

        //On ajoute le teddy au panier lors du click sur le bouton Ajouter au Panier et actualise le compteur d'articles dans le panier
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
 * Affiche dynamiquement le teddy de la page produit ainsi que ses options
 * @param {Object} teddy 
 */

function displayArticle(teddy){

    const templateElt = document.getElementById("templateArticle");
    const cloneElt = document.importNode(templateElt.content,true);
    cloneElt.getElementById("article__img").src = teddy.imageUrl;
    cloneElt.getElementById("article__img").alt = "Nounours : " + teddy.name;
    cloneElt.getElementById("article__name").textContent = teddy.name;
    cloneElt.getElementById("article__price").textContent = teddy.price / 100 + " €";
    cloneElt.getElementById("article__description").textContent = teddy.description;

    for(let color of teddy.colors){
        let colorElt = document.createElement('option');
        colorElt.value = color;
        colorElt.textContent = color;
        cloneElt.getElementById("article__colors").appendChild(colorElt);
    }

    document.getElementById("main").appendChild(cloneElt);
    
}

