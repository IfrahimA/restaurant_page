import dishImage from './images/dish.png'

export function header()
{
    const header = document.getElementById('header')
    const homePage = document.createElement('nav');
    const menu = document.createElement('nav'); 
    const about = document.createElement('nav');
    const icon = document.createElement('img');

    icon.src = dishImage;

    homePage.textContent = 'Home'; 
    menu.textContent = "Menu";
    about.textContent = "About"; 
    
    header.appendChild(icon);
    header.appendChild(homePage);
    header.appendChild(menu); 
    header.appendChild(about);
}