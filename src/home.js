import homeBackground from './images/background.png';

export function home()
{
    const content = document.getElementById('content');
    const background = document.createElement('img');
    const text = document.createElement('div');
    const homeBtn = document.querySelector('.home');

    background.src = homeBackground;
    text.textContent = "Welcome To Pier";
    text.classList.add("test");
    content.classList.add("content-home");
    content.appendChild(background);
    content.appendChild(text);

    event();

    function event()
    {
        homeBtn.addEventListener('click', () => 
        {
            content.innerHTML = "";
            const background = document.createElement('img');
            const text = document.createElement('div');
            const homeBtn = document.querySelector('.home');
        
            background.src = homeBackground;
            text.textContent = "Welcome To Pier";
            text.classList.add("test");
            content.appendChild(background);
            content.appendChild(text);        
        })
    }
}

