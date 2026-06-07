// Cambio de tema claro/oscuro
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Revisar preferencia guardada
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Funcionalidad "Ver más" tecnologías
const toggleBtn = document.getElementById('toggleTechBtn');
const extraTechDiv = document.getElementById('extraTech');

if (toggleBtn && extraTechDiv) {
    toggleBtn.addEventListener('click', () => {
        extraTechDiv.classList.toggle('show');
        if (extraTechDiv.classList.contains('show')) {
            toggleBtn.textContent = 'Ver menos';
        } else {
            toggleBtn.textContent = 'Ver más';
        }
    });
}

// Efecto de aparición suave al scroll (opcional)
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.4s ease';
    observer.observe(card);
});

// Agregar año dinámico al footer si se desea
const footerYear = document.querySelector('.footer-note');
if (footerYear) {
    const year = new Date().getFullYear();
    footerYear.innerHTML += ` — Actualizado ${year}`;
}

// Consola amigable
console.log('CV interactivo cargado correctamente | Tema y efectos activos');