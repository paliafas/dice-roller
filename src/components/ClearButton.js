import React from 'react';
import { ReactComponent as ClearButtonSVG } from '../img/clear-button.svg';

const ClearButton = ({ clearDice }) => (
    <div className="btn-control clear-button" onClick={clearDice}>
        <ClearButtonSVG />
    </div>
);

export default ClearButton;
