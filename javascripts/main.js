import events from "./events.js";
import petData from "./data/petdData.js";
import petComponent from "./components/petComponent.js";

const testFunction = () => {
    console.log("events linked");
};

const init = () => {
    petData.getPets();
    events.exportButtons();
};

init();