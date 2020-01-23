import React from "react";
import ImageCard from './imageCard.js';
import Images from './images.json';

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

function GameBoard(props) {

        return (
            <div className="row">
                {loopImages(props.imgClick)}
            </div>
        );
}

function loopImages(onClick) {
    let tempArr = arrayShuffle(Images);
    return (
        tempArr.map((image) => (
        <ImageCard id={"image" + image.id} name={image.name} image={image.image} handleImageClick={onClick} key={image.id}/>
        ))
    )
}

function arrayShuffle(arr) {
    let currentIndex = arr.length;
    let tempValue;
    let randInd;

    while (0 !== currentIndex) {
  
      randInd = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      tempValue = arr[currentIndex];
      arr[currentIndex] = arr[randInd];
      arr[randInd] = tempValue;
    }
  
    return arr;
  }

export default GameBoard;