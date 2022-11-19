import React, { useEffect, useRef } from "react";
import "./style.css";

const PopUpModal = ({ onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClick = ({ target }) => {
      if (popupRef.current !== null) {
        if (!popupRef.current.contains(target)) {
          onClose();
        }
      }
    };
    document.addEventListener("click", handleClick);
    return function cleanUp() {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <>
      <div className="popup-overlay" />
      <div className="popup-wrapper">
        <div className="popup" ref={popupRef}>
          <div className="popup-header">
            <button
              type="button"
              className="popup-close-button"
              data-dismiss="popup"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <p id="popoutId">Hello, Here is your Popout.</p>
        </div>
      </div>
    </>
  );
};

export default PopUpModal;
