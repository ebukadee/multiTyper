const container = document.getElementById("container");
for (let i = 0; i < 100; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  container.appendChild(square);
}

// function makeDivs() {
//   let arr = [];
//   let result = "";
//   for (let i = 0; i < 8; i++) {
//     for (let j = 0; j < 7; j++) {
//       result += "<div></div>";
//       arr.push(result);
//     }
//     return arr;
//   }
// }
// console.log(makeDivs());

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
