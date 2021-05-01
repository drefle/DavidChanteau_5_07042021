import {isLocalStorageCart,isLocalStorageCartEmpty} from './cart.js';
import { displayNbProduct } from './nbProduct.js';

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

        let listeBtn = document.getElementsByClassName('btn');

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



function deleteElement(btn){
    console.log(btn)
    let listeBtn = document.getElementsByClassName('btn');
    let index = 0;
    console.log(index)

    while(listeBtn[index]!= btn){
        index++;
    }
    let cart = JSON.parse(localStorage.getItem('cart'));
    let listeArticle = document.getElementsByClassName('article');
    let priceArticle = parseInt(cart[index].item.price,10)/100 * parseInt(cart[index].quantity,10) ;

    cart.splice(index,1);
    localStorage.setItem('cart',JSON.stringify(cart));

    document.getElementById("total__price").textContent = parseInt(document.getElementById("total__price").textContent,10) - priceArticle + " €";
    listeArticle[index].parentNode.removeChild(listeArticle[index]);
    displayNbProduct();
    
    if(isLocalStorageCartEmpty()){
        window.alert('Le panier est vide')
    }
}
