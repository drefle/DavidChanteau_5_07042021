import {getTeddies} from './getTeddy.js';

main()
async function main(){

    const teddies = await getTeddies();
    for(let teddy of teddies){
        displayAllTeddy(teddy);
    }
}

function displayAllTeddy(teddy){
    const templateElt = document.getElementById("templateTeddy");
    const cloneElt = document.importNode(templateElt.content,true);
    cloneElt.getElementById("teddy").setAttribute("href","article.html?id="+teddy._id);
    cloneElt.getElementById("teddy__img").src = teddy.imageUrl;
    cloneElt.getElementById("teddy__name").textContent = teddy.name;
    cloneElt.getElementById("teddy__price").textContent = teddy.price / 100 + " €";

    document.getElementById("main").appendChild(cloneElt);
}

