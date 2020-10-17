import React from "react";

import Choice from "./Choice"

const FinalVote = ({ handleClose, show, children, gameOne, gameOneID, gameTwoID, gameTwo, handleClickChoice }) => {
  const showHideClassName = show ? "choiceCard display-block" : "choiceCard display-none";

  return (
    <div className={showHideClassName}>
      <section className='choiceCard-main'>
        <h2 style={{"font-family": "Arial", "width":"100%", "text-align": "center"}}>All player vote on which game should win</h2>
          <div className="choiceGrid">
            <Choice id={gameOneID} otherGameID={gameTwoID} name={gameOne} down={false} handleClick={handleClickChoice} />
            <Choice id={gameTwoID} otherGameID={gameOneID} name={gameTwo} down={true} handleClick={handleClickChoice} />
          </div>
      </section>
    </div>
  );
};

export default FinalVote;
