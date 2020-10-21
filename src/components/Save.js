import React from "react";

import Choice from "./Choice"

const SaveScreen = ({ handleClose, show, children, saveLeft, handleClickChoice }) => {
  const showHideClassName = show ? "saveCard display-block" : "saveCard display-none";
  let choiceCards = []
  choiceCards = saveLeft.map(game => {
      return(<Choice name={game} handleClick={handleClickChoice}/>)
  })

  return (
    <div className={showHideClassName}>
      <section className='saveCard-main'>
        <h2 style={{"font-family": "Arial", "width":"100%", "text-align": "center"}}>Who is saving the last game killed?</h2>
          <div className="saveGrid">
            {choiceCards}
          </div>
          <div style={{"width":"100%", "display":"flex"}}>
              <button className="closeButton" onClick={handleClose}> Close </button>
          </div>
      </section>
    </div>
  );
};

export default SaveScreen;
