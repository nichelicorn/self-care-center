// ⤵ query selectors
var affirRadio = document.querySelector('#affirmation'); //dbl checked - this is targeting the affirmation radio button
var btnReceiveMsg = document.querySelector('#btnReceiveMsg'); //dbl checked - this is targeting the receive message button
var icon = document.querySelector('#iconSection'); //dbl checked - this is targeting the icon section (want to remove that whole section when displayed?)
var mantraRadio = document.querySelector('#mantra'); //dbl checked - this is targeting the mantra radio button
var messageBox = document.querySelector('#messageDisplaySection');
var userMessage = document.querySelector('#userMessage');

// ⤵ message arrays
var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices.",
]
var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather.",
]

// ⤵ event listeners
btnReceiveMsg.addEventListener('click', displayMessage);

// ⤵ functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayMessage() {
  getMessage();
  hideIcon();
  showMessage();
}

function getMessage() {
  if (affirRadio.checked) {
    userMessage.innerText = mantras[getRandomIndex(mantras)];
  } else if (mantraRadio.checked) {
    userMessage.innerText = affirmations[getRandomIndex(affirmations)];
  // } else {
  //   alert("You haven't made a selection!");
  }
}

function hideIcon() {
  icon.classList.add('hidden');
  console.log('hideIcon is firing on the btnReceiveMsg click'); //msg appears and then immediately disappers in the console?
}

function showMessage() {
  messageBox.classList.remove('hidden');
}

// what the heck??? This is all working, seemingly, but when I click the button, the functions in displayMessage will only temporarily fire? the random message is appearing, and the icon is disappearing, but only for a split second


// i've hid a roadblock at hideIcon, but I am going to keep moving forward - I wonder if there is something about the order that isn't working
// PSEUDOCODE AGAIN! WHAT'S HAPPENING WHERE I AM AND WHERE DO I NEED TO GO?
// RIGHT NOW, I KNOW THAT WHEN I CLICK THE BUTTON, I WANT THESE THINGS TO HAPPEN:
//  1) ONE OF THE RADIO BUTTONS HAS TO BE CHECKED FOR THE BUTTON CLICK TO DISPLAY A MESSAGE (I THINK THIS MIGHT BE WHY hideIcon ISN'T DOING ANYTHING RIGHT NOW)
//  2) √ THE MEDITATION ICON SHOULD BE HIDDEN (hideIcon)
//  3) A RANDOM MESSAGE WILL BE GENERATED (USING THE INDEX CREATED BY CALLING getRandomIndex)
//  4) THIS MESSAGE WILL BE DISPLAYED WHERE THE HIDDEN ICON ONCE WAS




// 2a) write a function that will hide the mediation icon
// --- can this be one function? hide/unhide in the same function and call when the button is clicked
// --- may need an `event.preventDefault(event)` to clear the action when the button is clicked again?
// need an event listener that will target the  `Receive Message` button and listen for a click
// when the click occurs, run the function to hide the icon
// will I want to call the function to create a random message within the displayMessage() function? or should I name this function to hideIcon? That's probably a better idea...


// Iteration 1: Minimum Viable Product (MVP) - Add Random Affirmation and Mantra feature
// When a user selects a message option and then clicks the “Receive Message” button, the user sees a random message from the list of possible messages for that category
// When the message appears, the mediation icon disappears from the message area

// goal : when a radio button is selected and the `Receive Message` button is clicked, several things will happen:
//  1) √ a random index will be generated that will be used to choose a value from the chosen array
//  2) the meditation icon will disappear from view
//  3) in its place, the random message will be displayed to the user

// was part of 2), but feels like it should be a separate function? - should this be part of the function that generates the innerText?
//  b) write a function that will unhide the message display element

// 3a) write a function that will replace the icon with an innerText
//  b) write a function that will pull a value from the appropriate array, based on the random index generated
// should this be combined with step 3? I think I might be combining things backwards - I want to generate an innerText that will call the getRandomIndex function to generate the value displayed
// --- target the container for the text and replace with an innerText
