const transition = document.querySelector(".transition");

// fade ao entrar (fade IN)
window.addEventListener("load", () => {
    setTimeout(() => {
        transition.classList.remove("active");
    }, 100);
});

// fade ao sair
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {

        const href = this.getAttribute("href");

        if (!href || href.startsWith("http")) return;

        e.preventDefault();

        transition.classList.add("active");

        setTimeout(() => {
            window.location.href = href;
        }, 500);
    });
});
