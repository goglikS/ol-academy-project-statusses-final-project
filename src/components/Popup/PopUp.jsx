import React, { useState } from "react";
import PopUpModal from "./PopUpModal";
import "./style.css";

const PopUp = ({ group }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <div>
        <button className="button-default" onClick={handlePopup}>
          Open Popout
        </button>
      </div>
      <div>
        {showPopup && <PopUpModal group={group} onClose={handlePopup} />}
      </div>
    </div>
  );
};

export default PopUp;
