import dishImage from './images/dish.png'

export function header()
{
    const header = document.getElementById('header')
    const homePage = document.createElement('nav');
    const menu = document.createElement('nav'); 
    const about = document.createElement('nav');
    const image = document.getElementById('image');
    const dish = document.createElement('img');
    const icons = document.getElementById('icons'); 

    dish.src = dishImage;

    homePage.textContent = 'Home'; 
    menu.textContent = "Menu";
    about.textContent = "About"; 
    
    image.appendChild(dish);
    icons.appendChild(homePage);
    icons.appendChild(menu); 
    icons.appendChild(about);
}