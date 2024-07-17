export default function loadAbout(parent) {
    const about = document.createElement('div');
    about.classList.add('about');
    about.textContent = 'About Page'

    parent.innerHTML = '';
    parent.appendChild(about);
    console.log('from about')
} 