import React from 'react';
import DieDisplay from './DieDisplay';

const RollArea = ({ dice, removeDie }) => {
    const diceElements = dice.map((die, index) => (
        <DieDisplay die={die} removeDie={removeDie} key={index} id={index} />
    ));

    return (
        <section id="roll-area">
            <div className="container">
                <div className="roll-area-content">{diceElements}</div>
            </div>
        </section>
    );
};

export default RollArea;
