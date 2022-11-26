const container = document.getElementById("container");
const boxes = document.getElementById("boxes");
const number = document.getElementById("number");
let realNum = number.innerHTML;

const emo = ["😁", "👀", "🤣", "🙏", "😘", "😢", "😒", "🤦‍♀️", "🤷‍♂️", "🥱", "😆"];
let theEm;

function randEmo(elem) {
  const rand = Math.floor(Math.random() * elem.length);
  theEm = elem[rand];
  return theEm;
}

const arr = [];
for (let i = 0; i < 16; i++) {
  const square = document.createElement("button");
  square.classList.add("square");

  boxes.appendChild(square);
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
  dark.classList.add("filled");
  setTimeout(() => {
    dark.style.background = "";
    dark.classList.remove("filled");
  }, 700);
}

setInterval(() => {
  randomise(arr);
}, 700);

arr.forEach((div) => {
  div.addEventListener("click", () => {
    randEmo(emo);

    div.innerHTML = `<h1>${theEm}</h1>`;
    if (div.classList.contains("filled")) {
      realNum++;
      number.innerHTML = realNum;
      div.style.background = "";
    }
  });
});

