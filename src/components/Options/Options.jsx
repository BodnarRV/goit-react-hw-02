import React from "react";
import './Options.css';

export default function Options({ updateFeedback, showResetBrn }) {
  return (
    <div className="options-container">
      <button className="options-brn" onClick={() => updateFeedback('good')}>Good</button>
      <button className="options-brn" onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button className="options-brn" onClick={() => updateFeedback('bad')}>Bad</button>
      {showResetBrn &&
        <button className="options-brn" onClick={() => updateFeedback('reset')}>Reset</button>
      }
    </div>
  );
}
