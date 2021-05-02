
/**
 * Stocke dans le localStorage le teddy avec la color sélectionnée
 * @param {Object} objet teddy
 */

export function store(objet){

    //Vérification si le panier n'existe pas
    if(!isLocalStorageCart()){
        initCart();// Initialise le panier si il n'est pas déjà créer
    }
    
    let cart = JSON.parse(localStorage.getItem("cart"));               
    let quantity = document.getElementById('article__quantity').value;
    
    objet.colors= document.getElementById('article__colors').value;

    let index = indexItemInCart(objet);    //Retourne l'index de l'objet dans le panier si il existe déjà, null sinon

    // Si null, alors on ajoute la quantité choisi à la quantité de l'item dans le panier
    if(index != null){
        quantity = parseInt(quantity,10) + parseInt(cart[index].quantity,10);
        cart[index].quantity = quantity.toString();
    }

    //Sinon on crée l'objet dans le panier avec l'item et sa quantité
    else{
    
        let itemList = {
            item : objet,
            quantity : quantity
        };


        cart.push(itemList)

    }
    localStorage.setItem("cart",JSON.stringify(cart));

}

/**
 * Détermine si le panier existe, true si il l'est, false sinon
 * @return {Boolean}
 */

export function isLocalStorageCart(){
    return localStorage.getItem('cart')?true:false;
}

/**
 * Détermine si le panier est vide, true si il l'est, false sinon
 * @return {Boolean}
 */

export function isLocalStorageCartEmpty(){
    if(isLocalStorageCart()){
        return JSON.parse(localStorage.getItem("cart")).length == 0?true:false;
    }
    else{
        return null;
    }
}

/**
 * Détermine le nombre d'éléments dans le panier
 */

export function lengthLocalStorageCart(){
    return JSON.parse(localStorage.getItem('cart')).length;
}

/**
 * Recherche l'item passé en paramètre dans le panier, renvoie son indice si il est trouvé, null sinon
 * @param {Object} item Le nounours ajouté au panier
 * @return {Int}
 */

function indexItemInCart(item){
    let cart = JSON.parse(localStorage.getItem("cart"));
    let indice = 0;

    if(!isLocalStorageCartEmpty()){
        while((cart[indice].item._id != item._id || cart[indice].item.colors != item.colors)&&(indice != cart.length -1)){
            indice++;
        }
    
        if(cart[indice].item._id == item._id && cart[indice].item.colors == item.colors){
            return indice;
        }
    }
    return null;
}

// initialise le panier dans le localStorage avec un tableau pour stocker les produits

export function initCart(){

    if(isLocalStorageCart()){
        console.log(localStorage);
    }
    else{
        let cart = [];
        localStorage.setItem("cart",JSON.stringify(cart));
    }
    
}

/**
 * Renvoie une liste des id des objet contenu dans le panier
 * @return {String[]}
 */

export function getCartId(){
    let cartId = [];
    
    if(isLocalStorageCartEmpty()){
        window.alert("Le panier est vide")
    }
    else{
        let cart = JSON.parse(localStorage.getItem("cart"));

        for(let element of cart){
            cartId.push(element.item._id);
        }
        return cartId;
    }
}




