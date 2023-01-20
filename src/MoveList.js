const MoveList = ({ movesList }) => {
  return (
    <div className="moves">
      <h2>Your Moves</h2>

      {movesList ? (
        <ul id="moveList">
          {movesList.map((move, i) => {
            return (
              <li key={i} className="move">
                {move}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default MoveList;
