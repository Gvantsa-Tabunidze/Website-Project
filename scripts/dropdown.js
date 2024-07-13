'use strict';

//language dropdwons for desktop

export function dropdown() {
  const select = document.querySelector('.select');
  const caret = document.querySelector('.fa-caret-down');
  const menu = document.querySelector('.menu');
  const options = document.querySelectorAll('.menu-options');
  const selected = document.querySelector('.selected');

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('fa-caret-down-active');
    menu.classList.toggle('menu-open');
  });

  options.forEach((item) => {
    item.addEventListener('click', () => {
      selected.innerText = item.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('fa-caret-down-active');
      menu.classList.remove('menu-open');
      options.forEach((item) => {
        item.classList.remove('active');
      });
      item.classList.add('active');
    });
  });
}

// dropdown for mobile
export function mobDropdwon() {
  const mobSelect = document.querySelector('.select-mob');
  const mobMenu = document.querySelector('.menu-mob');
  const mobOption = document.querySelectorAll('.mobMenu-options');
  const mobSelected = document.querySelector('.selected-mob');
  const caretMob = document.querySelector('.mob');

  mobSelect.addEventListener('click', () => {
    mobSelect.classList.toggle('select-mob-clicked');
    caretMob.classList.toggle('mob-active');
    mobMenu.classList.toggle('mobMenu-open');
  });

  mobOption.forEach(element=>{
    element.addEventListener('click', ()=>{
      mobSelected.innerText = element.innerText;
      mobSelect.classList.remove('select-mob-clicked');
      caretMob.classList.remove('mob-active');
      mobMenu.classList.remove('mobMenu-open');
      mobOption.forEach(element =>{
        element.classList.remove('active');
      })
      element.classList.add('active');
    })
  })
}
