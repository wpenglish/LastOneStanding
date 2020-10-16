import React from "react";

import Choice from "./Choice"

const ChoiceEvent = ({ handleClose, show, children, gameOne, gameOneID, gameTwoID, handleClickChoice }) => {
  const showHideClassName = show ? "choiceCard display-block" : "choiceCard display-none";

  return (
    <div className={showHideClassName}>
      <section className='choiceCard-main'>
        <h2 style={{"font-family": "Arial"}}>Which game would you like to save</h2>
        <Choice id={gameOneID} otherGameID={gameTwoID} name={gameOne} down={false} handleClick={handleClickChoice} />
        <Choice id={gameOneID} otherGameID={gameTwoID} name="Unknown Game" down={true} handleClick={handleClickChoice} />
        <button onClick={handleClose}> Close </button>
      </section>
    </div>
  );
};

export default ChoiceEvent;
