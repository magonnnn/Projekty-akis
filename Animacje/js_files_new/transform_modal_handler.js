let transformContentObj

async function loadTransModalContent() {
    let text = await (await fetch("./json_files/transform_info.json")).text();
    transformContentObj = JSON.parse(text);
}

loadTransModalContent()


const transformBtn = document.getElementById("transformModalBtn")

transformBtn.addEventListener("click", () => {
    const modal = document.getElementById("fullModal")
    const modalContent = document.getElementById("modal-content1")
    const modalContent2 = document.getElementById("modal-content2")
    const modalContent3 = document.getElementById("modal-content3")
    const modalContent4 = document.getElementById("modal-content4")

    modalContent.style.display = "none"
    modalContent3.style.display = "none"
    modalContent4.style.display = "none"

    modal.style.visibility = "visible"
    modalContent2.style.display = "flex"
    
})


const transformCloseBtn = document.getElementById("closeBtn2")

transformCloseBtn.addEventListener("click", () => {
    const modalContent = document.getElementById("modal-content2")
    const modal = document.getElementById("fullModal")
    modalContent.style.display = "none"
    modal.style.visibility = "hidden"
})

// translate button handler

{
    const btn = document.getElementById("translateBtn")

    btn.addEventListener("click", () => {
        const modalContent = document.getElementById("modalContent2")

        const DataRef = transformContentObj["translateContent"] || {}

        modalContent.innerHTML = `${DataRef}`
    })
}

//scale button handler

{
    const btn = document.getElementById("scaleBtn")

    btn.addEventListener("click", () => {
        const modalContent = document.getElementById("modalContent2")

        const DataRef = transformContentObj["scaleContent"] || {}

        modalContent.innerHTML = `${DataRef}`
    })
}

// rotate button handler 

{
    const btn = document.getElementById("rotateBtn")

    btn.addEventListener("click", () => {
        const modalContent = document.getElementById("modalContent2")

        const DataRef = transformContentObj["rotateContent"] || {}

        modalContent.innerHTML = `${DataRef}`
    })
}

//skew button handler

{
    const btn = document.getElementById("skewBtn")

    btn.addEventListener("click", () => {
        const modalContent = document.getElementById("modalContent2")

        const DataRef = transformContentObj["skewContent"] || {}

        modalContent.innerHTML = `${DataRef}`
    })
}

//matrix button handler 

{
    const btn = document.getElementById("matrixBtn")

    btn.addEventListener("click", () => {
        const modalContent = document.getElementById("modalContent2")

        const DataRef = transformContentObj["matrixContent"] || {}

        modalContent.innerHTML = `${DataRef}`
    })
}