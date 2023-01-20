import React, { useState } from "react";

import GameBorard from "./GameBoard";
import Form from "./Form";
import Rules from "./Rules";
import MoveList from "./MoveList";
import Modal from "./Modal";
import "./App.css";

const boardSize = 10;
const shipNumber = 3;
const ships = [
  { name: "Battleship", locations: [], hits: [], shipLength: 5 },
  { name: "Destroyer", locations: [], hits: [], shipLength: 4 },
  { name: "Destroyer", locations: [], hits: [], shipLength: 4 },
];

let shipsSunk = 0;
let guesses = 0;
let isEmpty = [];

const reCreateShips = () => {
  console.log("it's a ship crash!");
  for (let i = 0; i < ships.length; i++) {
    ships[i].locations = [];
  }

  isEmpty = [];
  createShips();
};

const createShips = () => {
  for (let i = 0; i < ships.length; i++) {
    const shipPosition = ["horizontal", "vertical"];
    let generatedShipPosition = Math.floor(Math.random() * shipPosition.length);

    if (generatedShipPosition === 1) {
      const col = Math.floor(Math.random() * boardSize);
      const row = Math.floor(Math.random() * (boardSize - ships[i].shipLength));

      for (let j = 0; j < ships[i].shipLength; j++) {
        if (ships[i].locations.length !== ships[i].shipLength) {
          ships[i].locations[j] = String(row + j) + String(col);
          isEmpty.push(String(row + j) + String(col));
          if (i === 1) {
            if (
              ships[i - 1].locations.some((item) =>
                ships[i].locations.includes(item)
              )
            ) {
              reCreateShips();
            }
          } else if (i === 2) {
            if (
              ships[i - 1].locations.some((item) =>
                ships[i].locations.includes(item)
              ) ||
              ships[i - 2].locations.some((item) =>
                ships[i].locations.includes(item)
              )
            ) {
              reCreateShips();
            }
          }
        }
      }
    } else {
      const row = Math.floor(Math.random() * boardSize);
      const col = Math.floor(Math.random() * (boardSize - ships[i].shipLength));

      for (let j = 0; j < ships[i].shipLength; j++) {
        if (ships[i].locations.length !== ships[i].shipLength) {
          ships[i].locations[j] = String(row) + String(col + j);
          isEmpty.push(String(row) + String(col + j));
          if (i === 1) {
            if (
              ships[i - 1].locations.some((item) =>
                ships[i].locations.includes(item)
              )
            ) {
              reCreateShips();
            }
          } else if (i === 2) {
            if (
              ships[i - 1].locations.some((item) =>
                ships[i].locations.includes(item)
              ) ||
              ships[i - 2].locations.some((item) =>
                ships[i].locations.includes(item)
              )
            ) {
              reCreateShips();
            }
          }
        }
      }
    }
  }
};
createShips();

console.log(isEmpty);
console.log(ships);

const App = () => {
  const [movesList, setMovesList] = useState([]);
  const [guess, setGuess] = useState("");
  const [gameFinished, setGameFinished] = useState(false);

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const displayMessage = (msg) => {
    const displayBox = document.getElementById("displayBox");
    displayBox.innerHTML = msg;
  };
  const displayHit = (location) => {
    const cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  };

  const displayMiss = (location) => {
    const cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  };

  const addMoveList = () => {
    const moveList = document.getElementById("moveList");

    setMovesList([...movesList, guess]);
    moveList.scrollTop = moveList.scrollHeight;
    setGuess("");
  };

  const addMoveListFromTable = (move) => {
    const moveList = document.getElementById("moveList");

    setMovesList([...movesList, move]);
    moveList.scrollTop = moveList.scrollHeight;
  };
  const isValidGuess = (guess) => {
    return /^[0-9]+$/.test(guess);
  };
  const fire = (guess) => {
    for (let i = 0; i < shipNumber; i++) {
      let ship = ships[i];
      let index = ship.locations.indexOf(guess);

      if (index >= 0) {
        if (ship.hits[index] === "hit") {
          displayMessage("You already hit here!");
        } else {
          displayMessage("HIT");
          ship.hits[index] = "hit";
          displayHit(guess);
          if (isSunk(ship)) {
            displayMessage("You sank a " + ship.name + "! 🔥");
            shipsSunk++;
          }
        }

        return true;
      }
    }

    if (isValidGuess(guess)) {
      if (!document.getElementById(guess).classList.contains("miss")) {
        displayMiss(guess);
        displayMessage("You missed.");
      } else {
        displayMessage("You already missed here before!");
      }
    } else {
      displayMessage("Please enter a valid guess.");
    }
    return false;
  };

  const isSunk = (ship) => {
    for (let i = 0; i < ship.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  };

  const parseGuess = (guess) => {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    let firstChar = [];
    if (guess.length === 2) {
      firstChar = guess.charAt(0).toUpperCase();
      let column = alphabet.indexOf(firstChar);
      let row = guess.charAt(1);
      return row + column;
    }
    displayMessage("Please enter a valid guess.");
  };

  const processGuess = (guess) => {
    let location = parseGuess(guess);
    if (location) {
      guesses++;
      let hit = fire(location);
      if (hit && shipsSunk === shipNumber) {
        displayMessage("🎉 You sank all ships, in " + guesses + " guesses. 🎉");
        setGameFinished(true);
      }
    }
  };

  const handleTableClicked = (clickedLocation) => {
    const guessInput = document.getElementById("guessInput");
    guessInput.value = clickedLocation;
    let guess = guessInput.value;
    processGuess(guess);
    guessInput.value = "";
    addMoveListFromTable(guess);
  };

  return (
    <div className="App">
      <h1>🚢 Battleship Game 🚢</h1>
      <div className="game-container">
        <div id="board">
          <div id="displayBox">-</div>
          <div className="container">
            <GameBorard handleClick={handleTableClicked} />
            <Rules />
            <MoveList movesList={movesList} />
          </div>
          <Form
            guess={guess}
            handleChange={handleChange}
            processGuess={processGuess}
            addMoveList={addMoveList}
          />
        </div>
      </div>
      {gameFinished ? <Modal props={gameFinished} /> : null}
    </div>
  );
};

export default App;
