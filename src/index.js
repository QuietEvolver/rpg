// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';


/////////Molly////////////
function Desk() {
  this.dinosaur = {};
  this.attemptsArray = [];
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

function printElements(fish) {
  console.log(fish);
  desk.dinosaur = fish;
  document.querySelector('#showResponse').innerText = fish;
}

function printError(error) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the dino data. Error status: ${error[0].status} ${error[0].statusText}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const letter = document.querySelector('#letter').value;
  console.log("letter ", letter);
  console.log("desk ", desk);
  desk.attemptsArray.push(letter);
  document.querySelector('#letter').value = null;



}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
  getDino();

  // onclick btn handler 
});