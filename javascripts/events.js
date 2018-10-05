const testFunction = () => {
    console.log("events linked");
};

const filterAnimal = (animalId) => {
    const etarget = document.getElementById(animalId);
    etarget.addEventListener("click", (e) => {
        const clicked = e.currentTarget.innerHTML;
        console.log(clicked)
        let cardsSorted = [];
        const cards = document.getElementsByClassName("col-4");
        console.log(cards);
        for (let i = 0; i < cards.length; i++){
        let animalType = cards[i].childNodes[1].childNodes[7].innerHTML;
        animalType = animalType.toUpperCase();
            if (animalType === clicked) {
                cardsSorted.push(cards[i]);
            }
        } 
        console.log(cardsSorted);
    })
};

export default {testFunction, filterAnimal};