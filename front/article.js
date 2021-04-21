import {getCameras, getOneCamera} from './getCamera.js';
import {store, initCart} from './cart.js';

main()

async function main(){
    const url =new URL(window.location.href);
    const id = url.searchParams.get("id");// Récupération de l'id compris dans l'url de la page
    

    const cameras = await getCameras();// Récupération de la liste des caméras

    initCart();// Initialise le panier si il n'est pas déjà créer
    


    const objet = getOneCamera(cameras,id);//Récupère la caméra correspondant à l'id passé dans l'url

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

/**
 * Affiche dynamiquement la camera de la page produit ainsi que ses options
 * @param {Object} camera 
 */

function displayArticle(camera){

    const templateElt = document.getElementById("templateArticle");
    const cloneElt = document.importNode(templateElt.content,true);
    cloneElt.getElementById("article__img").src = camera.imageUrl;
    cloneElt.getElementById("article__name").textContent = camera.name;
    cloneElt.getElementById("article__price").textContent = camera.price / 100 + " €";
    cloneElt.getElementById("article__description").textContent = camera.description;

    for(let lense of camera.lenses){
        let lenseElt = document.createElement('option');
        lenseElt.value = lense;
        lenseElt.textContent = lense;
        cloneElt.getElementById("article__lenses").appendChild(lenseElt);
    }

    document.getElementById("main").appendChild(cloneElt);
    
}

