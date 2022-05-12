const buttons = document.querySelectorAll(".ripple-btn");

buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        let x = e.clientX;
        let y = e.clientY;

        let xButtonLeft = e.target.offsetLeft;
        let yButtonTop = e.target.offsetTop;

        let xInside = x - xButtonLeft;
        let yInside = y - yButtonTop;

        const span = document.createElement("span");
        span.classList.add("ripple-circle");
        span.style.top = `${yInside}px`;
        span.style.left = `${xInside}px`;

        this.appendChild(span);

        setTimeout(() => span.remove(), 500);
    });
});
