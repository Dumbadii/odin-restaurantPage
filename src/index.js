import loadContent  from "./loadContent";
import loadAbout from "./loadAbout";
import loadHome from "./loadHome";
import './style.css';

const homeTab = document.querySelector('.home');
const aboutTab = document.querySelector('.about');
const menuTab = document.querySelector('.menu')

const container = document.querySelector('#content')
homeTab.addEventListener('click', (e)=>loadHome(container))
aboutTab.addEventListener('click', (e)=>loadAbout(container))
menuTab.addEventListener('click', (e)=>loadContent(container))