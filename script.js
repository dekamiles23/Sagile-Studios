document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("search");
    const cards = document.querySelectorAll(".card");

    function filtrar() {
        const valor = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const nome = card.dataset.nome.toLowerCase();

            if (nome.includes(valor)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    }

    // 🔍 enquanto digita
    searchInput.addEventListener("input", filtrar);

    // ⌨️ quando aperta ENTER
    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // evita reload
            filtrar();
        }
    });

});
