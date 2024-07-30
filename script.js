'use strict';

// Select the button
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModel = document.querySelectorAll('.show-modal');

// querySelector returns the first element that matches a specified CSS selector(s) in the document
// querySelectorAll returns a NodeList, which is similar to an array

console.log(btnsShowModel);

// Add event listener to each button
for (let i = 0; i < btnsShowModel.length; i++) {
  btnsShowModel[i].addEventListener('click', openModal);
}

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// Add event listener to close button
btnCloseModal.addEventListener('click', closeModal);
// Add event listener to overlay
overlay.addEventListener('click', closeModal);

// keyboard event -> global events
/** keyboard events
 * keydown: when a key is pressed
 * keyup: when a key is released
 * keypress: when a key is pressed and released (not used anymore)
 */

// Add event listener to escape key
document.addEventListener('keydown', function (e) {
  // e : event object has information about the event that happened.
  // key: property of the event object contains the key that was pressed
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// The event listener is added to the document object, so it listens for events on the whole page
// The event object is automatically passed to the event listener function
// The key property of the event object contains the key that was pressed
// The contains method checks if a class is present in an element
