import events from "../events.js"

const printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML = stringToPrint;
};

const animalButton = {
    button1 : `<button id="dog" class="btn btn-primary">DOG</button>`,
    button2 : `<button id="cat" class="btn btn-warning">CAT</button>`,
    button3 : `<button id="dino" class="btn btn-danger">DINO</button>`
};

const resetButton = {
    button1 : `<button id="reset" class="btn">RESET</button>`
};

let petObject = [];

const makeCards = (cardArray) => {
    makeButtons();
    events.filterAnimal("dog");
    events.filterAnimal("cat");
    events.filterAnimal("dino");
    let newstring = ``
    for (let i = 0; i < cardArray.length; i++){
        newstring += `<div class="col-4">
                        <div class="card border-info mb-3" style="max-width: 18rem;">
                            <div class="card-header text-center">${cardArray[i].name}</div>
                            <img class="card-img-top" src="${cardArray[i].imageUrl}" alt="${cardArray[i].name}">
                            <div class="card-body text-info">
                                <p class="card-text text-center">${cardArray[i].color}</p>    
                                <p class="card-text text-center">${cardArray[i].specialSkill}</p>
                            </div>
                            <div class="card-footer text-center ${cardArray[i].type}">${cardArray[i].type}</div>
                        </div>
                    </div>`;
    }
    printToDom("printHere", newstring);
};

const makeButtons = () => {
    let newString = `${animalButton.button1}
                    ${animalButton.button2}
                    ${animalButton.button3}`;
    printToDom("buttonsHere", newString);
};

const makeReset = () => {
    printToDom("buttonsHere", resetButton.button1);
    events.resetEvent();
};

const cardLooper = (filteredCards) => {
    let newCard = ``;
    for (let j = 0; j < filteredCards.length; j++) {
        newCard += `${filteredCards[j].outerHTML}`;
    }
    printToDom("printHere", newCard);
};

export default {printToDom, makeCards, petObject, cardLooper, makeReset};