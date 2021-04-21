


/**
 * Stocke dans le localStorage la camera avec la lentille sélectionnée
 * @param {Object} objet camera
 */

export function store(objet){

    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(objet)

    objet.lenses= document.getElementById('article__lenses').value;

    localStorage.setItem("cart",JSON.stringify(cart));

    console.log(localStorage);
    console.log(cart);

}

// initialise le panier dans le localStorage avec un tableau pour stocker les produits

export function initCart(){

    if(localStorage.getItem("cart")){
        console.log(localStorage);
    }
    else{
        let cart = [];
        localStorage.setItem("cart",JSON.stringify(cart));
    }
    
}

export function getCart(){
    return JSON.parse(localStorage.getItem("cart"));
}


