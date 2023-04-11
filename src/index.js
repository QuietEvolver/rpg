import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
/*
class Desk {
  constructor() {
    this.dinosaur = "";
    this.attemptsArray = [];
    this.lengthOfDinoStr = "";
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
        desk.dinosaur = response;
        // let dinosaurStr = desk.dinosaur[0]
        // desk.lengthOfDinoStr = Array(parseInt(dinosaurStr.value.length)).fill(null);
        // let dinoSplitT = desk.dinosaur;
        // let dinoSplit = dinoSplitT.split();
        // console.log("dinoSplit ", dinoSplit);
        // let dinoArr = Array.from(dinoSplit);// .split();
        // console.log("dinoArr ", dinoArr);
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
  let str = desk.dinosaur;
  const letters = str.split('');
  console.log("letter: ", letters[2]);
}

function dinoAndText(text) {
  document.querySelector('#dinoandtext').innerText = text;
}
// function dinoTextArray(text) {
//   document.querySelector('#dinotextarray').innerText = text
// }

function printError(error) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the dino data. Error status: ${error[0].status} ${error[0].statusText}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const letter = document.querySelector('#letter').value;

  // const dinoSplit = split(dino);
  
  desk.attemptsArray.push(letter);
  let array = desk.attemptsArray;
  document.querySelector('#letter').value = null;
  console.log(desk.dinosaur);
  console.log(desk);
  dinoAndText(array);
  // dinoTextArray(dinoSplit);

  // const information = desk.attemptsArray
  // const dinosaur = desk.dinosaur

  // document.querySelector('#dinoandtext').value = letter;
}
*/

/*
at the end of handleformsubmission, it will inject the dinosaur and the letter array into the html
*/

//BUISNESS LOGIC
// This function stores our state.
const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

const stateControl = storeState();

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

const plant1 = storeState({ soil: 0, water: 0, light: 0 });

const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);

const sunshine = changeState("light")(111);
const plantLamp = changeState("light")(5);

//UI LOGIC

function handleFormSubmission(event) {
  event.preventDefault();

  console.log(
    "feed, blueFood, hydrate, superWater, sunshine, plantLamp",
    feed,
    blueFood,
    hydrate,
    superWater,
    sunshine,
    plantLamp
  );
  window.onload = function () {
    document.getElementById("feed").onclick = function () {
      const newState = stateControl(blueFood);
      document.getElementById(
        "soil-value"
      ).innerText = `Soil: ${newState.soil}`;
    };

    document.getElementById("feedPlant1").onclick = function () {
      const plant1Feed = plant1(blueFood);
      document.getElementById("soil-value").innerText = `Soil: ${plant1.soil}`;
      console.log("plant1, plant1Feed", plant1, plant1Feed);
    };

    document.getElementById("show-state").onclick = function () {
      const currentState = stateControl();
      document.getElementById(
        "soil-value"
      ).innerText = `Soil: ${currentState.soil}`;
    };
  };
}
/////////
window.addEventListener("load", function () {
  document
    .querySelector("form")
    .addEventListener("submit", handleFormSubmission);
  stateControl();
});
