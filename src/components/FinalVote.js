import React from "react";

import Choice from "./Choice"

const FinalVote = ({ handleClose, show, children, gameOne, gameOneID, gameTwoID, gameTwo, handleClickChoice }) => {
  const showHideClassName = show ? "choiceCard display-block" : "choiceCard display-none";

  return (
    <div className={showHideClassName}>
      <section className='choiceCard-main'>
        <Choice id={gameOneID} otherGameID={gameTwoID} name={gameOne} down={false} handleClick={handleClickChoice} />
        <Choice id={gameTwoID} otherGameID={gameOneID} name={gameTwo} down={true} handleClick={handleClickChoice} />
      </section>
    </div>
  );
};

export default FinalVote;
