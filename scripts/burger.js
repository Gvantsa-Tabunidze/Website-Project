'use strict';

// Burger Bar animation

let burger = document.querySelector('.burger');
let navMenu = document.querySelector('.nav-menu');

export function burgerAnimation() {
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach((element) =>
    element.addEventListener('click', () => {
      burger.classList.remove('active');
      navMenu.classList.remove('active');
    })
  );
}

// Header bg on scroll

export function headerAnimation() {
  let header = document.getElementById('hdr');
  window.addEventListener('scroll', function () {
    if (window.scrollY >= 80) {
      header.classList.add('newHeader');
    } else {
      header.classList.remove('newHeader');
    }
  });
}

// navmenu dropdown

const submenu = document.querySelector('.submenu');
const navItem = document.getElementById('products');

export function navOpen() {
  navItem.addEventListener('click', function () {
    submenu.classList.toggle('submenu-open');
  });
}
