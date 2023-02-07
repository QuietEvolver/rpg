import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// Business Logic+

function getDino() {
  let request = new XMLHttpRequest();
  const url = `https://dinoipsum.com/api/?format=json&words=10&paragraphs=3`;

  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    let array1 = this.reponse;
    console.log(array1);
    printElements(response);
    
  });

  request.open("GET", url, true);
  request.send();
}

function printElements(fish) {
  console.log(fish);
  document.querySelector('#showResponse').innerText = fish;
}

// addNumbers(x,y) {
//   let z = x + y;
//   return z 
// }

// let text1 = "Hello world"
// let text2 = "Nice to meet you"

// let result = addNumbers(text1,text2)
// console.log(result)


// result = "Hello worldNice to meet you"
// function getWeather(city) {
//   let request = new XMLHttpRequest();
//   const url = `https://dinoipsum.com/api/?format=html&words=5&paragraphs=2`;

// //https://dinoipsum.com/api/?format=html&words=10&paragraphs=3
  
//   request.addEventListener("loadend", function() {
//     const response = JSON.parse(this.responseText);
//     if (this.status === 200) {
//       printElements(response, city);
//     } else {
//       printError(this, response, city);
//     }
//   });

//   request.open("GET", url, true);
//   request.send();
// }

// UI Logic

// function printError(request, apiResponse, city) {
//   document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${city}: ${request.status} ${request.statusText}: ${apiResponse.message}`;
// }

function handleFormSubmission(event) {
  event.preventDefault();
  // const city = document.querySelector('#location').value;
  // document.querySelector('#location').value = null;
  getDino();
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});