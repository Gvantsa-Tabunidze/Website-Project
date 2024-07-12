'use strict';

import { burgerAnimation, headerAnimation } from './burger.js';
burgerAnimation();
headerAnimation();

const form = document.getElementById('validation-form');
const fName = document.getElementById('firstname');
const lName = document.getElementById('lastname');
const birthDate = document.getElementById('birthdate');
const residCountry = document.getElementById('residentcountry');
const residCity = document.getElementById('residentcity');
const userEmail = document.getElementById('useremail');
const telNumber = document.getElementById('telephone');
const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');
const radioArray = form.querySelectorAll('[name="gender"]');
const checkBox = document.getElementById('checkbox-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // get values from the iputs
  const nameValue = fName.value.trim();
  const surnameValue = lName.value.trim();
  const birthValue = birthDate.value.trim();
  const countryValue = residCountry.value.trim();
  const cityValue = residCity.value.trim();
  const emailValue = userEmail.value.trim();
  const telValue = telNumber.value.trim();
  const pass1Value = pass1.value.trim();
  const pass2Value = pass2.value.trim();
  // radioArray value verified inside if condition
  // checkBox value verified inside if condition

  // First name
  if (nameValue === '') {
    // show error
    // console.log('Looser');
    setErrorFor(fName, 'First name field can not be empty');
  } else {
    // add success class
    setSuccessFor(fName, 'Good job baddy!');
  }

  // Last name
  if (surnameValue === '') {
    // show error
    // console.log('Looser');
    setErrorFor(lName, 'Last name field can not be empty');
  } else {
    // add success class
    setSuccessFor(lName, 'Good job baddy!');
  }

  // Email
  if (emailValue === '') {
    // show error
    // console.log('Looser');
    setErrorFor(userEmail, 'Email field can not be empty');
  } else if (!emailRegex(emailValue)) {
    setErrorFor(userEmail, 'Email is not valid');
  } else {
    // add success class
    setSuccessFor(userEmail, 'Good job baddy!');
  }

  // Pass1
  if (pass1Value === '') {
    // show error
    // console.log('Looser');
    setErrorFor(pass1, 'Password field can not be empty');
  } else if (!passwordRegex(pass1Value)) {
    setErrorFor(pass1, 'Invalid password');
  } else {
    // add success class
    setSuccessFor(pass1, 'Good job baddy!');
  }
  // Pass2
  if (pass2Value === '') {
    // show error
    // console.log('Looser');
    setErrorFor(pass2, 'Password field can not be empty');
  } else if (pass1Value !== pass2Value) {
    setErrorFor(pass2, 'Password do not match each other');
  } else if (!passwordRegex(pass2Value)) {
    setErrorFor(pass2, 'Invalid password');
  } else {
    // add success class
    setSuccessFor(pass2, 'Good job baddy!');
  }

  // Check radio buttons
  let gender = false;
  radioArray.forEach((item) => {
    if (item.checked) {
      gender = true;
      radioSuccess(radioArray, 'Good job baddy!');
    }
  });
  if (gender === false) {
    radioError(radioArray, 'Select your gender');
  }

  // Check the checkbox
  const agree = document.getElementById('agreefield').checked;
  if (!agree) {
    checkboxError(
      checkBox,
      'First, agree the terms & conditions to further actions'
    );
  } else {
    checkboxSuccess(checkBox, 'Good job baddy!');
  }
}

function setErrorFor(input, message) {
  const formDiv = input.parentElement;
  formDiv.className = 'form-div error';
  const smallText = formDiv.querySelector('small');
  smallText.innerText = message;
}

function setSuccessFor(input, message) {
  const formDiv = input.parentElement;
  formDiv.className = 'form-div success';
  const smallText = formDiv.querySelector('small');
  smallText.innerText = message;
}

function radioError(input, message) {
  const radioInput = document.querySelector('.form-select');
  radioInput.classList.add('error');
  const radioSmall = radioInput.querySelector('small');
  radioSmall.innerText = message;
}

function radioSuccess(input, message) {
  const radioInput = document.querySelector('.form-select');
  radioInput.classList.add('success');
  const radioSmall = radioInput.querySelector('small');
  radioSmall.innerText = message;
}

function checkboxError(input, message) {
  const chekboxInput = document.querySelector('.checkbox-form');
  chekboxInput.className = 'checkbox-form error';
  const checkboxSmall = chekboxInput.querySelector('small');
  checkboxSmall.innerText = message;
}

function checkboxSuccess(input, message) {
  const chekboxInput = document.querySelector('.checkbox-form');
  chekboxInput.className = 'checkbox-form success';
  const checkboxSmall = chekboxInput.querySelector('small');
  checkboxSmall.innerText = message;
}

const visibilityBtn1 = document.getElementById('visibility-btn1');
const visibilityBtn2 = document.getElementById('visibility-btn2');
visibilityBtn1.addEventListener('click', showHide1);
visibilityBtn2.addEventListener('click', showHide2);

function showHide1() {
  if (pass1.type === 'password') {
    pass1.type = 'text';
    visibilityBtn1.classList.remove('fa-eye');
    visibilityBtn1.classList.add('fa-eye-slash');
  } else {
    pass1.type = 'password';
    visibilityBtn1.classList.remove('fa-eye-slash');
    visibilityBtn1.classList.add('fa-eye');
  }
}

function showHide2() {
  if (pass2.type === 'password') {
    pass2.type = 'text';
    visibilityBtn2.classList.remove('fa-eye');
    visibilityBtn2.classList.add('fa-eye-slash');
  } else {
    pass2.type = 'password';
    visibilityBtn2.classList.remove('fa-eye-slash');
    visibilityBtn2.classList.add('fa-eye');
  }
}

pass1.addEventListener('focus', function (e) {
  visibilityBtn1.style.visibility = 'visible';
});

pass2.addEventListener('focus', function (e) {
  visibilityBtn2.style.visibility = 'visible';
});

function emailRegex(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function passwordRegex(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
    password
  );
}

// nav Open function

import { navOpen } from './burger.js';
navOpen();

// Import dropdwon
import { dropdown } from './dropdown.js';
dropdown();
