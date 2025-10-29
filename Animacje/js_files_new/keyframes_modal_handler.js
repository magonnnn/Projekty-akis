let keyframesContentObj

async function loadKeyModalContent() {
    let text = await (await fetch("./json_files/keyframes_info.json")).text();
    keyframesContentObj = JSON.parse(text);
}

loadKeyModalContent()

const keyframesBtn = document.getElementById("keyframesModalBtn")

keyframesBtn.addEventListener("click", () => {
    const modal = document.getElementById("fullModal")
    const modalContent = document.getElementById("modal-content1")
    const modalContent2 = document.getElementById("modal-content2")
    const modalContent3 = document.getElementById("modal-content3")
    const modalContent4 = document.getElementById("modal-content4")

    modalContent.style.display = "none"
    modalContent2.style.display = "none"
    modalContent4.style.display = "none"

    modal.style.visibility = "visible"
    modalContent3.style.display = "flex"
    
})

const keyframesCloseBtn = document.getElementById("closeBtn3")

keyframesCloseBtn.addEventListener("click", () => {
    const modalContent = document.getElementById("modal-content3")
    const modal = document.getElementById("fullModal")
    modalContent.style.display = "none"
    modal.style.visibility = "hidden"
})

{
    const btn = document.getElementById("syntaxBtn")

    btn.addEventListener("click", () => {
        const modalContent = document.getElementById("modalContent3")

        dataRef = keyframesContentObj["syntaxContent"] || {}

        modalContent.innerHTML = `${dataRef}`
    })
}

{
    const btn = document.getElementById("otherBtn")

    btn.addEventListener("click", () => {
        const modalContent = document.getElementById("modalContent3")

        dataRef = keyframesContentObj["otherContent"] || {}

        modalContent.innerHTML = `${dataRef}`
    })
}