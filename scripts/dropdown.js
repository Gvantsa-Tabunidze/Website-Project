'use strict';

//languiage dropdwons

export function dropdown(){
const dropdown = document.querySelector('.select-box');
const menu = document.querySelector('.menu')
const caret = document.querySelector('.caret');
const selectBox = document.querySelector('.select-box');
const selectedOption = document.querySelector('.selected');
const innerP = document.querySelector('.text');


dropdown.addEventListener('click', ()=> {
  menu.classList.toggle('show');
  caret.classList.toggle('caret-active');
  selectBox.classList.toggle('selectBox-clicked');
})

menu.addEventListener('click', (e) =>{
 const option =e.target.querySelector('.menu-item');
 console.log(option);
 selectedOption.innerHTML=innerP.innerHTML;
 

})

}

