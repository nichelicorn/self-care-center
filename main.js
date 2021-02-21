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
btnHeartsMini.addEventListener('click', saveMessage); //switch this to call function saveAndToggle - want to save message and toggle to pink at the same time -- will it work?? let's find out... 🕵️‍♀️...it will still add the message to the array, but the button still isn't turning pink 😕
// maybe this should still only run the saveMessage function, and within the saveMessage could call togglePink
// togglePink might need to have an if (mantras.innerText is in the array), change the heart to pink
// I still don't think this will necessarily correct the issue of the color not appearing
btnReceiveMsg.addEventListener('click', displayMessage);
btnReturnHome.addEventListener('click', showHome);
btnVisitHearts.addEventListener('click', showHearts);
savedMessagesSection.addEventListener('click', deleteMessage);

// ⤵ FUNCTIONS
function deleteMessage() {
  if (event.target.classList.contains('btn-delete')) {
    savedMantras.pop();
    savedAffirmations.pop();
    makeAffirCards();
    makeMantraCards();
  }
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
  //   alert("please make a selection to proceed");
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
    <div class="affir-card">
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
    <div class="mantra-card">
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





// function togglePink() {
//   // (mantras.innerText is in the array)
//   if (savedMantras.includes(userMessage.innerText)) {
//     btnHeartsMini.classList.add('.pink-hearts');
//   }
//   if (savedAffirmations.includes(userMessage.innerText)) {
//     btnHeartsMini.classList.add('.pink-hearts');
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
//      2) the card should be deleted from the view




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
