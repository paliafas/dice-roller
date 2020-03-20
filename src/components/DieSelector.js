import React from 'react';
import D4 from './dice/D4';
import D6 from './dice/D6';
import D8 from './dice/D8';
import D10 from './dice/D10';
import D12 from './dice/D12';
import D20 from './dice/D20';

const dieImage = {
    4: <D4 />,
    6: <D6 />,
    8: <D8 />,
    10: <D10 />,
    12: <D12 />,
    20: <D20 />
};

const DieSelector = ({ die, addDie }) => {
    const dieSVG = React.cloneElement(dieImage[die.sides], {
        value: die.sides
    });

    return (
        <div className={'die-d' + die.sides} onClick={() => addDie(die.sides)}>
            {dieSVG}
        </div>
    );
};

export default DieSelector;
