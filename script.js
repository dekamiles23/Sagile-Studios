const transition = document.querySelector(".transition");

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {

        const href = this.getAttribute("href");

        // ignora links externos ou vazios
        if (!href || href.startsWith("http")) return;

        e.preventDefault();

        transition.classList.add("active");

        setTimeout(() => {
            window.location.href = href;
        }, 500); // tempo do fade
    });
});

// fade ao entrar na página
window.addEventListener("load", () => {
    transition.classList.remove("active");
});
