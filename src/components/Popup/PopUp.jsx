import React, { useState } from "react";
import PopUpModal from "./PopUpModal";
import "./style.css";

const PopUp = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <div>
        <h1>Lets Finish</h1>
        <button className="button-default" onClick={handlePopup}>
          Open Popout
        </button>
      </div>
      <div>{showPopup && <PopUpModal onClose={handlePopup} />}</div>
    </div>
  );
};

export default PopUp;
