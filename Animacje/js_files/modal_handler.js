const modalCloseBtn = document.getElementById("closeBtn");
const modalCloseBtn2 = document.getElementById("closeBtn2");

modalCloseBtn.addEventListener("click", () => {
    const modal = document.getElementById("fullModal");

    modal.style.visibility = "hidden";
});

modalCloseBtn2.addEventListener("click", () => {
    const modal = document.getElementById("fullModal");

    modal.style.visibility = "hidden";
});

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

btn1.addEventListener("click", () => {
    const modal = document.getElementById("fullModal");

    modal.style.visibility = "visible";
});

btn2.addEventListener("click", () => {
    const modal = document.getElementById("fullModal");

    modal.style.visibility = "visible";
});

btn3.addEventListener("click", () => {
    const modal = document.getElementById("fullModal");

    modal.style.visibility = "visible";
});

btn4.addEventListener("click", () => {
    const modal = document.getElementById("fullModal");

    modal.style.visibility = "visible";
});