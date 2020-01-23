import React from "react";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

function ResultBanner(props) {

    return (
        correctAnswer(props.correct, props.initial)
    );
}


function correctAnswer(correct, initial) {
    if (initial) {
        return (
            <h4>Click a photo to begin</h4>
        )
    }
    else if (correct) {
        return (
            <h4>You Got It Correct!</h4>
        )
    }
    else {
        return (
            <h4>You already guessed that! Try Again!</h4>
        )
    }
}

export default ResultBanner;