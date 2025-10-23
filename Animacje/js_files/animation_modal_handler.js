const modalContent = {
    "nameContent" : [
        {
            "headerText" : "<h2>Właściwość <span class='code'>animation-name</span> ustala nazwę animacji, która zostanie wykonana.</h2>",
            "textOne" : "<p>Przykładowe użycie:</p>",
            "imgOne" : "<img src='./ss_folder/nameEU.png' alt='Przykładowe użycie animation-name'>",
            "contentOne" : "",
            "contentTwo" : "",
            "warningOne" : "<p class='required-property'>Uwaga! Ta właściwość nie ma domyślnej wartości, nie podanie jej spowoduje nie działanie animacji! </p>",
            "warningTwo" : "<p class='required-property'>Jeżeli używa się <span class='code'>@keyframes</span> to <span class='code'>animation-name</span> musi być takie same jak nazwa <span class='code'>@keyframes</span>!</p>",
            "warningThree" : ""
        }
    ],

    "durationContent" : [
        {
            "headerText" : "<h2>Właściwość <span class='code'>animation-duration</span> ustala ile czasu zajmie animacja</h2>",
            "textOne" : "<p>Przykładowe użycie:</p>",
            "imgOne" : "<img src='./ss_folder/durationEU.png' alt='Przykładowe użycie animation-duration'>",
            "contentOne" : `<ul>
                        <li>
                            <h3>animation-duration: 2s</h3>
                            <div class="square" style="animation: basic-animation 2s infinite"></div>
                        </li>
                        <li>
                            <h3>animation-duration: 5s</h3>
                            <div class="square" style="animation: basic-animation 5s infinite"></div>
                        </li>
                    </ul>`,
            "contentTwo" : "",
            "warningOne" : "<p class='required-property'>Uwaga! Ta właściwość nie ma domyślnej wartości, nie podanie jej spowoduje nie działanie animacji!</p>",
            "warningTwo" : "<p class='required-property'>Wartość <span class='code'>animation-duration</span> podaje się w sekundach [s] lub milisekundach [ms]</p>",
            "warningThree" : ""
        }
    ],
    "timingFuncContent" : [
        {
            "headerText" : "<h2>Właściwość <span class='code'>animation-timing-function</span> określa prędkość animacji i sposób jej przebiegu, czyli jak szybko animacja się rozpoczyna, przyspiesza i kończy</h2>",
            "textOne" : "<p>Przykładowe użycie:</p>",
            "imgOne" : "<img src='./ss_folder/timingFuncEU.png' alt='Przykładowe użycie animation-timing-function'>",
            "contentOne" : `<ul>
                        <li>
                            <h3>ease</h3>
                            <p>Domyślna wartość; animacja zaczyna się powoli, przyspiesza w środku i zwalnia pod koniec.</p>
                            <div class='square' style='animation: basic-animation 5s infinite ease'></div>
                        </li>
                        <li>
                            <h3>ease-in</h3>
                            <p>Animacja zaczyna się powoli i przyspiesza.</p>
                            <div class='square' style='animation: basic-animation 5s infinite ease-in'></div>
                        </li>
                        <li>
                            <h3>ease-out</h3>
                            <p>Animacja zaczyna się szybko i zwalnia pod koniec.</p>
                            <div class='square' style='animation: basic-animation 5s infinite ease-out'></div>
                        </li>
                        <li>
                            <h3>ease-in-out</h3>
                            <p>Animacja zaczyna się powoli i kończy powoli, z przyspieszeniem w środku.</p>
                            <div class='square' style='animation: basic-animation 5s infinite ease-in-out'></div>
                        </li>
                        <li>
                            <h3>linear</h3>
                            <p>Animacja o stałej prędkości od początku do końca.</p>
                            <div class='square' style='animation: basic-animation 5s infinite linear'></div>
                        </li>
                        <li>
                            <h3>cubic-bezier(n,n,n,n)</h3>
                            <p>Pozwala na stworzenie własnej, niestandardowej krzywej prędkości. </p>
                            <div class='square' style='animation: basic-animation 5s infinite cubic-bezier(0.075, 0.82, 0.165, 1)'></div>
                        </li>
                    </ul>
                    <img src='./mathFuncsSS/cubic-bezier.svg' alt='Jak działa cubic-bezier'></img>`,
            "contentTwo" : "",
            "warningOne" : "<p class='required-property'>Domyślna wartość <span class='code'>animation-timing-function</span> to ease</p>",
            "warningTwo" : "",
            "warningThree" : ""
        }
    ],
    "delayContent" : [
        {
            "headerText" : "<h2>Właściwość <span class='code'>animation-delay</span> określa opóźnienie rozpoczęcia animacji.</h2>",
            "textOne" : "<p>Przykładowe użycie:</p>",
            "imgOne" : "<img src='./ss_folder/delayEU.png' alt='Przykładowe użycie animation-delay'>",
            "contentOne" : `<ul>
                        <li>
                            <h3>animation-delay: 2s</h3>
                            <div class="square" style="animation: basic-animation 2s infinite 2s"></div>
                        </li>
                        <li>
                            <h3>animation-delay: 5s</h3>
                            <div class="square" style="animation: basic-animation 2s infinite 5s"></div>
                        </li>
                    </ul>`,
            "contentTwo" : "",
            "warningOne" : "<p class='required-property'>Wartość <span class='code'>animation-delay</span> podaje się w sekundach [s] lub milisekundach [ms]</p>",
            "warningTwo" : "<p class='required-property'>Domyślna wartość <span class='code'>animation-delay</span> to 0</p>",
            "warningThree" : ""
        }
    ],
    "iterationCountContent" : [
        {
            "headerText" : "<h2>Właściwość <span class='code'>animation-iteration-count</span> ustala ile razy zagra animacja</h2>",
            "textOne" : "<p>Przykładowe użycie:</p>",
            "imgOne" : "<img src='./ss_folder/iterationCountEU.png' alt='Przykładowe użycie animation-iteration-count'>",
            "contentOne" : `<ul>
                        <li>
                            <h3>animation-duration: 2</h3>
                            <div class="square" style="animation: basic-animation 2s 2"></div>
                        </li>
                        <li>
                            <h3>animation-duration: 5</h3>
                            <div class="square" style="animation: basic-animation 2s 5"></div>
                        </li>
                        <li>
                            <h3>infinite</h3>
                            <p>Animacja gra w nieskończoność</p>
                            <div class="square" style="animation: basic-animation 2s infinite"></div>
                        </li>
                    </ul>`,
            "contentTwo" : "",
            "warningOne" : "<p class='required-property'>Domyślna wartość <span class='code'>animation-iteration-count</span> to 1</p>",
            "warningTwo" : "",
            "warningThree" : ""
        }
    ],"directionContent" : [
        {
            "headerText" : "<h2>Właściwość <span class='code'>animation-direction</span> ustal jak zostanie zagrana animacja, od przodu, czy od tyłu</h2>",
            "textOne" : "<p>Przykładowe użycie:</p>",
            "imgOne" : "<img src='./ss_folder/directionEU.png' alt='Przykładowe użycie animation-direction'>",
            "contentOne" : `                    <ul>
                        <li>
                            <h3>normal</h3>
                            <p>Animacja </p>
                            <button id="normalPlayBtn">animacja</button>
                            <div class="square1"></div>
                        </li>
                        <li>
                            <h3>reverse</h3>
                            <p>Animacja jest grana od tyłu</p>
                            <button id="reversePlayBtn">animacja</button>
                            <div class="square2"></div>
                        </li>
                        <li>
                            <h3>alternate</h3>
                            <p>Animacja jest grana do przodu, a następnie wraca do startowej pozycji</p>
                            <button id="alternatePlayBtn">animacja</button>
                            <div class="square3"></div>
                        </li>
                        <li>
                            <h3>alternate-reverse</h3>
                            <p>Animacja jest grana od tyłu, a następnie do przodu</p>
                            <button id="alternateReversePlayBtn">animacja</button>
                            <div class="square4"></div>
                        </li>
                    </ul>`,
            "contentTwo" : ``,
            "warningOne" : "<p class='required-property'>Domyślna wartość <span class='code'>animation-direction</span> to normal</p>",
            "warningTwo" : "<p class='required-property'>Przy użyciu <span class='code'>alternate</span> lub <span class='code'>alternate-reverse</span> trzeba dać więcej niż jedną iterację aby zadziałalo prawidłowo</p>",
            "warningThree" : ""
        }
    ],"fillModeContent" : [
        {
            "headerText" : "<h2>Właściwość <span class='code'>animation-fill-mode</span> określa, jak element zachowuje się podczas pauzy przed rozpoczęciem lub po zakończeniu animacji, kontrolując, które style z klatek kluczowych (@keyframes) są stosowane w tych okresach</h2>",
            "textOne" : "<p>Przykładowe użycie:</p>",
            "imgOne" : "<img src='./ss_folder/fillModeEU.png' alt='Przykładowe użycie fill-mode'>",
            "contentOne" : `<ul>
                        <li>
                            <h3>none</h3>
                            <p>Określa, że animacja nie stosuje żadnych stylów do elementu przed rozpoczęciem animacji i po jej zakończeniu</p>
                            <button id="nonePlayBtn">animacja</button>
                            <div class="square5"></div>
                        </li>
                        <li>
                            <h3>forwards</h3>
                            <p>Pozostawia style, które element miał na ostatnim <span class='code'>@keyframe</span></p>
                            <button id="forwardsPlayBtn">animacja</button>
                            <div class="square6"></div>
                        </li>
                        <li>
                            <h3>backwards</h3>
                            <p>Zanim się rozpocznie animacja, element będzie miał style pierwszego <span class='code'>@keyframe</span></p>
                            <button id="backwardsPlayBtn">animacja</button>
                            <div class="square7"></div>
                        </li>
                        <li>
                            <h3>both</h3>
                            <p>Pozostawia style po animacji, i ma style pierwszego </span class='code'>@keyframe</span> zanim rozpocznie się animacja</p>
                            <button id="bothPlayBtn">animacja</button>
                            <div class="square8"></div>
                        </li>
                    </ul>`,
            "contentTwo" : "",
            "warningOne" : "<p class='required-property'>Domyślna wartość <span class='code'>animation-fill-mode</span> to none</p>",
            "warningTwo" : "",
            "warningThree" : ""
        }
    ]
}

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

//function that converts the clickedButton inner text into obj reference, more info above
function convertToObjReferences(choice) {
    const normalized = String(choice).trim().toLowerCase().replace(/\s+/g, '-');

    const camel = contentToArray[normalized];

    const fullName = arrayToObjReferences[camel];

    return fullName;
}
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
//direction animation play button handlers

//fill-mode animation play button handlers

//TODO: another main-card with another modal, it will show translate, rotate etc.
//TODO: optional --- fix the header, it has a margin around it and it doesnt look right? || lower priority
//TODO: make all the EU screenshots the same theme || lower priority
