import React from 'react';
import ButtonSVG from './ButtonSVG';

const RollButton = ({ rollDice }) => (
    <div
        className="relative cursor-pointer inline-block overflow-hidden"
        onClick={rollDice}
    >
        <ButtonSVG value="Roll" />
    </div>
);

export default RollButton;
