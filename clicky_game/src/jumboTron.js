import React from 'react';

function JumboTron(props) {

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Clicky Game!</h1>
                <p className="lead">Click on a picture to earn points. If you click on a picture you have already clicked on then you lose! Enjoy!</p>
            </div>
        </div>
    );
}

export default JumboTron;