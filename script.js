const transition = document.querySelector(".transition");

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {

        e.preventDefault(); // bloqueia SEMPRE

        const href = this.getAttribute("href");

        transition.classList.add("active");

        setTimeout(() => {
            window.location.href = href;
        }, 600);
    });
});
