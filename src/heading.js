const header=document.querySelector('header');
const navArea=document.querySelector('nav');
const buttons=document.querySelectorAll('button')

export function headStyle(){

    header.style.width='100%';
    header.style.height='4rem';
    header.style.backgroundColor='rgb(241, 206, 166)';
    header.style.margin='15px auto 20px auto';
    

    navArea.style.height='100%'
    navArea.style.display='flex';
    navArea.style.justifyContent='center';
    navArea.style.gap='15px';
    navArea.style.alignItems='flex-end';


    buttons[0].textContent='Home Page';
    buttons[1].textContent='Menu';
    buttons[2].textContent='Contact';

}

export function button1Function(func){
    buttons[0].addEventListener('click',()=>func())
}

export function button2Function(func){
    buttons[1].addEventListener('click',()=>func())
}

export function button3Function(func){
    buttons[2].addEventListener('click',()=>func())
}





