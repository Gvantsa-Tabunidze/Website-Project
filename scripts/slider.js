'use strict';

// const arrLeft = document.getElementById('left');
// const arrRight = document.getElementById('right');
// const slidewrapper =document.getElementById('slider-content');

// const dataSlider = [
//   {
//     title: 'Honeycomb',
//     avatar: 'https://reviveabee.com/wp-content/uploads/2022/07/honeycomb-covered-in-honey-1024x665.jpg',
//   },
//   {
//     title: 'Our beekeepers',
//     avatar: 'https://media.npr.org/assets/img/2016/09/27/bee-keeping-1_custom-f93901f428129c4505bc9e81e004d645bf7e1a09.jpg?s=1100&c=50&f=jpeg',
//   },
//   {
//   title: 'Beebox',
//    avatar: 'https://savethebee.org/wp-content/uploads/2022/04/h735Exw2XLrxOdjbEFhmooAzPzSrtbW21647979394.jpg',
//  }

// ]

// let sliderIndex = 0;

// function createDivtag(){
//   const div = document.createElement('div');
//   div.classList.add('slide-div');
//   return div;
// }

// function createImg(item){
// const imageSlide = document.createElement('img');
// imageSlide.src = item.avatar;
// return imageSlide;
// }

// function createTitle(item){
// const titleSlide = document.createElement('h2');
// titleSlide.innerText = item.title;
// return titleSlide;
// }

// export function setSlide(){
//   slidewrapper.innerHTML = '';
//   const slideDiv = createDivtag();
//   const imgDiv = createImg(dataSlider[sliderIndex]);
//   const titleDiv = createTitle(dataSlider[sliderIndex]);
// slideDiv.appendChild(imgDiv);
// slideDiv.appendChild(titleDiv);
// slidewrapper.appendChild(slideDiv);
// };
// setSlide();

// arrLeft.addEventListener('click', function(){
//   sliderIndex --;
//   setSlide();
//   })

//   arrRight.addEventListener('click', function(){
//   sliderIndex++;
//   setSlide();
//   })

export function mySlider() {
  const mySlider = new Splide('#mySlider', {
    width: '100%',
    perPage: 1,
    start: 1,
    breakpoints: {
      768: {
        arrows: false,
      },
    },
    classes: {
      pagination: 'splide__pagination',
      page: 'splide__pagination__page',
    },
  });

  new Splide('.splide', {
    width: '80%',
  });

  mySlider.mount();
}
