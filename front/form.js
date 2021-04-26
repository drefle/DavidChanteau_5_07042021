import {getCartId, isLocalStorageCartEmpty} from './cart.js';

sendForm()

function sendForm(){
    let myform = document.getElementById("my__form");
    let btn__form = document.getElementById("btn__form")

    btn__form.addEventListener("click", function(e){
        
        if(!isLocalStorageCartEmpty()){
            let formData = new FormData(myform);
            let contact = {
                firstName: formData.get("firstName"),
                lastName: formData.get("lastName"),
                address: formData.get("address"),
                city: formData.get("city"),
                email: formData.get("email")
            };
            let products = getCartId(); //products: (2) ["5be9c8541c9d440000665243", "5beaaa8f1c9d440000a57d95"]

            let data = {contact, products};
            console.log(data)

            console.log(postRequest(data));
        }
        else{
            window.alert('Vous n\'avez aucun nounours à commander !')
        }


    })
}


async function postRequest(data){
    try{
        let response = await fetch('http://localhost:3000/api/teddies/order',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        console.log(response);

        if(response.ok){
            let responseData = await response.json();
            
            return responseData.orderId;
        }
        else{
            console.error('Erreur lors de la récupération des données : erreur '+ response.status);
        }
    }catch(e){
        console.log(e);
    }
}
