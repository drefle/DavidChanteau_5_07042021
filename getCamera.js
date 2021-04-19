

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
    let indice = 0;
    try{
        while(liste_cameras[indice]._id != id && indice < liste_cameras.length - 1){
            indice ++;
        }
        if(liste_cameras[indice]._id != id){
            return null;
        }
        return liste_cameras[indice];
    }catch(e){
        console.log(e);
    }

}


 
