main();

async function main(){

    const cameras = await getCameras();


    for(let camera of cameras){
        displayCamera(camera);
    }

}


async function getCameras(){

    try{
        let response = await fetch('http://localhost:3000/api/cameras');

        if(response.ok){
            let data = await response.json();
            return data;
        }
        else{
            console.error('Erreur lors de la récupération des données : erreur '+ response.status);
        }
    }catch(e){
        console.log(e);
    }
    

}

function getOneCamera(liste_cameras,id){

    try{
        for(let camera of liste_cameras){
            if(camera._id === id){
                return camera;
            }
        }
    
        console.log('La camera recherché n\'existe pas .');
    }catch(e){
        console.log(e);
    }

}

function displayCamera(camera){
    const templateElt = document.getElementById("templateArticle");
    const cloneElt = document.importNode(templateElt.content,true);

    cloneElt.getElementById("article__img").src = camera.imageUrl;
    cloneElt.getElementById("article__name").textContent = camera.name;
    cloneElt.getElementById("article__price").textContent = camera.price / 1000 + " €";

    document.getElementById("main").appendChild(cloneElt);
}

// class Camera{

//     #id;
//     #name;
//     #price;
//     #description;
//     #lenses;
//     #imageUrl;

//     constructor(id, name, price, description, lenses, imageUrl){
//         this.#id = id;
//         this.#name = name;
//         this.#price = price;
//         this.#description =description;
//         this.#lenses =lenses;
//         this.#imageUrl = imageUrl;
//     }

//     get id(){
//         return this.#id;
//     }
//     get name(){
//         return this.#name;
//     }
//     get price(){
//         return this.#price;
//     }
//     get description(){
//         return this.#description;
//     }
//     get lenses(){
//         return this.#lenses;
//     }
//     get imageUrl(){
//         return this.#imageUrl;
//     }
// }