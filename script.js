/* Get References */
// Inputs
let titleInput = document.getElementById('title_input');
let nounInput = document.getElementById('noun');
let verbInput = document.getElementById('verb');
let adjectiveInput = document.getElementById('adjective');

// Results
let mainTitle = document.getElementById('main_title');
let storyResult = document.getElementById('story_result');

// Other Elements
let submitButton = document.getElementById('submit_button');
let formContainer = document.querySelector('.form_container');

/* Update Main Title While Title Input Is Changed */

// onchange only updates after user clicks outside of textbox
/* titleInput.onchange = function () {
  mainTitle.innerHTML = titleInput.value;
}; */

// oninput will actively change our title as we type
titleInput.oninput = function () {
  mainTitle.innerHTML = titleInput.value;
};

/* Create Our Submit Functionality */
// onclick event listener
submitButton.onclick = function (e) {
  // Prevent the page from refreshing
  e.preventDefault();

  // If user has left a field blank, send an alert
  if (
    titleInput.value === '' ||
    nounInput.value === '' ||
    verbInput.value === '' ||
    adjectiveInput.value === ''
  ) {
    alert('Please fill in all fields');
  } else {
    // If the user fills out all fields:
    // Parse inputs into result story
    let adlib = `Last night I ate a ${nounInput.value}, and today I just had to ${verbInput.value}. What a ${adjectiveInput.value} day!`;

    // Hide the form
    formContainer.style.visibility = 'hidden';

    // Update storyResults div with new adlib
    storyResult.innerHTML = adlib;
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* Mash.js */

/* Get User Input References */
let inputHome = document.getElementById('home');
let inputPet = document.getElementById('pet');

/* Get all other needed references in HTML */
let mashButton = document.getElementById('mash_button');
let mashResult = document.getElementById('mash_result');

/* Number Generator Function */

function randNumGenerator(num) {
  return Math.floor(Math.random() * num);
}

/* Functions for MASH Variables */

function getHome() {
  let homes = ['Mansion', 'Castle', 'Shack', 'House'];
  if (inputHome.value != '') {
    homes.push(inputHome.value);
  }
  return homes[randNumGenerator(homes.length)];
}

function getPet() {
  if (inputPet.value != '') {
    let petIndex = randNumGenerator(2);
    if (petIndex == 1) {
      return inputPet.value;
    }
  }
  let pets = ['Dog', 'Cat', 'Capybara', 'Mosquito'];
  return pets[randNumGenerator(pets.length)];
}

function getTravelCount() {
  return randNumGenerator(101);
}

function getCollege() {
  let colleges = ['NorthEastern', 'Rutgers', 'NYU', 'MIT', 'Community College'];
  return colleges[randNumGenerator(colleges.length)];
}

function getCar() {
  let cars = ['Toyota', 'Mazda', 'Tesla', 'Mustang', 'Saturn'];
  return cars[randNumGenerator(cars.length)];
}

/* MASH function */

function mash(e) {
  e.preventDefault();

  /* Run Functions and Assign to Variables */
  let home = getHome();
  let travelCount = getTravelCount();
  let pet = getPet();
  let college = getCollege();
  let car = getCar();

  let statement =
    'You will live in a ' +
    home +
    ', travel to ' +
    travelCount +
    ' countries, have a pet ' +
    pet +
    ', graduate from ' +
    college +
    ', and drive a ' +
    car +
    '!';
  if (
    home == 'Shack' &&
    travelCount <= 1 &&
    pet == 'Mosquito' &&
    college == 'Community College' &&
    car == 'Saturn'
  ) {
    statement = statement + '\nSorry! You got really unlucky :(';
  }
  // Add statement to the mash_result paragraph
  mashResult.innerHTML = statement;
}

// Create an event listener for the MASH button to run our mash.js function
// This can be done using a Callback function, where we reference the name of the
// function we created without the parentheses

mashButton.onclick = mash;
