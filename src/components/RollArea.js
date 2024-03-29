import React from 'react';
import DieDisplay from './DieDisplay';

const RollArea = ({ dice, removeDie }) => {
    const diceElements = dice.map((die, index) => (
        <DieDisplay die={die} removeDie={removeDie} key={index} id={index} />
    ));

    return (
        <section className="bg-roll-area h-[65%] md:h-[75%] px-0 py-8">
            <div className="h-[100%] container mx-auto px-4 max-w-[960px]">
                <div className="h-[100%] grid grid-cols-[repeat(auto-fit,_minmax(20%,_0.25fr))] justify-center">
                    {diceElements}
                </div>
            </div>
        </section>
    );
};

export default RollArea;
