import React, { useState } from "react";
import { Button } from "reactstrap";
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
        <Button className="seeBtn" color="info" onClick={handlePopup}>
          See Group Info
        </Button>
      </div>
      <div>
        {showPopup && <PopUpModal group={group} onClose={handlePopup} />}
      </div>
    </div>
  );
};

export default PopUp;
