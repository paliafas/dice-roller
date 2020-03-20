import React from 'react';

const D20 = ({ value }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
    >
        <path d="M25 5l17.32 10v20L25 45 7.68 35V15L25 5z"></path>
        <text
            fill="#fff"
            style={{ whiteSpace: 'pre' }}
            fontFamily="Roboto"
            fontSize="16"
            letterSpacing="0em"
            textAnchor="middle"
            dominantBaseline="middle"
        >
            <tspan x="50%" y="50%">
                {value}
            </tspan>
        </text>
    </svg>
);

export default D20;
