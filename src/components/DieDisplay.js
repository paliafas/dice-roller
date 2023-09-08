import React from 'react';
import Die from './Die';

const diePath = {
    4: 'M25 3.5L46.65 41H3.35L25 3.5z',
    6: 'M9 9H41V41H9z',
    8: 'M6.602 35.8V14.2l18.396-8.999 18.4 8.999v21.6l-18.4 8.999L6.602 35.8z',
    10: 'M5.6 32V18l19.398-9L44.4 18v14l-19.402 9L5.6 32z',
    12: 'M25 5l10 2.68L42.32 15 45 25l-2.68 10L35 42.32 25 45l-10-2.68L7.68 35 5 25l2.68-10L15 7.68 25 5z',
    20: 'M25 5l17.32 10v20L25 45 7.68 35V15L25 5z',
};

const DieDisplay = ({ die, removeDie, id }) => {
    const classes = 'relative cursor-pointer inline-block overflow-hidden';

    return (
        <div className={classes} onClick={() => removeDie(id)}>
            <Die path={diePath[die.sides]} sides={die.sides} value={die.roll} />
        </div>
    );
};

export default DieDisplay;
