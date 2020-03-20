import React from 'react';
import { ReactComponent as DieControl } from '../img/button.svg';

const RollButton = ({ rollDice }) => (
    <div className="btn-control" onClick={rollDice}>
        <DieControl />
        <span>Roll</span>
    </div>
);

export default RollButton;
