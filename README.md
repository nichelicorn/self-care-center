# Self Care Center
## Overview
How can I care for myself? One way is with affirmations and mantras!
Affirmations are thoughts of positive self-empowerment, meant to assert your self-worth.
Mantras are repetive phrases that are repeated again and again during mindfulness practices. Your challenge is to build an app that helps users remind themselves of their inherent value!

This Solo Challenge gives students and instructors the opportunity to get a pulse on where you are with the foundational concepts of Module 1 curriculum. Students should use this as an opportunity to challenge themselves and work completely independently. Google can (and probably should!) be used, but any other code base should not be referenced. Instructors will be able to use your work, both completion of functionality and code quality, to determine where you stand and if you are behind for this point in the module, provide supports to intervene.

The spec for this project can be found [here](https://frontend.turing.io/projects/module-1/self-care-center.html).

## Learning Goals

- Gain experience building an application that utilizes HTML, CSS and JavaScript
- Write HTML and CSS to match a provided comp
- Understand how to listen to and respond to user events
- Individualize your programming skill set

## Setup

- Fork this project to your own Github account
- Clone the repository to your local machine
- `cd` into the project
- Read this README thoroughly, then begin working!


# LESSONS LEARNED

- ISSUE: was having challenges getting the icon to hide on the button click; the function hidIcon was working correctly when invoked in the terminal, but in use, when the button was clicked, the icon would only be hidden for a split second; i ran a few console.logs to see if i could figure out what was happening with the click, but the log would also disappear with the icon; i reviewed my querySelectors to make sure they were selecting correctly, and those were all working as expected; next step? SOLUTION: look at the HTML elements? this is where my problem was! I had attempted to use a <form> input to hold the buttons, and the page was expecting some kind of input; need to review <form> elements in depth before attempting to use; switched the <form> to a <section> and all is working as expected!
- TL,DR: MAKE SURE TO USE THE CORRECT HTML ELEMENTS IN YOUR DESIGN!

- ✨ISSUE: heart button does not display a pink heart when clicked; the classList is being added (verified in the console)✨

- ISSUE: cards are overflowing their container; SOLUTION: removed height on the .gallery, but now it just expands with the number of cards
- ✨LOOK INTO INFINITE SCROLLING?✨
