import {getCartId, isLocalStorageCartEmpty} from './cart.js';

sendForm()

function sendForm(){
    console.log(localStorage);
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

            console.log(testAddress(contact.address))

            if(testName(contact.firstName) && testName(contact.lastName) && testAddress(contact.address) && testCity(contact.city) && testEmail(contact.email)){
                let products = getCartId(); //products: (2) ["5be9c8541c9d440000665243", "5beaaa8f1c9d440000a57d95"]
                console.log(products);
                console.log(contact.lastName)
                let data = {contact, products};
                console.log(JSON.stringify(data))
    
                postRequest(data);
            }

            else{
                window.alert('Remplissez correctement le formulaire')
            }


        }
        else{
            window.alert('Vous n\'avez aucun nounours à commander !')
        }


    })
}


async function postRequest(data){
    try{
        await fetch('http://localhost:3000/api/teddies/order',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
        .then(responseData => {
            localStorage.setItem("order",responseData.orderId);
            localStorage.setItem("firstName",responseData.contact.firstName);
            window.location = 'confirmation.html';
        });

    }catch(e){
        console.log(e);
    }
}

function testName(name){
    let regex = new RegExp(/[A-Za-zéèêç]{3,}/);
    return regex.test(name);
}

function testCity(city){
    let regex = new RegExp(/^([A-Za-zéèêç']* ?)*$/);
    return regex.test(city);
}
function testAddress(address){
    let regex = new RegExp(/^((\d)|[A-Za-zéèêçà']* ?)*$/);
    return regex.test(address);
}
function testEmail(email){
    let regex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);
    console.log(regex.test(email))
    return regex.test(email);
}
