import {getCartId, isLocalStorageCartEmpty} from './cart.js';

main()

function main(){
    let myform = document.getElementById("my__form");
    let btn__form = document.getElementById("btn__form")

    btn__form.addEventListener("click", function(e){
        e.preventDefault(); //Empêche le fonctionnement par défaut du formulaire
        
        if(!isLocalStorageCartEmpty()){
            let formData = new FormData(myform);
            let contact = {
                firstName: formData.get("firstName"),
                lastName: formData.get("lastName"),
                address: formData.get("address"),
                city: formData.get("city"),
                email: formData.get("email")
            };

            //Tests des différents champs du formulaire avec des expressions régulières
            if(testName(contact.firstName) && testName(contact.lastName) && testAddress(contact.address) && testCity(contact.city) && testEmail(contact.email)){
                let products = getCartId(); //Récupération des id des articles contenu dans le panier

                let data = {contact, products}; //Création de l'objet à envoyer à l'api
    
                postRequest(data);  //Envoie de la requête avec les données validées à l'api
            }

            //Affichage d'un message à l'utilisateur en cas formulaire mal remplis
            else{
                window.alert('Remplissez correctement le formulaire')
            }
        }
        //Redirection vers la page d'accueil si le panier est vide
        else{
            window.alert('Vous n\'avez aucun nounours à commander !')
            window.location ='index.html';
        }
    })
}

/**
 * Envoie des données à l'api et réception de la réponse qui est stockée dans le localStorage
 * @param {Object} data Données à envoyer à l'api
 */
async function postRequest(data){
    try{
        //Envoie de la requête à l'api
        await fetch('http://localhost:3000/api/teddies/order',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        //Stockage dans le localStorage de l'order et du firstName compris dans l'objet contact reçuent de l'api
        .then(responseData => {
            localStorage.setItem("order",responseData.orderId);
            localStorage.setItem("firstName",responseData.contact.firstName);
            window.location = 'confirmation.html';
        });

    }catch(e){
        console.log(e);
    }
}

/**
 * Expression régulière afin de valider les données du formulaire
 * @param {String} name 
 */
function testName(name){
    let regex = new RegExp(/[A-Za-zéèêç']{3,}/);
    return regex.test(name);
}

/**
 * Expression régulière afin de valider les données du formulaire
 * @param {String} city 
 */
function testCity(city){
    let regex = new RegExp(/^([A-Za-zéèêç']* ?)*$/);
    return regex.test(city);
}

/**
 * Expression régulière afin de valider les données du formulaire
 * @param {String} address 
 */
function testAddress(address){
    let regex = new RegExp(/^((\d)|[A-Za-zéèêçà']* ?)*$/);
    return regex.test(address);
}

/**
 * Expression régulière afin de valider les données du formulaire
 * @param {String} email 
 */
function testEmail(email){
    let regex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);
    return regex.test(email);
}
