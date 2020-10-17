import React from "react";

import Choice from "./Choice"

const ChoiceEvent = ({ handleClose, show, children, gameOne, gameOneID, gameTwoID, handleClickChoice }) => {
  const showHideClassName = show ? "choiceCard display-block" : "choiceCard display-none";

  return (
    <div className={showHideClassName}>
      <section className='choiceCard-main'>
        <h2 style={{"font-family": "Arial", "width":"100%", "text-align": "center"}}>Which game would you like to save</h2>
        <div className="choiceGrid">
            <Choice id={gameOneID} otherGameID={gameTwoID} name={gameOne} down={false} handleClick={handleClickChoice} />
            <Choice id={gameOneID} otherGameID={gameTwoID} name="Unknown Game" down={true} handleClick={handleClickChoice} />
        </div>
        <div style={{"width":"100%", "display":"flex"}}>
            <button className="closeButton" onClick={handleClose}> Close </button>
        </div>
      </section>
    </div>
  );
};

export default ChoiceEvent;
