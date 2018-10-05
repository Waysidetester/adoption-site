const printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML = stringToPrint;
};

let petObject = [];

const makeCards = (cardArray) => {
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

const cardLooper = (filteredCards) => {
    let newCard = ``;
    for (let j = 0; j < filteredCards.length; j++) {
        newCard += `${filteredCards[j].outerHTML}`;
    }
    printToDom("printHere", newCard);
};

export default {printToDom, makeCards, petObject, cardLooper};