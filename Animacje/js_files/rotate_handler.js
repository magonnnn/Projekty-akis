document.addEventListener("click", (clickedElement) => {
    const target = clickedElement.target;
    if (!target.classList || !target.classList.contains("transform-attribute-card")) return;
    if(target.innerText !== "rotate") return;

    const rotatePlayBtn = document.getElementById("rotatePlayBtn")
    const rotateXPlayBtn = document.getElementById("rotateXPlayBtn")
    const rotateYPlayBtn = document.getElementById("rotateYPlayBtn")
    const rotateZPlayBtn = document.getElementById("rotateZPlayBtn")
    const rotate3DPlayBtn = document.getElementById("rotate3DPlayBtn")

    rotatePlayBtn.addEventListener("click", () => {
        const square = document.querySelector(".squareRotate1");

        square.style.transition = "none";
        square.style.transform = "none";
        void square.offsetWidth;
        square.style.transition = "2s"
        square.style.transform = "rotate(30deg)"

        setTimeout(() => {
            square.style.transition = "none";
            square.style.transform = "none";
        }, 6000);
    })

    rotateXPlayBtn.addEventListener("click", () => {
        const square = document.querySelector(".squareRotate2");

        square.style.transition = "none";
        square.style.transform = "none";
        void square.offsetWidth;
        square.style.transition = "2s"
        square.style.transform = "rotate(30deg)"

        setTimeout(() => {
            square.style.animation = "none";
        }, 6000);
    })

    rotateYPlayBtn.addEventListener("click", () => {
        const square = document.querySelector(".squareRotate3");

        square.style.animation = "none";
        void square.offsetWidth;
        square.style.animation = "basic-animation 2s linear 1s 2 alternate forwards";

        setTimeout(() => {
            square.style.animation = "none";
        }, 6000);
    })

    rotateZPlayBtn.addEventListener("click", () => {
        const square = document.querySelector(".squareRotate4");

        square.style.animation = "none";
        void square.offsetWidth;
        square.style.animation = "basic-animation 2s linear 1s 2 alternate-reverse forwards";

        setTimeout(() => {
            square.style.animation = "none";
        }, 6000);
    })

    rotate3DPlayBtn.addEventListener("click", () => {
        const square = document.querySelector(".squareRotate5");

        square.style.animation = "none";
        void square.offsetWidth;
        square.style.animation = "basic-animation 2s linear 1s 2 alternate-reverse forwards";

        setTimeout(() => {
            square.style.animation = "none";
        }, 6000);
    })
})