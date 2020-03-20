import React from 'react';
import { ReactComponent as DieControl } from '../img/button.svg';

const ClearButton = ({ clearDice }) => (
    <div className="btn-control" onClick={clearDice}>
        <DieControl />
        <span>Clear</span>
    </div>
);

export default ClearButton;
