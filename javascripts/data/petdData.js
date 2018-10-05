import petComponent from "../components/petComponent.js"

const testFunction = () => {
    console.log("petdData linked");
};

function executeOnLoad () {
    let data = JSON.parse(this.responseText);
    petComponent.petObject = data.pets;
    console.log(petComponent.petObject);
    petComponent.makeCards(petComponent.petObject);
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