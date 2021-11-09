// Your code goes here

// document.addEventListener('DOMContentLoaded', function () {
//     let textId = document.getElementById("text");
//     textId.textContent = "This is really cool!";
// })

// const form = document.querySelector("form");
// form.addEventListener("submit", submitForm);

// function submitForm(event) {
//   event.preventDefault();
//   console.log(event.target.create_item.value);
// }

// function submitForm(event) {
//     event.preventDefault();
//     console.log(event.target.create_item.value);
//   }

//   function submitForm(event) {
//     event.preventDefault();
//     console.log(event.target.create_item.value);
//   }

//   function submitForm(event) {
//     event.preventDefault();
//     console.log(form.querySelector("#create_item").value);
//   }

//   Given the following code:


//Testing quiz question number 9. 

// Given:
function logSubmit(event) {
  event.preventDefault();
  log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
}

const form = document.getElementById("form");
const log = document.getElementById("log");

// What code will listen for an event on the form and
// call the logSubmit function when the event is fired
form.addEventListener("submit", logSubmit);


//code used in the DOM Forms video

// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('form').addEventListener('submit', (event) => {
//         event.preventDefault();
//         submitLog(e.target.log);
//     })
// })