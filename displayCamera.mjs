import {getCameras} from './getCamera.mjs';

main()
async function main(){

    const cameras = await getCameras();

    for(let camera of cameras){
        displayAllCamera(camera);
    }
}

export function displayAllCamera(camera){
    const templateElt = document.getElementById("templateCamera");
    const cloneElt = document.importNode(templateElt.content,true);
    cloneElt.getElementById("camera").setAttribute("href","article.html?id="+camera._id);
    cloneElt.getElementById("camera__img").src = camera.imageUrl;
    cloneElt.getElementById("camera__name").textContent = camera.name;
    cloneElt.getElementById("camera__price").textContent = camera.price / 100 + " €";

    document.getElementById("main").appendChild(cloneElt);
}

