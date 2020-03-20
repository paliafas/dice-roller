import React from 'react';

const D10 = ({ value }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
    >
        <g clip-path="url(#clip0)">
            <path d="M5.6 32V18l19.398-9L44.4 18v14l-19.402 9L5.6 32z"></path>
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
        </g>
    </svg>
);

export default D10;
