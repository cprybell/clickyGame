import React from "react";
import ResultBanner from "./resultBanner.js"
import Score from './score.js'

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

class NavBar extends React.Component {
    state = {
        currentScore: 0,
        highScore: 0,
        correct: false
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand">Clicky Game!</a>
                <ResultBanner
                    correct = {this.state.correct}
                />
                <Score
                    currentScore = {this.state.currentScore}
                    highScore = {this.state.highScore}
                />
            </nav>
        );
    }
}

export default NavBar;
