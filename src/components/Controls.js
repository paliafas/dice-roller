import React from 'react';
import DieSelector from './DieSelector';
import RollButton from './RollButton';
import ClearButton from './ClearButton';

const Controls = ({ addDie, rollDice, clearDice }) => (
    <section id="controls">
        <div className="container">
            <div className="controls-content">
                <DieSelector die={{ sides: 4, roll: 4 }} addDie={addDie} />
                <DieSelector die={{ sides: 6, roll: 6 }} addDie={addDie} />
                <DieSelector die={{ sides: 8, roll: 8 }} addDie={addDie} />
                <DieSelector die={{ sides: 10, roll: 10 }} addDie={addDie} />
                <DieSelector die={{ sides: 12, roll: 12 }} addDie={addDie} />
                <DieSelector die={{ sides: 20, roll: 20 }} addDie={addDie} />
                <ClearButton clearDice={clearDice} />
                <RollButton rollDice={rollDice} />
            </div>
        </div>
    </section>
);

export default Controls;
