import React from 'react';

const RollTotal = ({ value }) => {
    return (
        <section id="roll-total">
            <div className="container">
                <p className="roll-total-display">{value}</p>
            </div>
        </section>
    );
};

export default RollTotal;
