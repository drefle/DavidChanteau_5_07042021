import {getCartId} from './cart.js';

sendForm()

function sendForm(){
    let myform = document.getElementById("my__form");

    myform.addEventListener("submit", function(e){
        let formData = new FormData(this);
        let contact = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            address: formData.get("address"),
            city: formData.get("city"),
            email: formData.get("email")
        };
        let products = getCartId();
        console.log(products)
        console.log(contact)

        let data = {contact, products};
        console.log(data)

        postRequest(data);


    })
}


async function postRequest(data){
    try{
        let response = await fetch('http://localhost:3000/api/cameras/order',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        console.log(response)

        if(response.ok){
            let responseData = await response.json();
            console.log(responseData)
            return responseData;
        }
        else{
            console.error('Erreur lors de la récupération des données : erreur '+ response.status);
        }
    }catch(e){
        console.log(e);
    }
}
