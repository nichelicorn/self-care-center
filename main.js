// ⤵ QUERY SELECTORS
var affirRadio = document.querySelector('#affirRadio');
var btnHeartsMini = document.querySelector('#btnHeartsMini');
var btnReceiveMsg = document.querySelector('#btnReceiveMsg');
var btnReturnHome = document.querySelector('#btnReturnHome');
var btnVisitHearts = document.querySelector('#btnVisitHearts');
var home = document.querySelector('#homeWrapper');
var icon = document.querySelector('#iconSection');
var mantraRadio = document.querySelector('#mantraRadio');
var messageBox = document.querySelector('#messageDisplaySection');
var savedAffirGallery = document.querySelector('#savedAffirGallery');
var savedMantrasGallery = document.querySelector('#savedMantrasGallery');
var savedMessagesSection = document.querySelector('#savedWrapper');

// // ⤵ MESSAGE CLASS
// class Message {
//  constructor(message,) {
//   message = userMessage.innerText;
//   id = Date.now();
//   isFavorite = false// if true, btnHeartsMini===pink
//  }
// }

// ⤵ MESSAGE ARRAYS
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
];
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
];
var savedAffirmations = [];
var savedMantras = [];

// ⤵ EVENT LISTENERS
btnHeartsMini.addEventListener('click', saveMessage);
btnReceiveMsg.addEventListener('click', displayMessage);
btnReturnHome.addEventListener('click', showHome);
btnVisitHearts.addEventListener('click', showHearts);
savedMessagesSection.addEventListener('click', deleteMessage);

// ⤵ FUNCTIONS
function deleteMessage() {
  var cardToDelete = event.target.closest('.card'); // this is the card closest to the click
  // console.log('cardToDelete:', cardToDelete); // returns the `innerHTML` showing the <div> and its contents (the card constructed on makewhatevercards)
  console.log('id:', cardToDelete.id); // returns the id contained within the `innerHTML` that makes the card

  
}
  // ✨ how do I extract the last character of the id? that is the index number that needs to be deleted from the array

// if I change the id to match the array name, is it possible to separate the number from the name? then I could have an id savedMantras0, split savedMantras and 0 into their own variables, then plug them into a statement that would spice the number(0) from the  name (savedMantras)

  // var list = [];
  // var nodeList = list.push(document.querySelectorAll('.card'));
  // console.log('list.push():', document.querySelectorAll('.card')) // returns the values of the NodeList and the index position within the list, as well as their descriptions
  // does the NodeList contain the id? 🕵️‍♀️
  // console.log('nodeList contains id?:', nodeList.contains(cardToDelete));
  // ✨ the id is also in the NodeList, appears as `div#id.whatev-card.card,`
  // need to push the values of the NodeList into an array to allow manipulation?
  // console.log('list.length:', list.length);

// figure out which item in the NodeList is being targeted on the click
// where does this information appear?

// find cardToDelete in the list and use that to update the DOM (?)

  // if (card.classList.contains('mantra-card')) {
    // savedMantras.splice(i, 1);
  // } else if (card.classList.contains('affir-card')) {
  // savedAffirmations.splice(i, 1);
// }
// }
// if classList.contains(this kind of card affir-card or mantra-card) {
// delete i (the index returned in the for loop) from the array that corresponds to the card type
// }

// WHAT ARE YOU TRYING TO DO?
// the index is stated by referring the the id in the innerHTML - (cardToDelete.id)
// the index can be used to indicate which item to delete (splice(i, 1))
// ?? .contains will work, and so will .remove
// if the card .contains the id, delete the card and rerun the makewhatever function

// function removePoster() {
//   var clickedPoster = event.target.closest('.mini-poster');
//   for (var i = 0; i < savedPosters.length; i++) {
//     if (savedPosters[i].id === parseInt(clickedPoster.id)) {
//       savedPosters.splice(i, 1);
//       displayGrid();
//     }
//   }
// }

// console.log('class:', cardToDelete.classList); // returns the classList of the card closest to the click
// console.log('NodeList:', nodeList); //logs the length of the `list` array



function displayMessage() {
  event.preventDefault(event);
  getMessage();
  hideIcon();
  showMessage();
  btnHeartsMini.classList.remove('pink-hearts');
}

function getMessage() {
  if (affirRadio.checked) {
    userMessage.innerText = mantras[getRandomIndex(mantras)];
  } else if (mantraRadio.checked) {
    userMessage.innerText = affirmations[getRandomIndex(affirmations)];
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function hideIcon() {
  icon.classList.add('hidden');
}

function hideHome() {
  home.classList.add('hidden');
}

function makeAffirCards() {
  savedAffirGallery.innerHTML = "";
  for (var i = 0; i < savedAffirmations.length; i++) {
    savedAffirGallery.innerHTML +=
    `
    <div class="affir-card card" id="savedAffirmations${[i]}">
      <p class="msg-p">${savedAffirmations[i]}</p>
      <button class="btn-delete">✂️</button>
    </div>
    `
  }
}

function makeMantraCards() {
  savedMantrasGallery.innerHTML = "";
  for (var i = 0; i < savedMantras.length; i++) {
    savedMantrasGallery.innerHTML +=
    `
    <div class="mantra-card card" id="savedMantras${[i]}">
      <p class="msg-p">${savedMantras[i]}</p>
      <button class="btn-delete">✂️</button>
    </div>
    `
  }
}

function saveMessage() {
  // btnHeartsMini.classList.toggle('.pink-hearts'); //this doesn't currently work - the class is added to the button (can verify in the console) but the color of the button isn't updatin; try putting this into its own function?
  if (affirRadio.checked && !savedAffirmations.includes(userMessage.innerText)) {
    savedAffirmations.push(userMessage.innerText);
  } else if (mantraRadio.checked && !savedMantras.includes(userMessage.innerText)) {
    savedMantras.push(userMessage.innerText);
  }
  // togglePink();
}

function showHearts() {
  hideHome();
  showSaved();
  makeAffirCards();
  makeMantraCards();
}

function showHome() {
  event.preventDefault(event);
  home.classList.remove('hidden');
  savedWrapper.classList.add('hidden');
}

function showSaved() {
  event.preventDefault(event);
  savedMessagesSection.classList.remove('hidden');
}

function showMessage() {
  messageBox.classList.remove('hidden');
}

// if this array is the type pass this through
// else if this array is the type pass this through
// the function needs to identify which array to pass the message into
// this array should be the same array that corresponds to the radio button that is checked




// function togglePink() {
//   // (mantras.innerText is in the array)
//   if (savedMantras.includes(userMessage.innerText)) {
//     console.log('pinkHeart=true:', savedMantras.includes(userMessage.innerText));
//     btnHeartsMini.classList.add('pink-hearts');
//   } else if (!savedMantras.includes(userMessage.innerText)) {
//     btnHeartsMini.classList.remove('pink-hearts');
//   }
//   if (savedAffirmations.includes(userMessage.innerText)) {
//     btnHeartsMini.classList.add('pink-hearts');
//   } else if (!savedAffirmations.includes(userMessage.innerText)) {
//     btnHeartsMini.classList.remove('pink-hearts');
//   }
// }

// function saveAndToggle() {
//   saveMessage();
//   togglePink();
// }

//  💖User can favorite a message 💖
// IN PROCESS
// 🧠 Users should be able to remove a message from their list of favorites, by clicking a button.
//  √ 1)  add a delete button to the cards
//  2)  when the delete button is clicked, two things should happen:
//      1) the message should be deleted from the array
//      2) the card should be removed from the view




// TO DO




// 🧠 As you add these new elements to the page, be sure to match the style of existing elements.
// 🧠 NOTE: None of this needs to persist on page refresh, unless you also complete the local storage feature



// COMPLETED
// 🧠 When a message appears, it should appear with a “Favorite” button.
// √💗2) need to make the favorite buttons
// √ these should be visible below the message when the button is clicked
// √ should they be in their own div? probably best for styling? not sure if this makes any difference
// √ 🐁 1) button click should alert the browser to show the favorite button at the same time that it hides the icon and get/shows the message - this is included in the hidden message-display-section
// √ 1a)  need a function to show the favorite buttons
// √ 3) need to add styling to the favorite buttons
// 🧠 When the “Favorite” button is clicked, that message should be added to a new list of favorite messages.
//  1) if the heart button is clicked, the message displayed will be added to an array of saved mantras/Affirmations
//  √ a) need to create variables to hold the saved messages - should be an empty array
//  √ b) need a function to push the value of the message into the array
//  √ b1) target the heart button
//  √ b2) target the message
//  √ b3) write a function that will push the targeted message into the correct array
//  √ b4) will probably need to reference the value of the checked radio button somehow?
// 🧠 Users should be able to view their favorites by clicking a “View Favorites” button that exists somewhere on the page
//  1)  when the button is clicked, the view will change from the home page to the saved-messages section
//  √ 1a) target the view favorites button
//  √ 1b) write a function that will hide the home page
//  √ 1c) write a function that will show the hidden saved messages page
// 🧠 When the “View Favorites” button is clicked, users should be taken to a new page that displays all of their favorite messages.
//  √ 2)  functions to hide home/show saved will be called on the btnVisitHearts click
//  √ 2a) style the divs that will hold the message cards
//  √ 2b) create message cards using innerHTML
//  √ 2c) values for cards will be drawn from the saved whatevers array
//  √ 2d) cards need styling!!
// 🧠 Users should be able to navigate back to the main page by clicking a button.
//  1)  when click return home button, the home view should reappear and the hearts should disappear
