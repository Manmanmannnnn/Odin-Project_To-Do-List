
const container=document.querySelector('.container');



export function creaateContact(){
    container.innerHTML='';
    const h2=document.createElement('h2');
    h2.textContent='Here more about us';
    const p1=document.createElement('p');
    p1.textContent='dial 8446236'


    container.appendChild(h2);
    container.appendChild(p1);
}