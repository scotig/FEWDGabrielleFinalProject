console.log("JS Loaded!");
let boxOne = document.getElementById("one");
let boxTwo = document.getElementById("two");
let boxThree = document.getElementById("three");
let boxFour = document.getElementById("four");
let boxFive = document.getElementById("five");
let boxSix = document.getElementById("six");
let boxSeven = document.getElementById("seven");
let boxEight = document.getElementById("eight");
let boxNine = document.getElementById("nine");

// let turn = ["x", "o", "x", "o", "x", "o", "x", "o", "x"];
function xo() {
  if (x === 1) {
    x = 0;
    return "x";
  } else {
    x = 1;
    return "o";
  }
}
let x = 1;
// xo();
// xo();
boxOne.addEventListener("click", function() {
  boxOne.innerHTML = xo();
  winnerCheck();
});
boxTwo.addEventListener("click", function() {
  boxTwo.innerHTML = xo();
  winnerCheck();
});
boxThree.addEventListener("click", function() {
  boxThree.innerHTML = xo();
  winnerCheck();
});
boxFour.addEventListener("click", function() {
  boxFour.innerHTML = xo();
  winnerCheck();
});
boxFive.addEventListener("click", function() {
  boxFive.innerHTML = xo();
  winnerCheck();
});
boxSix.addEventListener("click", function() {
  boxSix.innerHTML = xo();
  winnerCheck();
});
boxSeven.addEventListener("click", function() {
  boxSeven.innerHTML = xo();
  winnerCheck();
});
boxEight.addEventListener("click", function() {
  boxEight.innerHTML = xo();
  winnerCheck();
});
boxNine.addEventListener("click", function() {
  boxNine.innerHTML = xo();
  winnerCheck();
});

function winnerCheck() {
  if (
    boxOne.innerHTML === boxTwo.innerHTML &&
    boxTwo.innerHTML === boxThree.innerHTML
  ) {
    console.log("winner1");
  }
}
function winnerCheck() {
  if (
    boxFour.innerHTML === boxFive.innerHTML &&
    boxFive.innerHTML === boxSix.innerHTML
  ) {
    console.log("winner2");
  }
}
function winnerCheck() {
  if (
    boxSeven.innerHTML === boxEight.innerHTML &&
    boxEight.innerHTML === boxNine.innerHTML
  ) {
    console.log("winner3");
  }
}
function winnerCheck() {
  if (
    boxOne.innerHTML === boxFour.innerHTML &&
    boxFour.innerHTML === boxSeven.innerHTML
  ) {
    console.log("winner4");
  }
}
function winnerCheck() {
  if (
    boxTwo.innerHTML === boxFive.innerHTML &&
    boxFive.innerHTML === boxEight.innerHTML
  ) {
    console.log("winner5");
  }
}
function winnerCheck() {
  if (
    boxThree.innerHTML === boxSix.innerHTML &&
    boxSix.innerHTML === boxNine.innerHTML
  ) {
    console.log("winner6");
  }
}
function winnerCheck() {
  if (
    boxOne.innerHTML === boxFive.innerHTML &&
    boxFive.innerHTML === boxNine.innerHTML
  ) {
    console.log("winner7");
  }
}
function winnerCheck() {
  if (
    boxThree.innerHTML === boxFive.innerHTML &&
    boxFive.innerHTML === boxSeven.innerHTML
  ) {
    console.log("winner8");
  }
}
const reset = document.getElementById("reset");
reset.addEventListener("click", function() {
  boxOne.innerHTML = "";
  boxTwo.innerHTML = "";
  boxThree.innerHTML = "";
  boxFour.innerHTML = "";
  boxFive.innerHTML = "";
  boxSix.innerHTML = "";
  boxSeven.innerHTML = "";
  boxEight.innerHTML = "";
  boxNine.innerHTML = "";
  console.log("anything I want to");
});
