import {isLocalStorageCart,isLocalStorageCartEmpty} from './cart.js';

main()

async function main(){

    if(isLocalStorageCart() && !isLocalStorageCartEmpty()){
        let cart = JSON.parse(localStorage.getItem("cart"));
        let totalPrice = 0;

        for(let teddy of cart){
            totalPrice += (teddy.item.price * parseInt(teddy.quantity,10) )/ 100;
            displayCart(teddy);
        }
        localStorage.setItem('price', totalPrice);
        document.getElementById("total__price").textContent = totalPrice + " €";
    }
    else{
        window.alert('Le panier est vide')
    }
}

function displayCart(teddy){
    
    const templateElt = document.getElementById("templatePanier");
    const cloneElt = document.importNode(templateElt.content,true);
    cloneElt.getElementById("article__img").src = teddy.item.imageUrl;
    cloneElt.getElementById("article__name").textContent = teddy.item.name;
    cloneElt.getElementById("article__price").textContent = (teddy.item.price * parseInt(teddy.quantity,10) )/ 100 + " €";
    cloneElt.getElementById("article__colors").textContent = teddy.item.colors;
    cloneElt.getElementById("article__quantity").textContent = 'Quantité : ' +teddy.quantity; 

    document.getElementById("tbody").appendChild(cloneElt);
}

