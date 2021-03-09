import React from "react";

export default function Questions({ question, answere }) {
  const handleExpand = () => {
    console.log("alsja");
  };

  return (
    <div className="card">
      <div className="question flex">
        <h3>{question}</h3>
        <i class="fas fa-plus" onClick={handleExpand}></i>
      </div>
      <div className="answere">
        <p>{answere}</p>
      </div>
    </div>
  );
}
