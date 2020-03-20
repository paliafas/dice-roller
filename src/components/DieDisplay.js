import React from 'react';
import { ReactComponent as D4 } from '../img/d4.svg';
import { ReactComponent as D6 } from '../img/d6.svg';
import { ReactComponent as D8 } from '../img/d8.svg';
import { ReactComponent as D10 } from '../img/d10.svg';
import { ReactComponent as D12 } from '../img/d12.svg';
import { ReactComponent as D20 } from '../img/d20.svg';

const dieImage = {
    4: <D4 />,
    6: <D6 />,
    8: <D8 />,
    10: <D10 />,
    12: <D12 />,
    20: <D20 />
};

const DieDisplay = ({ die, removeDie, id }) => (
    <div className={'die-d' + die.sides} onClick={() => removeDie(id)}>
        {dieImage[die.sides]}
        <span>{die.roll}</span>
    </div>
);

export default DieDisplay;
