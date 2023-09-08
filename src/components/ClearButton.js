import React from 'react';
import ButtonSVG from './ButtonSVG';

const ClearButton = ({ clearDice }) => (
    <div
        className="relative cursor-pointer inline-block overflow-hidden"
        onClick={clearDice}
    >
        <ButtonSVG value="Clear" />
    </div>
);

export default ClearButton;
