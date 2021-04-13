import {getCameras} from './getCamera.mjs';

main()
async function main(){

    const cameras = await getCameras();

    for(let camera of cameras){
        displayAllCamera(camera);
    }
}

export function displayAllCamera(camera){
    const templateElt = document.getElementById("templateArticle");
    const cloneElt = document.importNode(templateElt.content,true);
    cloneElt.getElementById("article").setAttribute("href","article.html?id="+camera._id);
    cloneElt.getElementById("article__img").src = camera.imageUrl;
    cloneElt.getElementById("article__name").textContent = camera.name;
    cloneElt.getElementById("article__price").textContent = camera.price / 1000 + " €";

    document.getElementById("main").appendChild(cloneElt);
}