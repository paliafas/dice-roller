import React from 'react';

const D12 = ({ value }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
    >
        <path d="M25 5l10 2.68L42.32 15 45 25l-2.68 10L35 42.32 25 45l-10-2.68L7.68 35 5 25l2.68-10L15 7.68 25 5z"></path>
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

export default D12;
