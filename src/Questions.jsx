import React, { useState } from "react";

export default function Questions({ question, answere }) {
  const [showAns, setShowAns] = useState(false);
  const [ansHeight, setAnsHeight] = useState(0);

  let pHeight;

  const handleExpand = (e) => {
    setShowAns(!showAns);
    pHeight =
      e.target.parentElement.parentElement.children[1].children[0].clientHeight;
    setAnsHeight(pHeight);
  };

  return (
    <div className="card">
      <div className="question flex">
        <h3>{question}</h3>
        {showAns ? (
          <i className="fas fa-minus" onClick={handleExpand}></i>
        ) : (
          <i className="fas fa-plus" onClick={handleExpand}></i>
        )}
      </div>
      <div
        style={{ height: showAns ? `${ansHeight}px` : "0" }}
        className="answere"
      >
        <p id="p">{answere}</p>
      </div>
    </div>
  );
}
