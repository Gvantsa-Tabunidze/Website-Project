'use strict';

//languiage dropdwons

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
