import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

class Desk {
  constructor() {
  this.dinosaur = {};
  this.attemptsArray = [];
}
}

let desk = new Desk();





class DinoRandom {  
  static getDino() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://dinoipsum.com/api/?format=json&words=1&paragraphs=1`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        console.log(response);
        if (this.status === 200) {
          resolve([response]);
        } else {
          reject([this, response]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}

function getDino() {
  let promise = DinoRandom.getDino();
  promise.then(function(dinoRandomArray) {
    printElements(dinoRandomArray);
  }, function(errorArray) {
    printError(errorArray);
  });
}

function printElements(desk) {
  document.querySelector('#showResponse').innerText =  desk; 
}
function dinoAndText(text) {
  document.querySelector('#dinoandtext').innerText = text
}

function printError(error) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the dino data. Error status: ${error[0].status} ${error[0].statusText}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const letter = document.querySelector('#letter').value;

  desk.attemptsArray.push(letter);
  let array = desk.attemptsArray
  document.querySelector('#letter').value = null;
  console.log(desk.dinosaur);
  console.log(desk);
  dinoAndText(array);

  // const information = desk.attemptsArray
  // const dinosaur = desk.dinosaur

  // document.querySelector('#dinoandtext').value = letter;
}

/*
at the end of handleformsubmission, it will inject the dinosaur and the letter array into the html
*/

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
  getDino();

  // onclick btn handler 
});