import {getCameras, getOneCamera} from './getCamera.mjs';

main()

async function main(){
    const url =new URL(window.location.href);
    const id = url.searchParams.get("id");
    

    const cameras = await getCameras();

    initCart();
    


    const objet = getOneCamera(cameras,id);

    displayArticle(objet);



    const btn__store = document.getElementById("btn__store");
    btn__store.addEventListener('click',() => {
        store(objet);
    });




}

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

function store(objet){

    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(objet)

    objet.lenses= document.getElementById('article__lenses').value;

    localStorage.setItem("cart",JSON.stringify(cart));

    console.log(localStorage);
    console.log(cart);

}

function initCart(){

    if(localStorage.getItem("cart")){
        console.log(localStorage);
    }
    else{
        let cart = [];
        localStorage.setItem("cart",JSON.stringify(cart));
    }
    
}
