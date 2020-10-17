import React from "react";

const WinScreen = ({ handleClose, show, children, name }) => {
  const showHideClassName = show ? "choiceCard display-block" : "choiceCard display-none";

  return (
    <div className={showHideClassName}>
      <section className='choiceCard-main'>
        <h2 style={{"font-family": "Arial", "width":"100%", "text-align": "center"}}>The winner is</h2>
        <h1 style={{"font-family": "Arial", "width":"100%", "text-align": "center", "font-size": "40px"}}>{name}</h1>
      </section>
    </div>
  );
};

export default WinScreen;
