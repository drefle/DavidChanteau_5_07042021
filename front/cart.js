


/**
 * Stocke dans le localStorage le teddy avec la color sélectionnée
 * @param {Object} objet teddy
 */

export function store(objet){
    initCart();// Initialise le panier si il n'est pas déjà créer
    let cart = JSON.parse(localStorage.getItem("cart"));
    let quantity = document.getElementById('article__quantity').value;
    
    objet.colors= document.getElementById('article__colors').value;

    let index = indexItemInCart(objet);

    if(index != null){
        quantity = parseInt(quantity,10) + parseInt(cart[index].quantity,10);
        cart[index].quantity = quantity.toString();
    }
    else{
    
        let itemList = {
            item : objet,
            quantity : quantity
        };


        cart.push(itemList)
        

    }
    localStorage.setItem("cart",JSON.stringify(cart));

    console.log(localStorage);
    console.log(cart);

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
    let cart = JSON.parse(localStorage.getItem("cart"));
    return cart.length==0?true:false;
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
            console.log('entré dans while indexItemincart')
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




