'use strict';

// npm axios

const ulHoney = document.getElementById('honey-list');

export function getProductInfo() {
  axios
    .get('https://faux-api.com/api/v1/honeyinfo_7192215413888481')
    .then(function (response) {
      console.log(response.data.result);
      
      const fragment = new DocumentFragment();

      response.data.result.forEach((element) => {
        const productCard = document.createElement('li');
        productCard.classList.add('productCard');
        const itemImage = document.createElement('img');
        itemImage.src = element.image;
        itemImage.classList.add('itemImage');
        const heading = document.createElement('h3');
        heading.innerText = element.name;
        

        productCard.appendChild(itemImage);      
        productCard.appendChild(heading);
        fragment.appendChild(productCard);
       
        ulHoney.appendChild(fragment);
        
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

getProductInfo();
