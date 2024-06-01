import React from 'react';
import './Instructions.css';
import { IoIosRefresh } from "react-icons/io";

const Instructions = () => {
   const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div className="instructions">
      <div className="instruction-item">
        <div className="square grey"></div>
        <span>Letter not present in the solution</span>
      </div>
      <div className="instruction-item">
        <div className="square yellow"></div>
        <span>Letter is present, but is in the wrong place</span>
      </div>
      <div className="instruction-item">
        <div className="square green"></div>
        <span>Letter is correctly placed</span>
          </div>
        <div className="instruction-item" onClick={handleRefresh}>
            <IoIosRefresh />
        <span>
          <button>Refresh to play again
        </button></span>
      </div>
    </div>
  );
};

export default Instructions;
