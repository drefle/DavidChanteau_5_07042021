import {getTeddies, getOneTeddy} from './getTeddy.js';
import {store, initCart} from './cart.js';

main()

async function main(){
    const url =new URL(window.location.href);

    if(url.searchParams.get("id")){


        const id = url.searchParams.get("id");// Récupération de l'id compris dans l'url de la page
    

        const teddies = await getTeddies();// Récupération de la liste des caméras

        
        


        const objet = getOneTeddy(teddies,id);//Récupère la caméra correspondant à l'id passé dans l'url

        if(objet==null){
            console.log('Erreur lors de la récupération des données')
        }

        else{
            displayArticle(objet);//Affichage de l'objet dynamiquement

            const btn__store = document.getElementById("btn__store");

            //On ajoute la caméra au panier lors du click sur le bouton Ajouter au Panier
            btn__store.addEventListener('click',() => {
                store(objet);
            });
        }

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

