import petComponent from "./components/petComponent.js";

const filterAnimal = (animalId) => {
    const etarget = document.getElementById(animalId);
    etarget.addEventListener("click", (e) => {
        const clicked = e.currentTarget.innerHTML;
        let cardsSorted = [];
        const cards = document.getElementsByClassName("col-4");
        for (let i = 0; i < cards.length; i++){
            let animalType = cards[i].childNodes[1].childNodes[7].innerHTML;
            animalType = animalType.toUpperCase();
            if (animalType === clicked) {
                cardsSorted.push(cards[i]);
            }
        } 
        petComponent.cardLooper(cardsSorted);
        petComponent.makeReset();
    })
};

const resetEvent = () => {
    document.getElementById("reset").addEventListener("click", () => {
        petComponent.makeCards(petComponent.petObject);
    })
};


export default {filterAnimal, resetEvent};