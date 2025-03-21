document.addEventListener("DOMContentLoaded", function() {
    // Evento para abrir el sobre
    document.getElementById("envelope").addEventListener("click", function () {
        this.classList.toggle("open");
    });

    // Evento para hacer llover flores
    document.getElementById("btnFlores").addEventListener("click", function () {
        for (let i = 0; i < 20; i++) {
            let flower = document.createElement("div");
            flower.classList.add("flower");
            flower.innerHTML = "🌼";
            document.body.appendChild(flower);

            let startX = Math.random() * window.innerWidth;
            let duration = Math.random() * 3 + 2;

            flower.style.left = `${startX}px`;
            flower.style.animationDuration = `${duration}s`;

            setTimeout(() => {
                flower.remove();
            }, duration * 1000);
        }
    });
});
