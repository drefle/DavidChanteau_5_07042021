
/**
 * Retourne la liste de teddies récupérée via une api en utilisant des promesses
 * @return {Array}
 */
export async function getTeddies(){
    try{
        let response = await fetch('http://localhost:3000/api/teddies');

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

/**
 * Renvoie le teddy correspondant à l'id fournie en paramètre en effectuant une requête GET à l'api
 * 
 * @param {String} id 
 * 
 * @return {Object} 
 */

export async function getOneTeddy(id){ 
    try{
        let response = await fetch('http://localhost:3000/api/teddies/' + id);

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


 
