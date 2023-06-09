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
      [prop]: (state[prop] || 0) + value,
    });
  };
};

const changeStateStr = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || "") + value,
    });
  };
};

const resetState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: value,
    });
  };
};

window.onload = function () {
  
  const stateControl = storeState();

  stateControl(changeStateNum("faceCard")(0)); // QUES: HOW before "faceCard") is defined?
  stateControl(changeStateNum("singleCard")(0));

  // when entering in name into States(), they must be the js variable name;
  const faceCard = changeStateNum("faceCard")(10);
  const singleCard = changeStateNum("singleCard")(1);

  const multCharacters = [];

  console.log("");

  document.getElementById("create-character").onsubmit = function (event) {
    event.preventDefault();
    let characterName = document.getElementById("character-name").value;
    const character = stateControl(changeStateStr("name")(characterName));
    document.getElementById(
      "name"
    ).innerText = `Character Name: ${character.name}`;
    document.getElementById("create-character").reset(); // look up reset()
  };

  // set up click events when buttons are rpg:single(1)/face(10) are clicked

  document.getElementById("face-card").onclick = function () {
    const newState = stateControl(faceCard);
    document.getElementById(
      "total-face-value"
    ).innerText = ` are equal to: ${newState.faceCard}`;
    document.getElementById("total-overall-value").innerText = newState.faceCard + newState.singleCard;
  }; // TODO: call and pass to setState
  
  document.getElementById("single-card").onclick = function () {
    const newState = stateControl(singleCard);
    document.getElementById(
      "total-single-value"
    ).innerText = ` are equal to: ${newState.singleCard}`;
    document.getElementById("total-overall-value").innerText = newState.faceCard + newState.singleCard;
  };

  // multi-char[]
  document.getElementById("store-character").onclick = function() {
    const currentState = stateControl();
    multCharacters.push(currentState);
    console.log(multCharacters);

    const name = currentState.name;
    console.log(name);
    const newNameButton = document.createElement("button");
    newNameButton.append(name);
    newNameButton.setAttribute("id", name);
    document.getElementById("new-name-button").append(newNameButton);
    
    stateControl(resetState("faceCard")(0));
    stateControl(resetState("singleCard")(0));
    stateControl(resetState("name")(""));
    document.getElementById("total-face-value").innerText = 0;
    document.getElementById("total-single-value").innerText = 0;
    document.getElementById("total-overall-value").innerText = 0;

    // TODO: Add/setSt multi chars to DOM. [done] using multCharacters[]
    // const element = multCharacters[this.index];
    
    // multCharacters.forEach(function(item) {
    //   const name = item.name;
    //   console.log(name);
    //   const newNameButton = document.createElement("button");
    //   newNameButton.append(name);
    //   newNameButton.setAttribute("id", name);
    //   document.getElementById("new-name-button").append(newNameButton);
    // });
    // 
    // for ( const [ index, element ] of multCharacters.entries()) {
    //   console.log("Line i, e: ", index, element); // .parentNode.removeChild()
    //   const name = element.name;
    //   console.log(name);
    //   const newNameButton = document.createElement("button");
    //   newNameButton.append(name);
    //   newNameButton.setAttribute("id", name);
    //   document.getElementById("new-name-button").append(newNameButton);
    // } 
    ////////////////
    // newNameButton.innerText = multCharacters[0].name;//[{prop.name}];// Constructore based :( this.prop.name; // ??
    // newNameButton.addEventListener("click", () => {
    //   //create new name elem
    //   const message = document.createElement("new-name-button");
    //   message.innerText = "Hello!";
    //   document.body.appendChild(message);
    // });
    // document.body.appendChild(newNameButton);¸

    // function listContacts(addressBookToDisplay) {
    //   let contactsDiv = document.querySelector("div#contacts");
    //   contactsDiv.innerText =  null;
    //   const ul = document.createElement("ul");
    //   Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
    //     const contact = addressBookToDisplay.findContact(key);
    //     const li = document.createElement("li");
    //     li.append(contact.fullName());
    //     li.setAttribute("id", contact.id);
    //     ul.append(li);
    //   });
    //   contactsDiv.append(ul);
    // }


    // multCharacters = [ 
    //   {name: "Joe", singleCard: 2, faceCard: 10}, 
    //   {name: "Ann", singleCard: 5, faceCard: 30}
    // ];

    // multCharcters[1]

    // TODO: How to print chars to page 
    // switch state 
    // between characters
    // so we can game;
    // TODO: buttons Bstrap
    // btns w obj w stats
    // if > 21 lose
    // if < == 21 wins; any and all winners welcome
    // future exp (1 winner) whoever uses more turn to get to 21 wins game
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

// const resetState = (prop) => {
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
