import React from "react";

const Choice = ({ id, otherGameID, name, down, handleClick }) => {

  return (
    <div style={{"display":"flex"}}>
        <button className="card" onClick={() => handleClick(id, otherGameID, down)} style={{"margin-left":"auto", "margin-right": "auto"}}>
            <h1>{name}</h1>
        </button>
    </div>
  );
};

export default Choice;
