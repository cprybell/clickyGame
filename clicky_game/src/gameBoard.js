import React from "react";
import ImageCard from './imageCard.js';
import Images from './images.json';

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

class GameBoard extends React.Component {
    state = {
        currentScore: 0,
        highScore: 0,
        correct: false
    }

    render() {
        return (
            <div className="row">
                {this.loopImages()}
            </div>
        );
    }

    loopImages() {
        return (
            Images.map((image) => (
            <ImageCard name={image.name} image={image.image}/>
            ))
        )
    }
}

export default GameBoard;