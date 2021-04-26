
/**
 * Retourne la liste de caméras récupérée via une api en utilisant des promesses
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
 * Renvoie la caméra de la liste fournie en paramètre en fonction de l'id fournie également en paramètre
 * 
 * @param {Array} liste_teddies 
 * @param {String} id 
 * 
 * @return {Object} 
 */

export function getOneTeddy(liste_teddies,id){
    let indice = 0;
    try{
        while(liste_teddies[indice]._id != id && indice < liste_teddies.length - 1){
            indice ++;
        }
        if(liste_teddies[indice]._id != id){
            return null;
        }
        return liste_teddies[indice];
    }catch(e){
        console.log(e);
    }

}


 
