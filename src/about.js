export function about()
{
    const content = document.querySelector('#content');
    const aboutBtn = document.querySelector('.about');

    aboutBtn.addEventListener('click', () => 
    {
        content.innerHTML = "";

        const title = document.createElement('h1');
        title.textContent = "Hi, my name is Ifrahim.";

        content.appendChild(title);

    })

}