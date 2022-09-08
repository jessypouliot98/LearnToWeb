console.log('Hello from file')

let insertionZone = document.querySelector('#insertion-zone');

function handleButtonClick(event) {
  console.log(event.target, 'has been clicked');
}

// function handleFormSubmit(event) {
//   event.preventDefault();
//   console.log('form submitted')

//   let textInput = document.querySelector('#form input');
//   console.log('[TextInput] My input\'s value is "' + textInput.value + '"');

//   let formData = new FormData(event.target);
//   let message = formData.get('message');
//   console.log(`[FormData] My input's value is "${message}"`);

//   insertionZone.innerHTML += `<div>${message}</div>`;
// }

function calculateNumber() {
  console.log('[Running Calculate number]');

  let myNumber = 0; // Define a variable
  console.log(myNumber);

  myNumber = 3; // Assign a new value
  console.log(myNumber);

  myNumber = myNumber * 2; // Double value
  console.log(myNumber);

  myNumber -= 10; // remove 10 from current value (same as "myNumber = myNumber - 10")
  console.log(myNumber);

  myNumber += 21;
  console.log(myNumber);
  
  myNumber *= 2;
  console.log(myNumber);

  myNumber /= 2;
  console.log(myNumber);
}

let button1 = window.document.getElementById('button-1');
button1.addEventListener('click', handleButtonClick);

let button2 = window.document.getElementById('button-2');
button2.addEventListener('click', calculateNumber);

/*
 * !!! THIS IS IMPORTANT FOR YOUR HOMEWORK !!!
 */

let form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
    console.log('form submitted')
  
    let textInput = document.querySelector('#form input');
    console.log('[TextInput] My input\'s value is "' + textInput.value + '"');
  
    let formData = new FormData(event.target);
    let message = formData.get('message');
    console.log(`[FormData] My input's value is "${message}"`);
  
    insertionZone.innerHTML += `<div>${message}</div>`;
});

// window events

// window.addEventListener('scroll', () => {
//   console.log('my relative position from top of the page: ' + window.pageYOffset);
// });

// window.addEventListener('mousemove', (e) => {
//   const position = {
//     x: e.pageX,
//     y: e.pageY,
//   };
//   console.log(position);
// });

// Different ways of writting a function

function myNamedFunction () {
  console.log('myNamedFunction', this);
}

let myAnnonymousFunction = function () {
  console.log('myAnnonymousFunction', this);
}

let myArrowFunction = () => {
  console.log('myArrowFunction', this);
}