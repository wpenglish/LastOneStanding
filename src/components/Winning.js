import React from "react";

const WinScreen = ({ handleClose, show, children, name }) => {
  const showHideClassName = show ? "choiceCard display-block" : "choiceCard display-none";

  return (
    <div className={showHideClassName}>
      <section className='choiceCard-main'>
        <h1>{name}</h1>
      </section>
    </div>
  );
};

export default WinScreen;
