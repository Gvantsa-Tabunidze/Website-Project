'use strict';

// npm axios

const ulHoney = document.getElementById('honey-list');
let loader = false;
export function getProductInfo(url, callback) {
  loader = true;
  axios
    .get(url)
    .then(function (response) {
      console.log(response.data.result);
      callback(response);
    })
    .catch(function (error) {
      // handle error
      if (error === 404) {
        const list = document.createElement('li');
        const errorHeading = document.createElement('p');
        errorHeading.innerText = 'Page not found!';
        list.appendChild(errorHeading);
        ulHoney.appendChild(list);
      } else {
        const list = document.createElement('li');
        const errorHeading = document.createElement('p');
        errorHeading.innerText = 'Page not found!';
        list.appendChild(errorHeading);
        ulHoney.appendChild(list);
      }

      console.log(error);
    })
    .finally(function () {
      // always executed
      loader = false;
    });
}

getProductInfo(
  'https://faux-api.com/api/v1/honeyinfo_7192215413888481',
  function (dataobject) {
    dataobject.data.result.forEach((element) => {
      createDivElement(element);
    });
    console.log(dataobject.data.result);
  }
);

function createDivElement(element) {
  const fragment = new DocumentFragment();

  const productCard = document.createElement('li');
  productCard.classList.add('productCard');
  productCard.setAttribute('product-id', element.id);
  const itemImage = document.createElement('img');
  itemImage.src = element.image;
  itemImage.classList.add('itemImage');
  const heading = document.createElement('h3');
  heading.innerText = element.name;
  const price = document.createElement('p');
  price.innerText = element.price;
  price.classList.add('price');
  const subTitle = document.createElement('p');
  subTitle.innerText = element.origin;
  subTitle.classList.add('origin');
  const descrDiv = document.createElement('div');
  descrDiv.classList.add('details');
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('contentDiv');
  descrDiv.appendChild(contentDiv);

  productCard.appendChild(itemImage);
  productCard.appendChild(heading);
  productCard.appendChild(subTitle);
  productCard.appendChild(price);
  productCard.appendChild(descrDiv);

  productCard.addEventListener('mouseover', function () {
    // console.log(this);
    // contentDiv.innerHTML = '';
    const cardId = this.getAttribute('product-id');
    // console.log(cardId);
    descrDiv.classList.add('active');
    const newLink = `https://faux-api.com/api/v1/honeyinfo_7192215413888481/${cardId}`;
    console.log(newLink);
    getProductInfo(newLink, function (dataInfo) {
      // console.log(dataInfo.data.result);
      dataInfo.data.result;

      contentDiv.innerHTML = '';
      const prodTitle = document.createElement('h3');
      let { description, flower_base, id, image, name, origin, price } =
        dataInfo.data.result[0];

      // console.log(infoObj);

      prodTitle.innerText = name;
      contentDiv.appendChild(prodTitle);
      const pDescr = document.createElement('p');
      pDescr.innerText = description;
      pDescr.classList.add('parStyle');
      contentDiv.appendChild(pDescr);
    });
  });
  productCard.addEventListener('mouseout', function () {
    descrDiv.classList.remove('active');
  });

  fragment.appendChild(productCard);
  ulHoney.appendChild(fragment);
}

// Import dropdwon
import { dropdown, mobDropdwon } from './dropdown.js';
dropdown();
mobDropdwon();

import { burgerAnimation, headerAnimation } from './burger.js';
burgerAnimation();
headerAnimation();
