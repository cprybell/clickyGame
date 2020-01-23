import React from "react";
import ResultBanner from "./resultBanner.js"
import Score from './score.js'

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

function NavBar(props) {

    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Clicky Game!</a>
            <ResultBanner
                correct={props.correct}
                initial={props.initial}
            />
            <Score
                currentScore={props.currentScore}
                highScore={props.highScore}
            />
        </nav>
    );
}

export default NavBar;
