// Alternar tema claro/escuro
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
    const icon = document.getElementById('theme-icon');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
});

// Scroll suave para seções
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Menu mobile toggle
document.getElementById('mobile-menu-button').addEventListener('click', toggleMobileMenu);
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Exemplo de geração de cards de eventos
const events = [
    { title: "Show de Música Sertaneja", date: "Segunda, 19h", icon: "fa-music" },
    { title: "Feira de Artesanato", date: "Terça, 10h", icon: "fa-handshake" },
    { title: "Oficina de Culinária", date: "Quarta, 14h", icon: "fa-utensils" },
];

const container = document.getElementById('events-container');
events.forEach(event => {
    const div = document.createElement('div');
    div.className = 'bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md card-hover transition-all';
    div.innerHTML = `
        <div class="flex items-center mb-4">
            <i class="fas ${event.icon} text-primary-light dark:text-primary-dark text-3xl mr-4"></i>
            <div>
                <h4 class="font-bold text-lg">${event.title}</h4>
                <p class="text-sm text-gray-500">${event.date}</p>
            </div>
        </div>
    `;
    container.appendChild(div);
});