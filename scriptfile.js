// Home work 6:

let burger = document.querySelector('.burger');
let navMenu = document.querySelector('.nav-menu');

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

// Task 2:

let heroDiv = document.createElement('div');
heroDiv.classList.add('wrapper');

let imageHero = document.createElement('img');
imageHero.setAttribute('src', 'images/honeymaking.jpg');
imageHero.setAttribute('alt', 'Image');
imageHero.style.height = '100%';
imageHero.style.width = '100%';

let headingHero = document.createElement('h2');
headingHero.classList.add('title');
headingHero.innerText = 'Bee honey making';
headingHero.style.fontSize = '3.5rem';
headingHero.style.color = '#e58e26';

heroDiv.appendChild(imageHero);
heroDiv.appendChild(headingHero);

document.getElementById('hero').appendChild(heroDiv);

// Home work 7:

// To do list(Honey list)
// Selection of elements created in HTML(by declaring variables)

let input = document.getElementById('todo');
let addButton = document.getElementById('btn');
let ulList = document.getElementById('ul-list');
let resetAll = document.getElementById('reset-all');
let formEl = document.getElementById('formElement');

input.addEventListener('focus', function () {
  input.style.outlineColor = '#fa8231';
});

// Reset button creation(seeting ul content to 'empty');
resetAll.addEventListener('click', function () {
  ulList.innerHTML = '';
});

// Assigning an action to "Add" button of input
formEl.addEventListener('submit', function (event) {
  event.preventDefault();
  let userInputValue = input.value;

  if (userInputValue === '') {
    return userInputValue;
  }

  let liElement = document.createElement('li');
  liElement.textContent = userInputValue;
  liElement.classList.add('list-item');

  // Create delete button to each list item
  let dltButton = document.createElement('button');
  dltButton.classList.add('btn-target-container');

  let deleteButton = document.createElement('div');
  deleteButton.classList.add('dlt-button');
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

  dltButton.appendChild(deleteButton);

  dltButton.addEventListener('click', function () {
    liElement.remove();
  });
  // Drop delete button into List item
  liElement.appendChild(dltButton);

  // Drop list item(with content and buttons into ul)
  ulList.appendChild(liElement);

  // Clear input field after each 'add action'
  input.value = '';
});

// Header bg on scroll

let header = document.getElementById('hdr');
window.addEventListener('scroll', function () {
  if (window.scrollY >= 200) {
    header.classList.add('newHeader');
  } else if (window.scrollY >= 300) {
    nav - link.classList.add('linknew-color');
  } else {
    header.classList.remove('newHeader');
  }
});

let topScroll = document.createElement('div');
topScroll.classList.add('contbg');
topScroll.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
document.querySelector('.btn-target-container').appendChild(topScroll);

topScroll.addEventListener('click', function () {
  window.scrollTo(0, 0);
});

let accHolder = document
  .querySelectorAll('.acc-item-holder')
  .forEach(function (element) {
    element.addEventListener('click', function () {
      this.classList.toggle('unfold');
      if (!'unfold') {
        this.classList.toggle('unfold');
      }
    });
  });









