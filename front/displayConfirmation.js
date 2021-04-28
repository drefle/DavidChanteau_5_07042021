main()

function main(){
    displayConfirmation();
}


function getOrder(){
    return localStorage.getItem('order');
}
function getfirstName(){
    return localStorage.getItem('firstName')
}

function getPrice(){
    return localStorage.getItem('price');
}


function displayConfirmation(){

    const templateElt = document.getElementById("templateConfirmation");
    const cloneElt = document.importNode(templateElt.content,true);
    cloneElt.getElementById("confirmation__orderid").textContent = getOrder();
    cloneElt.getElementById("confirmation__prénom").textContent = getfirstName();
    cloneElt.getElementById("confirmation__price").textContent =  getPrice() +  " €";


    document.getElementById("main").appendChild(cloneElt);
}