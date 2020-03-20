import React from 'react';
import { ReactComponent as RollButtonSVG } from '../img/roll-button.svg';

const RollButton = ({ rollDice }) => (
    <div className="btn-control roll-button" onClick={rollDice}>
        <RollButtonSVG />
    </div>
);

export default RollButton;
