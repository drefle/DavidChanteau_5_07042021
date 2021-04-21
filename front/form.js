import {getCart} from './cart.js';

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
        let products = getCart();

        let data = {contact, products};

        console.log(products)
        console.log(contact)
        var request = new XMLHttpRequest();
        request.open("POST", "http://localhost:3000/api/cameras/order");
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(data));
    })
}

