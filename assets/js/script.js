// Estilo e animação para elementos que flutuam ao entrar na tela
const floatStyle = document.createElement("style");
floatStyle.innerHTML = `
.float-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.float-on-scroll.float {
  opacity: 1;
  transform: translateY(0);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}`;
document.head.appendChild(floatStyle);

// Aplica a animação flutuante quando entra na tela
document.addEventListener("DOMContentLoaded", function () {
  const floatElements = document.querySelectorAll(".float-on-scroll");

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("float");
        observerInstance.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  floatElements.forEach(el => observer.observe(el));
});


 function toggleMobileNav() {
  const nav = document.getElementById('mainNav');
  nav.classList.toggle('active');
}

