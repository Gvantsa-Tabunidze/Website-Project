'use strict';

const searchInput = document.getElementById('search-bar');
const searchOutcome = document.getElementById('outcome');

const searchList = [];

export const asyncFunction = async () => {
  try {
    const dataResponse = await axios.get(
      'https://faux-api.com/api/v1/honeyinfo_7192215413888481'
    );
    // console.log(dataResponse.data.result);

    dataResponse.data.result.forEach((element) => {
      const prodItemList = document.createElement('li');
      prodItemList.classList.add('search-list');
      const textDiv = document.createElement('div');
      textDiv.classList.add('textDiv');

      textDiv.innerHTML = `<span id ='mainTitle'>${element.name}</span><br><span id ='sub-title'>${element.origin}</span>`;
      prodItemList.appendChild(textDiv);

      const searchImage = document.createElement('img');
      searchImage.src = element.image;
      searchImage.classList.add('searchImageStyle');

      prodItemList.appendChild(searchImage);
      searchList.push(prodItemList);
      searchOutcome.appendChild(prodItemList);
    });
  } catch (error) {
    console.error(error);
  }
};

function filterResult(searchitem) {
  searchList.forEach((item) => {
    if (
      item.innerText
        .toLowerCase()
        .trim()
        .includes(searchitem.toLowerCase().trim())
    ) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}

export function focusSearch() {
  searchInput.addEventListener('focus', function () {
    searchOutcome.style.display = 'block';
  });
}

export function filterOnkeyUp() {
  searchInput.addEventListener('keyup', function () {
    filterResult(this.value);
  });
}

export function clickOutside() {
  document.addEventListener('click', (e) => {
    console.log(e.target);
    if (!searchOutcome.contains(e.target) && !searchInput.contains(e.target)) {
      searchOutcome.style.display = 'none';
    }
  });
}
