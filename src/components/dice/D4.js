import React from 'react';

const D4 = ({ value }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
    >
        <g clip-path="url(#clip0)">
            <path d="M25 3.5L46.65 41H3.35L25 3.5z"></path>
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

export default D4;
