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
