// ⤵ query selectors


// ⤵ data model


// ⤵ event listeners


// ⤵ functions


// 1a) write a function that will generate a random index number
//  b) write a function that will pull a value from the appropriate array, based on the random index generated
// --- should the generate random function call the message function with the index argument passed in? yes, I like that idea





// Iteration 1: Minimum Viable Product (MVP) - Add Random Affirmation and Mantra feature
// When a user selects a message option and then clicks the “Receive Message” button, the user sees a random message from the list of possible messages for that category
// When the message appears, the mediation icon disappears from the message area

// goal : when a radio button is selected and the `Receive Message` button is clicked, several things will happen:
//  1) a random message will be generated based on the user input
//  2) the meditation icon will disappear from view
//  3) in its place, the random message will be displayed to the user


// 2a) write a function that will hide the mediation icon
//  b) write a function that will unhide the message display element
// --- can this be one function? hide/unhide in the same function and call when the button is clicked
// --- may need an `event.preventDefault(event)` to clear the action when the button is clicked again?

// 3a) write a function that will replace the icon with an innerText
// --- target the container for the text and replace with an innerText
