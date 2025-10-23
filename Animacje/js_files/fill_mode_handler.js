document.addEventListener("click", (clickedElement) => {
    const target = clickedElement.target;
    if (!target.classList || !target.classList.contains("animation-attribute-card")) return;
    if(!target.innerText === "fill-mode") return;

    const nonePlayBtn = document.getElementById("nonePlayBtn")
    const forwardsPlayBtn = document.getElementById("forwardsPlayBtn")
    const backwardsPlayBtn = document.getElementById("backwardsPlayBtn")
    const bothPlayBtn = document.getElementById("bothPlayBtn")

    nonePlayBtn.addEventListener("click", () => {
        console.log("test")
        const square = document.querySelector(".square5");

        square.style.animation = "none";
        void square.offsetWidth;
        square.style.animation = "fill-mode-animation 2s linear 1s 1 normal none";
    })

    forwardsPlayBtn.addEventListener("click", () => {
                console.log("test")
        const square = document.querySelector(".square6");

        square.style.animation = "none";
        void square.offsetWidth;
        square.style.animation = "fill-mode-animation 2s linear 1s 1 normal forwards";
    })

    backwardsPlayBtn.addEventListener("click", () => {
                console.log("test")
        const square = document.querySelector(".square7");

        square.style.animation = "none";
        void square.offsetWidth;
        square.style.animation = "fill-mode-animation 2s linear 1s 1 normal backwards";
    })

    bothPlayBtn.addEventListener("click", () => {
                console.log("test")
        const square = document.querySelector(".square8");

        square.style.animation = "none";
        void square.offsetWidth;
        square.style.animation = "fill-mode-animation 2s linear 1s 1 normal both";
    })
}) 