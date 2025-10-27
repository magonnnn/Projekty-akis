
const transformBtn = document.getElementById("transformModalBtn")

transformBtn.addEventListener("click", () => {
    const modal = document.getElementById("fullModal")
    const modalContent = document.getElementById("modal-content1")
    const modalContent2 = document.getElementById("modal-content2")
    const modalContent3 = document.getElementById("modal-content3")
    const modalContent4 = document.getElementById("modal-content4")

    modalContent.style.display = "none"

    modal.style.visibility = "visible"
    modalContent2.style.display = "flex"
    
})


const transformCloseBtn = document.getElementById("closeBtn2")

transformCloseBtn.addEventListener("click", () => {
    const modal = document.getElementById("fullModal")
    modal.style.visibility = "hidden"
})