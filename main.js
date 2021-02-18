// ⤵ query selectors
var btnReceiveMsg = document.querySelector('#btnReceiveMsg');
var icon = document.querySelector('#icon');

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
btnReceiveMsg.addEventListener('click', hideIcon);

// ⤵ functions
function getRandomIndex(array) {
  var index = Math.floor(Math.random() * array.length);
}

function hideIcon() {
  icon.classList.add('hidden'); //this didn't work - is this targeting the wrong thing? icon is targeting the <img> holding the icon; not adding the hidden class to the icon `div`
  // okay...it works if I call the function hideIcon in the console - the problem is with the button click
  console.log('hideIcon is firing on the btnReceiveMsg click'); //msg appears and then immediately disappers in the console?
}

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
