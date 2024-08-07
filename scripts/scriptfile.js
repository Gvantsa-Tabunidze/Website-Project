'use strict';

// Totop scroll animation
let topScroll = document.createElement('div');
topScroll.classList.add('contbg');
topScroll.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
document.querySelector('.scroll-btn').appendChild(topScroll);

topScroll.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

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
    return;
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

let accordionlist = document
  .querySelectorAll('.acc-list-item')
  .forEach(function (element) {
    element.addEventListener('click', function () {
      this.classList.toggle('unfold');
    });
  });

// Geeting data from server

let ulElement = document.getElementById('ul-element');
let currentPage = 1;
let totalPages;
let btnPrev = document.getElementById('prevButton');
let btnNext = document.getElementById('nextButton');

function getEmployeeInfo(page) {
  fetch('https://reqres.in/api/users?page=' + page, {
    method: 'GET',
  })
    .then(function (responseInfo) {
      // console.log(responseInfo);
      if (!responseInfo.ok) {
        throw 'error';
      }
      return responseInfo.json();
    })
    .then(function (newData) {
      // console.log(newData);
      const fragment = new DocumentFragment();

      newData.data.forEach((element) => {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.src = element.avatar;
        img.style.height = '128px';
        img.style.width = '128px';
        img.style.objectFit = 'cover';
        let pElement = document.createElement('p');
        pElement.innerText = `${element.first_name} ${element.last_name}`;
        li.appendChild(img);
        li.appendChild(pElement);
        fragment.appendChild(li);
      });
      ulElement.innerHTML = '';
      ulElement.appendChild(fragment);

      totalPages = newData.total_pages;

      if (currentPage === 1) {
        btnPrev.disabled = true;
      }
    })

    .catch(function (error) {
      if (error === 404) {
        let pError = document.createElement('p');
        pError.innerText = 'Page not found';
      } else {
        let pError = document.createElement('p');
        pError.innerText = 'Server Error';
      }
    });
}

function btnFnc() {
  if (currentPage === 1) {
    btnPrev.disabled = true;
  } else {
    btnPrev.disabled = false;
  }

  if (currentPage === totalPages) {
    btnNext.disabled = true;
  } else {
    btnNext.disabled = false;
  }
}

btnPrev.addEventListener('click', function () {
  if (currentPage === 1) {
    return;
  }
  currentPage--;
  getEmployeeInfo(currentPage);
  btnFnc();
});

btnNext.addEventListener('click', function () {
  if (currentPage === totalPages) {
    return;
  }
  currentPage++;
  getEmployeeInfo(currentPage);
  btnFnc();
});

getEmployeeInfo(currentPage);

// Posts

// let mainDiv = document.getElementById('post-wrapper');
// let overflowDiv = document.querySelector('.overflow');
// let postContent = document.querySelector('.post-content');
// let popUpClose = document.querySelector('.close');
// let iconAdd = document.getElementById('add-post');
// let postAddOverflowDiv = document.getElementById('overflow-add');
// let formAddPost = document.getElementById('form-add-post');
// let editPostOverflow = document.getElementById('edit-overflow');
// let formEditPost = document.getElementById('form-edit-post');
// let postInnerContent = document.getElementById('overflow-menu');

// // fetch

// function aJaxFunction(url, callback) {
//   fetch(url, {
//     method: 'GET',
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw 'error';
//       }
//       return response.json();
//     })
//     .then((responseData) => {
//       callback(responseData);
//     })
//     .catch((error) => console.log(error));
// }

// aJaxFunction('https://jsonplaceholder.typicode.com/posts', function (data) {
//   data.forEach((element) => {
//     createPostDiv(element);
//   });
// });

// function createPostDiv(item) {
//   let divElement = document.createElement('div');
//   divElement.classList.add('post');
//   divElement.setAttribute('data-id', item.id);

//   let idTitle = document.createElement('h3');
//   idTitle.innerText = item.id;

//   let postHeading = document.createElement('h2');
//   postHeading.innerText = item.title;

//   // Create delete button
//   let btnDelete = document.createElement('button');
//   btnDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';
//   btnDelete.classList.add('div-button1');

//   divElement.appendChild(btnDelete);
//   btnDelete.setAttribute('data-delete-id', item.id);
//   btnDelete.addEventListener('click', function (event) {
//     event.stopPropagation();
//     let buttonId = this.getAttribute('data-delete-id');
//     //  console.log(buttonId);
//     let deleteUrl = `https://jsonplaceholder.typicode.com/posts/${buttonId}`;
//     // console.log(deleteUrl);
//     fetch(deleteUrl, {
//       method: 'DELETE',
//     }).then(() => divElement.remove());
//   });

//   // Create edit button
//   let btnEdit = document.createElement('button');
//   btnEdit.innerHTML = '<i class="fa-solid fa-pen"></i>';
//   btnEdit.classList.add('div-button2');
//   divElement.appendChild(btnEdit);
//   btnEdit.setAttribute('data-edit-id', item.id);
//   btnEdit.addEventListener('click', function (event) {
//     event.stopPropagation();

//     editPostOverflow.classList.add('editActive');

//     formEditPost.addEventListener('submit', function (e) {
//       e.preventDefault();

//       let editUrl = `https://jsonplaceholder.typicode.com/posts/${item.id}`;
//       console.log(editUrl);

//       let newInput = {
//         title: document.getElementById('postedit-title').value,
//       };

//       let overflowNewContent = document.getElementById('overflow-menu');
//       overflowNewContent.innerText = newInput.title;

//       fetch(editUrl, {
//         method: 'PUT',
//         body: JSON.stringify(newInput),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//         .then((response) => response.json())
//         .then((editedObject) => console.log(editedObject))
//         .catch((error) => console.log(error.message))
//         .finally(() => {
//           document
//             .getElementById('edit-overflow')
//             .classList.remove('editActive');
//           document.getElementById('postedit-title').value = '';
//           let posts = document.getElementsByClassName('post');

//           for (let i = 0; i < posts.length; i++) {
//             if (
//               posts[i].hasAttribute('data-id') &&
//               posts[i].getAttribute('data-id') == item.id
//             ) {
//               posts[i].lastChild.textContent = newInput.title;
//               // console.log(posts[i]);
//               // postInnerContent.firstChild.textContent =
//             }
//           }
//         });
//     });
//   });

//   divElement.append(idTitle);
//   divElement.append(postHeading);

//   divElement.addEventListener('click', function () {
//     postContent.innerHTML = '';
//     let divId = this.getAttribute('data-id');
//     overflowDiv.classList.add('active');

//     let newUrl = `https://jsonplaceholder.typicode.com/posts/${divId}`;
//     // console.log(newUrl);

//     aJaxFunction(newUrl, function (dataInfo) {
//       console.log(dataInfo);
//       let pDescr = document.createElement('p');
//       pDescr.innerText = dataInfo.body;
//       postContent.appendChild(pDescr);
//     });
//   });

//   mainDiv.appendChild(divElement);
// }

// popUpClose.addEventListener('click', function () {
//   overflowDiv.classList.remove('active');
// });

// // Add post
// iconAdd.addEventListener('click', function () {
//   postAddOverflowDiv.classList.add('activeOverflow');
// });

// // Add submit event to the form
// formAddPost.addEventListener('submit', function (e) {
//   e.preventDefault();

//   // console.log(e.target[0]);
//   let inputMeaning = {
//     title: this[0].value,
//     // uSerId: 11
//   };
//   console.log(inputMeaning);

//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify(inputMeaning),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((newObject) => {
//       // console.log(newObject)
//       postAddOverflowDiv.classList.remove('activeOverflow');
//       this[0].value = '';
//       createPostDiv(newObject);
//     });
// });

// // Server data import
// import { getProductInfo } from './faux-api.js';
// getProductInfo();

// Import search filter
import {
  asyncFunction,
  filterOnkeyUp,
  focusSearch,
  clickOutside,
} from './Searchfilter.js';
asyncFunction();
filterOnkeyUp();
focusSearch();
clickOutside();

// Import burger menu

import { burgerAnimation, headerAnimation } from './burger.js';
burgerAnimation();
headerAnimation();

// Import dropdwon
import { dropdown, mobDropdwon } from './dropdown.js';
dropdown();
mobDropdwon();

// Import slider

import { mySlider } from './slider.js';
mySlider();

// Import cookie

import { cookieBanner } from './cookies.js';
cookieBanner();
