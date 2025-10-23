document.addEventListener("click", (clickedElement) => {
    const target = clickedElement.target;
    if (!target.classList || !target.classList.contains("animation-attribute-card")) return;
    if(target.innerText !== "direction") return;

    const normalPlayBtn = document.getElementById("normalPlayBtn")
    const reversePlayBtn = document.getElementById("reversePlayBtn")
    const alternatePlayBtn = document.getElementById("alternatePlayBtn")
    const alternateReversePlayBtn = document.getElementById("alternateReversePlayBtn")

    normalPlayBtn.addEventListener("click", () => {
        const square = document.querySelector(".square1");

        square.style.animation = "none";
        void square.offsetWidth;
        square.style.animation = "basic-animation 2s linear 1s 1 normal forwards";

        setTimeout(() => {
            square.style.animation = "none";
        }, 6000);
    })

    reversePlayBtn.addEventListener("click", () => {
        const square = document.querySelector(".square2");

        square.style.animation = "none";
        void square.offsetWidth;
        square.style.animation = "basic-animation 2s linear 1s 1 reverse forwards";

        setTimeout(() => {
            square.style.animation = "none";
        }, 6000);
    })

    alternatePlayBtn.addEventListener("click", () => {
        const square = document.querySelector(".square3");

        square.style.animation = "none";
        void square.offsetWidth;
        square.style.animation = "basic-animation 2s linear 1s 2 alternate forwards";

        setTimeout(() => {
            square.style.animation = "none";
        }, 6000);
    })

    alternateReversePlayBtn.addEventListener("click", () => {
        const square = document.querySelector(".square4");

        square.style.animation = "none";
        void square.offsetWidth;
        square.style.animation = "basic-animation 2s linear 1s 2 alternate-reverse forwards";

        setTimeout(() => {
            square.style.animation = "none";
        }, 6000);
    })
})
