const testFunction = () => {
    console.log("petdData linked");
};

function executeOnLoad () {
    let data = JSON.parse(this.responseText);
    console.log(data.pets);
};

function executeOnError () {
    console.log("failed to load");
};

const getPets = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeOnLoad);
    myRequest.addEventListener("error", executeOnError);
    myRequest.open("GET", "./db/pets.json");
    myRequest.send();
};



export default {testFunction, getPets};