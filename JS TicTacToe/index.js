let turn = "x";
let opp_turn = turn === "x" ? "o" : "x";
let symbols = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));

board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === "x" ? "o" : "x";

  displayTurn(turn);
  checkWin();
});

function displayTurn(turn) {
  const turn_uppercase = turn.charAt(0).toUpperCase();
  document.querySelector(".turn").textContent = `${turn_uppercase} turn`;
}

function checkWin() {
  if (verWin_x() === true) {
    document.querySelector(".turn").textContent = `X WINS`;
    document.querySelector(".turn").style.color = "green";
  }
  if (horWin_x() === true) {
    document.querySelector(".turn").textContent = `X WINS`;
    document.querySelector(".turn").style.color = "green";
  }
  if (dioWin_x() === true) {
    document.querySelector(".turn").textContent = `X WINS`;
    document.querySelector(".turn").style.color = "green";
  }
  if (verWin_o() === true) {
    document.querySelector(".turn").textContent = `O WINS`;
    document.querySelector(".turn").style.color = "green";
  }
  if (horWin_o() === true) {
    document.querySelector(".turn").textContent = `O WINS`;
    document.querySelector(".turn").style.color = "green";
  }
  if (dioWin_o() === true) {
    document.querySelector(".turn").textContent = `O WINS`;
    document.querySelector(".turn").style.color = "green";
  }
  if (checkTie() === true) {
    document.querySelector(".turn").textContent = `IT's a TIE`;
    document.querySelector(".turn").style.color = "yellow";
  }
}

document.querySelector(".reset").addEventListener("click", reset);

function reset() {
  turn = "x";
  document.querySelector(".turn").textContent = "X turn";
  document.querySelector(".turn").style.color = "black";
  Array.from(document.querySelectorAll(".tile")).forEach((el) =>
    el.classList.remove("tile-x")
  );
  Array.from(document.querySelectorAll(".tile")).forEach((el) =>
    el.classList.remove("tile-o")
  );
}

const verWin_x = function () {
  let counter = 0;
  for (let x = 0; x <= 2; x++) {
    counter = 0;
    for (let i = 0; i <= 2; i++) {
      if (tiles[3 * x + i].classList.contains(`tile-x`)) {
        counter += 1;
        if (counter === 3) {
          return true;
        }
      }
    }
  }
};

const verWin_o = function () {
  let counter = 0;
  for (let x = 0; x <= 2; x++) {
    counter = 0;
    for (let i = 0; i <= 2; i++) {
      if (tiles[3 * x + i].classList.contains(`tile-o`)) {
        counter += 1;
        if (counter === 3) {
          return true;
        }
      }
    }
  }
};

const horWin_x = function () {
  let counter = 0;
  for (let x = 0; x <= 2; x++) {
    counter = 0;
    for (let i = 0; i <= 2; i++) {
      if (tiles[x + 3 * i].classList.contains(`tile-x`)) {
        counter += 1;
        if (counter === 3) {
          return true;
        }
      }
    }
  }
};

const horWin_o = function () {
  let counter = 0;
  for (let x = 0; x <= 2; x++) {
    counter = 0;
    for (let i = 0; i <= 2; i++) {
      if (tiles[x + 3 * i].classList.contains(`tile-o`)) {
        counter += 1;
        if (counter === 3) {
          return true;
        }
      }
    }
  }
};

const dioWin_x = function () {
  if (
    (tiles[0].classList.contains("tile-x") &&
      tiles[4].classList.contains("tile-x") &&
      tiles[8].classList.contains("tile-x")) ||
    (tiles[2].classList.contains("tile-x") &&
      tiles[4].classList.contains("tile-x") &&
      tiles[6].classList.contains("tile-x"))
  ) {
    return true;
  }
};

const dioWin_o = function () {
  if (
    (tiles[0].classList.contains("tile-o") &&
      tiles[4].classList.contains("tile-o") &&
      tiles[8].classList.contains("tile-o")) ||
    (tiles[2].classList.contains("tile-o") &&
      tiles[4].classList.contains("tile-o") &&
      tiles[6].classList.contains("tile-o"))
  ) {
    return true;
  }
};

const checkTie = function () {
  let counter = 0;
  for (let i = 0; i < 9; i++) {
    if (
      tiles[i].classList.contains("tile-o") ||
      tiles[i].classList.contains("tile-x")
    ) {
      counter += 1;
      console.log(counter);
    }
  }
  if (counter === 9) {
    return true;
  }
};
