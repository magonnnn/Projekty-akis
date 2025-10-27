let modalContent;

//function that converts the clickedButton inner text into obj reference, more info above
function convertToObjReferences(choice) {
    const normalized = String(choice).trim().toLowerCase().replace(/\s+/g, '-');

    const camel = contentToArray[normalized];

    const fullName = arrayToObjReferences[camel];

    return fullName;
}

async function loadModalContent() {
    let text = await (await fetch("test.json")).text();
    modalContent = JSON.parse(text);

    //on click change content, according to the clicked button
    document.addEventListener("click", (clickedElement) => {
        const target = clickedElement.target;
        if (!target.classList || !target.classList.contains("animation-attribute-card")) return;

        const choiceText = target.innerText.trim();
        const objKey = convertToObjReferences(choiceText); // define objKey here

        currentChoice = objKey;

        const modalText = document.getElementById("modalContent1");

        const dataRef = modalContent[objKey][0] || {};
        
        modalText.innerHTML = `
        ${dataRef.headerText || ""}
        ${dataRef.textOne || ""}
        ${dataRef.imgOne || ""}
        ${dataRef.contentOne || ""}
        ${dataRef.contentTwo || ""}
        ${dataRef.warningOne || ""}
        ${dataRef.warningTwo || ""}
        ${dataRef.warningThree || ""}
        `;
    });
}

loadModalContent();


//TODO: when the button is chosen, it has a different bg, just so there wont be need for a header
// Objects that hold values that help me convert them into camelCase and then add content at the end so i can reference to the object at the top of the script 
const arrayToObjReferences = {
    "name" : "nameContent",
    "duration" : "durationContent",
    "timingFunc" : "timingFuncContent",
    "delay" : "delayContent",
    "iterationCount" : "iterationCountContent",
    "direction" : "directionContent",
    "fillMode" : "fillModeContent"
}

const contentToArray = {
    "name" : "name",
    "duration" : "duration",
    "timing-function" : "timingFunc",
    "delay" : "delay",
    "iteration-count" : "iterationCount",
    "direction" : "direction",
    "fill-mode" : "fillMode"
}

const animPropertyPossibilities = ["name", "duration", "timingFunc", "delay", "iterationCount", "direction", "fillMode"]
let currentChoice = "name";


//direction animation play button handlers

//fill-mode animation play button handlers

//TODO: another main-card with another modal, it will show translate, rotate etc.
//TODO: optional --- fix the header, it has a margin around it and it doesnt look right? || lower priority
//TODO: make all the EU screenshots the same theme || lower priority
