import React from "react";
import './Feedback.css';

export default function Feedback( {feedback, total, positive} ) {
    return (
        <>
            <div className="feedback-line">
                <h2 className="feedback-title">Good:</h2>
                <p>{feedback.good}</p>
            </div>
            <div className="feedback-line">
                <h2 className="feedback-title">Neutral:</h2>
                <p>{feedback.neutral}</p>
            </div>
            <div className="feedback-line">
                <h2 className="feedback-title">Bad:</h2>
                <p>{feedback.bad}</p>
            </div>
            <div className="feedback-line">
                <h2 className="feedback-title">Total:</h2>
                <p>{total}</p>
            </div>
            <div className="feedback-line">
                <h2 className="feedback-title">Positive:</h2>
                <p>{positive}</p>
            </div>
        </>
    );
}
