export function menu()
{
    const content = document.getElementById('content');
    const menuBtn = document.querySelector('.menu');

    menuBtn.addEventListener('click', () => 
    {
        content.innerHTML = "";

        content.className = "";
        content.classList.add('content-menu');

        const title = document.createElement('h1');
        title.textContent = "Menu";

        const list = document.createElement('ul');
        list.classList.add("menu-title");
        const item1 = document.createElement('li');
        item1.classList.add('menu-items')
        item1.textContent = "Margherita Pizza";

        const item2 = document.createElement('li');
        item2.classList.add('menu-items')
        item2.textContent = "Kebab";

        const item3 = document.createElement('li');
        item3.classList.add('menu-items')
        item3.textContent = "Butter Chicken";


        


        content.appendChild(title);
        content.appendChild(list);

        list.appendChild(item1);
        list.appendChild(item2);
        list.appendChild(item3);

    })
}