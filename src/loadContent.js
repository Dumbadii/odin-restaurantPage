import Icon from './icon.svg';
export default function loadContent(parent) {

    const img = new Image();
    img.src = Icon;
    const heading = document.createElement('h1');
    heading.textContent = 'Image Title';
    const description = document.createElement('div');
    description.textContent = 'Hi ,this is description';

    parent.innerHTML = '';
    parent.appendChild(img);
    parent.appendChild(heading);
    parent.appendChild(description);
}