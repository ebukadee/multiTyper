const container = document.getElementById("container");
const arr = [];
for (let i = 0; i < 100; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  container.appendChild(square);
  arr.push(square);
}
// return a random
function randomise(elem) {
  const rand = Math.floor(Math.random() * elem.length);
  const theDiv = elem[rand];
  highLight(theDiv);
}
function highLight(dark) {
  dark.style.background = "#24e44e";
  setTimeout(() => {
    dark.style.background = "#080808e8";
  }, 1000);
}

setInterval(() => {
  randomise(arr);
}, 1000);

// randomise(arr);

// setInterval(() => {
//   randomise(arr);
// }, 500);

// setInterval(highLight(arr), 20000);

// arr.forEach((div) => {
//   div.addEventListener("click", (e) => {
//     highLight(div);
//   });
// });

// // function to sign into our data base to read and write data

// function newFunction() {
//   //initializing the player unique id
//   let playerId;
//   let playerRef;

//   firebase
//     .auth()
//     .signInAnonymously()
//     //if the authentication fails we add and error
//     .catch((error) => {
//       //the error methods
//       error.code & error.message;
//     });

//   // checking if the user authentication occured
//   firebase.auth.onAuthStateChanged((user) => {
//     if (user) {
//       //logged in
//       //setting the player unique id
//       playerId = user.uid;
//       //setting the player ref to be added to its own node in the database

//       playerRef = firebase.database.ref(`players/${playerId}`);
//       //setting the player's default object state of the node in the database
//       playerRef.set({
//         name: "",
//         direction: "",
//         color: "",
//         x: "",
//       });
//       playerRef.onDisconnect().remove();
//     } else {
//       //you're logged out
//     }
//   });
// }
