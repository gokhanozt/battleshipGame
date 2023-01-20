const Modal = ({ gameFinished }) => {
  const handleRestart = () => {
    window.location.reload();
  };

  const closeModal = () => {
    const modal = document.getElementById("modal");

    modal.style.display = "none";
  };

  return (
    <div id="modal" className={gameFinished ? "modal block" : "modal"}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>Play Again?</h2>

        <button id="restart" onClick={handleRestart}>
          Yes
        </button>
      </div>
    </div>
  );
};

export default Modal;
