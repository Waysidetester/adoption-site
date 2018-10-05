import petComponent from "./components/petComponent.js";

const filterAnimal = (animalId) => {
    const etarget = document.getElementById(animalId);
    etarget.addEventListener("click", (e) => {
        const clicked = e.currentTarget.innerHTML;
        console.log(clicked)
        let cardsSorted = [];
        const cards = document.getElementsByClassName("col-4");
        if (cards.length < 30){
            petComponent.makeCards(petComponent.petObject);
        } else {
        for (let i = 0; i < cards.length; i++){
        let animalType = cards[i].childNodes[1].childNodes[7].innerHTML;
        animalType = animalType.toUpperCase();
            if (animalType === clicked) {
                cardsSorted.push(cards[i]);
            }
        } 
        petComponent.cardLooper(cardsSorted);
        }
    })
};

const exportButtons = () => {
    filterAnimal("dog");
    filterAnimal("cat");
    filterAnimal("dino");
};

export default {exportButtons};