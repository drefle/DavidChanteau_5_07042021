

main()

async function main(){

    let cart = JSON.parse(localStorage.getItem("cart"));
    let totalPrice = 0;

    for(let camera of cart){
        totalPrice += parseInt(camera.price / 100,10);
        displayCart(camera);
    }

    document.getElementById("total__price").textContent = totalPrice + " €";
}









function displayCart(camera){
    
    const templateElt = document.getElementById("templatePanier");
    const cloneElt = document.importNode(templateElt.content,true);
    cloneElt.getElementById("article__img").src = camera.imageUrl;
    cloneElt.getElementById("article__name").textContent = camera.name;
    cloneElt.getElementById("article__price").textContent = camera.price / 100 + " €";
    cloneElt.getElementById("article__lense").textContent = camera.lenses;

    document.getElementById("tbody").appendChild(cloneElt);
}

