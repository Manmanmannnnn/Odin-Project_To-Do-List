
const container=document.querySelector('.container');



export function createMenu(){
    container.innerHTML='';
    const h2=document.createElement('h2');
    h2.textContent='Klirins Quisine';
    const p1=document.createElement('p');
    p1.textContent='Here is our menu'


    container.appendChild(h2);
    container.appendChild(p1);
}