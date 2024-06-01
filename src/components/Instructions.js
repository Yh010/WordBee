import React from 'react';
import './Instructions.css';
import { IoIosRefresh } from "react-icons/io";

const Instructions = () => {
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
        <div className="instruction-item">
            <IoIosRefresh />
            <span> Refresh to play again</span>
      </div>
    </div>
  );
};

export default Instructions;
