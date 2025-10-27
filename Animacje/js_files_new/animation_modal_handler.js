let animationContentObj

async function loadAnimModalContent() {
    let text = await (await fetch("./json_files/animation_info.json")).text();
    animationContentObj = JSON.parse(text);
}

loadAnimModalContent()

//modal display eventlistener
const animationBtn = document.getElementById("animationModalBtn")

animationBtn.addEventListener("click", () => {
    const modal = document.getElementById("fullModal")
    const modalContent = document.getElementById("modal-content1")
    const modalContent2 = document.getElementById("modal-content2")
    const modalContent3 = document.getElementById("modal-content3")
    const modalContent4 = document.getElementById("modal-content4")

    modalContent2.style.display = "none"

    modal.style.visibility = "visible"
    modalContent.style.display = "flex"
    
})

//close button eventlistener

const animationCloseBtn = document.getElementById("closeBtn")

animationCloseBtn.addEventListener("click", () => {
    const modalContent = document.getElementById("modal-content1")
    const modal = document.getElementById("fullModal")
    modalContent.style.display = "none"
    modal.style.visibility = "hidden"
})

//modal content displays

//name button handler

{
    const btn = document.getElementById("nameBtn")

    btn.addEventListener("click", () => {
        const modalContent = document.getElementById("modalContent1")

        dataRef = animationContentObj["nameContent"][0] || {}

        modalContent.innerHTML = `
        ${dataRef.headerText || ""}
        ${dataRef.textOne || ""}
        ${dataRef.imgOne || ""}
        ${dataRef.contentOne || ""}
        ${dataRef.contentTwo || ""}
        ${dataRef.warningOne || ""}
        ${dataRef.warningTwo || ""}
        ${dataRef.warningThree || ""}
        `
    })
}

//duration button handler

{
    const btn = document.getElementById("durationBtn")

    btn.addEventListener("click", () => {
        const modalContent = document.getElementById("modalContent1")

        dataRef = animationContentObj["durationContent"][0] || {}

        modalContent.innerHTML = `
        ${dataRef.headerText || ""}
        ${dataRef.textOne || ""}
        ${dataRef.imgOne || ""}
        ${dataRef.contentOne || ""}
        ${dataRef.contentTwo || ""}
        ${dataRef.warningOne || ""}
        ${dataRef.warningTwo || ""}
        ${dataRef.warningThree || ""}
        `
    })
}

//timing function button handler

{
    const btn = document.getElementById("timingFuncBtn")

    btn.addEventListener("click", () => {
        const modalContent = document.getElementById("modalContent1")

        dataRef = animationContentObj["timingFuncContent"][0] || {}

        modalContent.innerHTML = `
        ${dataRef.headerText || ""}
        ${dataRef.textOne || ""}
        ${dataRef.imgOne || ""}
        ${dataRef.contentOne || ""}
        ${dataRef.contentTwo || ""}
        ${dataRef.warningOne || ""}
        ${dataRef.warningTwo || ""}
        ${dataRef.warningThree || ""}
        `
    })
}

//delay button handler 

{
    const btn = document.getElementById("delayBtn")

    btn.addEventListener("click", () => {
        const modalContent = document.getElementById("modalContent1")

        dataRef = animationContentObj["delayContent"][0] || {}

        modalContent.innerHTML = `
        ${dataRef.headerText || ""}
        ${dataRef.textOne || ""}
        ${dataRef.imgOne || ""}
        ${dataRef.contentOne || ""}
        ${dataRef.contentTwo || ""}
        ${dataRef.warningOne || ""}
        ${dataRef.warningTwo || ""}
        ${dataRef.warningThree || ""}
        `
    })
}

//iteration count button handler

{
    const btn = document.getElementById("iterationCountBtn")

    btn.addEventListener("click", () => {
        const modalContent = document.getElementById("modalContent1")

        dataRef = animationContentObj["iterationCountContent"][0] || {}

        modalContent.innerHTML = `
        ${dataRef.headerText || ""}
        ${dataRef.textOne || ""}
        ${dataRef.imgOne || ""}
        ${dataRef.contentOne || ""}
        ${dataRef.contentTwo || ""}
        ${dataRef.warningOne || ""}
        ${dataRef.warningTwo || ""}
        ${dataRef.warningThree || ""}
        `
    })
}

//direction button handler

{
    const btn = document.getElementById("directionBtn")

    btn.addEventListener("click", () => {
        const modalContent = document.getElementById("modalContent1")

        dataRef = animationContentObj["directionContent"][0] || {}

        modalContent.innerHTML = `
        ${dataRef.headerText || ""}
        ${dataRef.textOne || ""}
        ${dataRef.imgOne || ""}
        ${dataRef.contentOne || ""}
        ${dataRef.contentTwo || ""}
        ${dataRef.warningOne || ""}
        ${dataRef.warningTwo || ""}
        ${dataRef.warningThree || ""}
        `
    })

    
}

//fill mode button handler

{
    const btn = document.getElementById("fillModeBtn")

    btn.addEventListener("click", () => {
        const modalContent = document.getElementById("modalContent1")

        dataRef = animationContentObj["fillModeContent"][0] || {}

        modalContent.innerHTML = `
        ${dataRef.headerText || ""}
        ${dataRef.textOne || ""}
        ${dataRef.imgOne || ""}
        ${dataRef.contentOne || ""}
        ${dataRef.contentTwo || ""}
        ${dataRef.warningOne || ""}
        ${dataRef.warningTwo || ""}
        ${dataRef.warningThree || ""}
        `
    })
}