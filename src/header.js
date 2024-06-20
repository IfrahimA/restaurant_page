import restaurantImage from './images/restaurant.png'

export function header()
{
    const header = document.getElementById('header')
    const homePage = document.createElement('nav');
    const menu = document.createElement('nav'); 
    const about = document.createElement('nav');
    const image = document.getElementById('image');
    const dish = document.createElement('img');
    const icons = document.getElementById('icons'); 

    dish.src = restaurantImage;

    homePage.textContent = 'Home'; 
    menu.textContent = "Menu";
    about.textContent = "About"; 

    homePage.classList.add('home');
    menu.classList.add('menu');
    about.classList.add('about');
    
    image.appendChild(dish);
    icons.appendChild(homePage);
    icons.appendChild(menu); 
    icons.appendChild(about);
}