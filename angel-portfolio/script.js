let topBtn = document.querySelector(".back-to-top");

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

window.onscroll = () => topBtn.style.opacity = window.scrollY > 500 ? 1 : 0;