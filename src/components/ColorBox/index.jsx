import React, { useState } from 'react';
import './ColorBox.css';
ColorBox.propTypes = {

};
function getRandomColor() {
    const colorList = ['deeppink', '#1DB9C3', '#7027A0', '#C32BAD', 'yellow'];
    let randomIndex = Math.trunc(Math.random() * 5);
    return colorList[randomIndex];
}

function ColorBox() {
    const [color, setColor] = useState('deeppink');

    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);
    }
    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
        </div>
    );
}

export default ColorBox;