document.addEventListener("DOMContentLoaded", () => {

    // 🔍 BUSCA
    const searchInput = document.getElementById("search");
    const cards = document.querySelectorAll(".card");

function filtrar() {
    const valor = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const nome = (card.dataset.nome || "").toLowerCase();

        if (nome.includes(valor)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

    if (searchInput) {
        searchInput.addEventListener("input", filtrar);

        searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                filtrar();
            }
        });
    }

    // 🎬 TRANSIÇÃO
    const transition = document.querySelector(".transition");

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function(e) {

            const href = this.getAttribute("href");

            if (!href || href.startsWith("http") || href.startsWith("#")) return;

            if (!transition) return; // evita erro

            e.preventDefault();

            transition.classList.add("active");

            setTimeout(() => {
                window.location.href = href;
            }, 400);
        });
    });

    // 🔥 Corrige tela travada
    window.addEventListener("pageshow", () => {
        if (transition) {
            transition.classList.remove("active");
        }
    });

});

document.getElementById("menu")
