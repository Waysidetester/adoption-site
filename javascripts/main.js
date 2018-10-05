import events from "./events.js";
import petData from "./data/petdData.js";



const init = () => {
    petData.getPets();
    events.exportButtons();
};

init();