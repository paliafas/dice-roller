import React from 'react';

const RollTotal = ({ value }) => {
    return (
        <section className="h-[10%] bg-roll-total">
            <div className="h-full flex justify-center items-center">
                <p className="text-[4rem]">{value}</p>
            </div>
        </section>
    );
};

export default RollTotal;
