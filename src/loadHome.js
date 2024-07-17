
export default function loadHome(parent) {
    const home = document.createElement('div');
    home.classList.add('home');
    home.textContent = 'Home page'

    parent.innerHTML = '';
    parent.appendChild(home);
} 