import React from "react";

const Form = ({ handleChange, guess, addMoveList, processGuess }) => {
  const handleFireButton = (e) => {
    e.preventDefault();

    const guessInput = document.getElementById("guessInput");
    let guess = guessInput.value;
    processGuess(guess);
    addMoveList(guess);
    guessInput.value = "";
  };

  return (
    <form>
      <input
        type="text"
        id="guessInput"
        placeholder="Enter a value like 'A0'"
        onChange={handleChange}
        value={guess}
      />

      <button
        id="fireButton"
        value="Fire"
        onClick={handleFireButton}
        type="submit"
      >
        Fire
      </button>
    </form>
  );
};

export default Form;
