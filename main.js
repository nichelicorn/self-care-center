// ⤵ QUERY SELECTORS 🕵️‍♀️
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

// // ⤵ MESSAGE CLASS 🏗 - may attempt a future refactore to include a class; it seems this would require refactoring `deleteMessage()` to target the id in the object rather than the id in the DOM
// class Message {
//  constructor(message,) {
//   message = userMessage.innerText;
//   id = Date.now();
//   isFavorite = false// if true, btnHeartsMini===pink
//  }
// }

// ⤵ MESSAGE ARRAYS 🕉
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

// ⤵ EVENT LISTENERS 🌽
btnHeartsMini.addEventListener('click', saveMessage);
btnReceiveMsg.addEventListener('click', displayMessage);
btnReturnHome.addEventListener('click', showHome);
btnVisitHearts.addEventListener('click', showHearts);
savedMessagesSection.addEventListener('click', deleteMessage);

// ⤵ FUNCTIONS 🏋️‍♀️
function deleteMessage() {
  var cardToDelete = event.target.closest('.card');
  var id = cardToDelete.id;
  var index = id.slice(-1);
  var array = id.replace(index, "");

  if (array === 'savedAffirmations') {
    savedAffirmations.splice(index, 1);
  } else if (array === 'savedMantras') {
    savedMantras.splice(index, 1);
  }

  makeAffirCards();
  makeMantraCards();
}

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

function hideHome() {
  home.classList.add('hidden');
}

function hideIcon() {
  icon.classList.add('hidden');
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
    `;
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
    `;
  }
}

function saveMessage() {
  btnHeartsMini.classList.toggle('pink-hearts'); // this will toggle the heart pink when clicked, and off when the Receive Message button is clicked again
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

function showMessage() {
  messageBox.classList.remove('hidden');
}

function showSaved() {
  event.preventDefault(event);
  savedMessagesSection.classList.remove('hidden');
}

// FUNCTIONS TO REVISIT IN THE FUTURE 🕰
// function togglePink() { // this doesn't actually work...will change the heart pink but the logic is wrong; only changes to pink for `savedAffirmations`; doesn't recognize if the value is already in the array
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

// function saveAndToggle() { // may refactor in the future to use this function instead
//   saveMessage();
//   togglePink();
// }
