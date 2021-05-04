
/**
 * Stocke dans le localStorage le produit avec la color sélectionnée
 * @param {Object} product
 */

export function store(product){

    //Vérification si le panier n'existe pas
    if(!isLocalStorageCart()){
        initCart();// Initialise le panier si il n'est pas déjà créer
    }
    
    let cart = JSON.parse(localStorage.getItem("cart"));               
    let quantity = document.getElementById('article__quantity').value;
    let index = null;
    
    product.colors= document.getElementById('article__colors').value;
    if(!isLocalStorageCartEmpty()){
        
        index = indexProductInCart(product);    //Retourne l'index de le produit dans le panier si il existe déjà, null sinon
    }

    // Si null, alors on ajoute la quantité choisi à la quantité du produit dans le panier
    if(index != null){
        quantity = parseInt(quantity,10) + parseInt(cart[index].quantity,10);
        cart[index].quantity = quantity.toString();
    }

    //Sinon on crée le produit dans le panier avec le produit et sa quantité
    else{
    
        let productList = {
            product : product,
            quantity : quantity
        };


        cart.push(productList)

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
    return JSON.parse(localStorage.getItem("cart")).length == 0?true:false;
}

/**
 * Détermine le nombre d'éléments dans le panier
 */

export function lengthLocalStorageCart(){
    return JSON.parse(localStorage.getItem('cart')).length;
}

/**
 * Recherche le produit passé en paramètre dans le panier, renvoie son indice si il est trouvé, null sinon
 * @param {Object} product Le nounours ajouté au panier
 * @return {Int}
 */

function indexProductInCart(product){
    let cart = JSON.parse(localStorage.getItem("cart"));
    let indice = 0;

    while((cart[indice].product._id != product._id || cart[indice].product.colors != product.colors) && (indice != cart.length -1)){
        indice++;
    }

    if(cart[indice].product._id == product._id && cart[indice].product.colors == product.colors){
        return indice;
    }
    else{
        return null;
    }
    
}

// initialise le panier dans le localStorage avec un tableau pour stocker les produits

export function initCart(){
    let cart = [];
    localStorage.setItem("cart",JSON.stringify(cart));
}

/**
 * Renvoie une liste des id des produits contenu dans le panier
 * @return {String[]}
 */

export function getCartId(){
    let cartId = [];
    let cart = JSON.parse(localStorage.getItem("cart"));

    for(let element of cart){
        cartId.push(element.product._id);
    }
    return cartId;
}




