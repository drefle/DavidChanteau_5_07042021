

export async function getCameras(){

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

export function getOneCamera(liste_cameras,id){

    try{
        for(let camera of liste_cameras){
            if(camera._id === id){
                console.log(camera);
                return camera;
            }
        }
    
        console.log('La camera recherché n\'existe pas .');
    }catch(e){
        console.log(e);
    }

}

