import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

const storeState = () => {
  let currentState = {}; 
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

const changeStateNum = (prop) => {
  return (value) => {
    return (state) => ({
      ...state, 
      [prop]: (state[prop] || 0) + value 
    });
  };
};

const changeStateStr = (prop) => {
  return (value) => {
    return (state) => ({
      ...state, 
      [prop]: (state[prop] || "") + value 
    });
  };
};

window.onload = function () {

  const stateControl = storeState();

  const faceCard = changeState("face-card")(10);
  const singleCard = changeState("single-card")(1);
  
  document.getElementById("create-character").onsubmit = function (event) {
    event.preventDefault();
    let characterName = document.getElementById("character-name").value;
    const character = stateControl(changeStateStr("name")(characterName));
    document.getElementById(
      "name"
    ).innerText = `Character Name: ${character.name}`;
  };

  // set up click events when buttons are rpg:single(1)/face(10) are clicked
  
  document.getElementById("face-card").onclick = function(){
      const newState = stateControl(faceCard);
      document.getElementById("total-value").innerText = ` are equal to: ${newState.faceCard}`;
    }; // TODO: call and pass to setState
  document.getElementById("single-card").onclick = function(){
      const newState = stateControl(singleCard);
      document.getElementById("total-value").innerText = ` are equal to: ${newState.singleCard}`;
    };

};

// const storeState = (initialState) => { //
//   let currentState = {initialState}; // {};
//   return (stateChangeFunction = (state) => state) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = { ...newState };
//     return newState;
//   };
// };

// const changeState = (prop) => {
//   return (value) => {
//     return (state) => (
//       {
//         ...state,
//         [prop]: (state[prop] || 0) + value,
//       });
//   };
// };

// const plant0 = storeState({ soil: 0, water: 0, light: 0 });
// // const plant0 =("soil")(14) {...storeState(changeState("soil")(14) )}; //stateChangeFunction

// const feed = changeState("soil")(1);
// const blueFood = changeState("soil")(5);

// const hydrate = changeState("water")(1);
// const superWater = changeState("water")(5);

// const sunshine = changeState("light")(111);
// const plantLamp = changeState("light")(5);

// console.log(
//   "feed, blueFood, hydrate, superWater, sunshine, plantLamp",
//   feed,
//   blueFood,
//   hydrate,
//   superWater,
//   sunshine,
//   plantLamp
// );

// window.onload = function () {

//   // const stateControl = storeState(); // fx storeState(currentState = {}; );
//   const stateControl = storeState({}); // (a.k.a. storeState(initialState); // arr[1,2,x];

//   const multPlants = [];

//   document.getElementById("feed").onclick = function () {
//     const newState = stateControl(blueFood);
//     document.getElementById("soil-value").innerText = `Soil: ${newState.soil}`;
//   };

//   document.getElementById("feedPlant0").onclick = function () {
//     const plant0Feed = plant0(blueFood);
//     console.log("Plant Zero:", plant0Feed);
//     document.getElementById(
//       "soil1-value"
//     ).innerText = `Soil Plant Zero: ${plant0Feed.soil}`;
//   };

//   document.getElementById("show-state").onclick = function () {
//     const currentState = stateControl();
//     document.getElementById(
//       "soil-value"
//     ).innerText = `Soil: ${currentState.soil}`;
//     multPlants.push(currentState);
//     console.log(multPlants);
//   };

// document.getElementById("show-state").onclick = function () {
//   const currentState = stateControl(); // { ...stateControl("soil")(4)};// plant0(); // plant0Feed();
//   document.getElementById(
//     "soil1-value"
//   ).innerText = `Soil: ${currentState.soil}`;
// };

// // document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;

// document.getElementById("soil-value").innerText = `Soil: ${blueFood.soil}`;
// document.getElementById("show-state").onclick = function () {
//   const currentState = stateControl();
//   document.getElementById(
//     "soil-value"
//   ).innerText = `Soil:  ${currentState.soil}`; // ${blueFood.soil}`, `currentSt:
// };
// };
