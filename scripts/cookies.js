'use strict';

// Cookie Banner

export function cookieBanner(){
  const cookieBanner = document.getElementById('pop-up');
const acceptBtn = document.getElementById('accept');
const rejectBtn = document.getElementById('reject');

const formEl = document.getElementById('userinfo');

acceptBtn.addEventListener('click', function () {
  cookieBanner.style.display = 'none';
  Cookies.set('cookieBannerDisplayed', 'true', { expires: 2 });
});

rejectBtn.addEventListener('click', function () {
  Cookies.remove('cookieBannerDisplayed');
  cookieBanner.style.display = 'none';
});

const savedOption = Cookies.get('cookieBannerDisplayed');
setTimeout(() => {
  if (!savedOption) {
    cookieBanner.style.display = 'block';
  } 
}, 2000);
}