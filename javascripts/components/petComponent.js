const testFunction = () => {
    console.log("petComponent linked");
};

const printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML = stringToPrint;
};

export default {testFunction, printToDom};