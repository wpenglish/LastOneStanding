import React from "react";

const Choice = ({ id, otherGameID, name, down, handleClick }) => {

  return (
    <div className="choice">
        <button onClick={() => handleClick(id, otherGameID, down)}>{name}</button>
    </div>
  );
};

export default Choice;
