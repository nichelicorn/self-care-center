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
  console.log('hideIcon is firing on the btnReceiveMsg click'); //msg appears and then immediately disappers in the console?
}

function showMessage() {
  messageBox.classList.remove('hidden');
}
