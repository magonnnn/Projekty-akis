const modalContentTransform = {
    "translateContent" : ``,
    "scaleContent" : ``,
    "rotateContent" : ``,
    "skewContent" : `     <h2>Właściwość <span class="code">skew (x, y)</span> skrzywia element</h2>
                    <p>Przykładowe użycie:</p>
                    <img src="./ss_folder/skewEU.png" alt="Przykładowe użycie skew">
                    <ul>
                        <li>
                            <h3>skew()</h3>
                            <p>krzywi element na osi X oraz Y</p>
                            <div class="squareSkew1"></div>
                        </li>
                        <li>
                            <h3>skewX()</h3>
                            <p>krzywi element na osi X</p>
                            <div class="squareSkew2"></div>
                        </li>
                        <li>
                            <h3>skewY()</h3>
                            <p>krzywi element na osi Y</p>
                            <div class="squareSkew3"></div>
                        </li>
                    </ul>`,
    "matrixContent" : `    <h2>Właściwość <span class="code">matrix</span> pozwala użyć wielu argumentów w jednym: <span class="code">matrix( scaleX() , skewY() , skewX() , scaleY() , translateX() , translateY() )</span></h2>
                    <p>Przykładowe użycie:</p>
                    <img src="./ss_folder/matrixEU.png" alt="Przykładowe użycie matrix">
                    <ul>
                    <li><h3>matrix()</h3></li>
                    <li><h3>matrix3d()</h3></li>
                    </ul>
                    <p class="required-property">Scale podaje się w liczbie np. <span class="code">1.1</span></p>
                    <p class="required-property">Skew podaje się w stopniach np. <span class="code">45deg</span></p>
                    <p class="required-property">Translate podaje się w jednostkach długości, czyli tych, które używa się w np. <span class="code">height</span></p>`
}

//TODO: when the button is chosen, it has a different bg, just so there wont be need for a header
// Objects that hold values that help me convert them into camelCase and then add content at the end so i can reference to the object at the top of the script 

const contentToArrayTransform = {
    "translate" : "translateContent",
    "scale" : "scaleContent",
    "rotate" : "rotateContent",
    "skew" : "skewContent",
    "matrix" : "matrixContent"
}

const transPropertyPossibilities = ["translate", "scale", "rotate", "skew", "matrix"]
let currentChoiceTransform = "translate";

//function that converts the clickedButton inner text into obj reference, more info above
function convertToObjReferences(choice) {
    const normalized = String(choice).trim().toLowerCase();

    const fullName = contentToArrayTransform[normalized];

    return fullName;
}
//on click change content, according to the clicked button
document.addEventListener("click", (clickedElement) => {
    const target = clickedElement.target;
    if (!target.classList || !target.classList.contains("transform-attribute-card")) return;

    const choiceText = target.innerText.trim();
    const objKey = convertToObjReferences(choiceText); // define objKey here

    currentChoiceTransform = objKey;

    const modalText = document.getElementById("modalContent2");

    const dataRef = modalContentTransform[objKey] || "";
    
    modalText.innerHTML = `
        ${dataRef}
    `;
});
//direction animation play button handlers

//fill-mode animation play button handlers

//TODO: another main-card with another modal, it will show translate, rotate etc.
//TODO: optional --- fix the header, it has a margin around it and it doesnt look right? || lower priority
//TODO: make all the EU screenshots the same theme || lower priority
