let zaliczenieContentObj

async function loadZaliczenieModalContent() {
    let text = await (await fetch("./json_files/zaliczenie_info.json")).text();
    zaliczenieContentObj = JSON.parse(text);
}

loadZaliczenieModalContent()


const zaliczenieBtn = document.getElementById("zaliczenieModalBtn")

zaliczenieBtn.addEventListener("click", () => {
    const modal = document.getElementById("fullModal")
    const modalContent = document.getElementById("modal-content1")
    const modalContent2 = document.getElementById("modal-content2")
    const modalContent3 = document.getElementById("modal-content3")
    const modalContent4 = document.getElementById("modal-content4")

    modalContent.style.display = "none"
    modalContent2.style.display = "none"
    modalContent3.style.display = "none"

    modal.style.visibility = "visible"
    modalContent4.style.display = "flex"
    
})


const zaliczenieCloseBtn = document.getElementById("closeBtn4")

zaliczenieCloseBtn.addEventListener("click", () => {
    const modalContent = document.getElementById("modal-content4")
    const modal = document.getElementById("fullModal")
    modalContent.style.display = "none"
    modal.style.visibility = "hidden"
})

