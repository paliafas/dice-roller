import React from 'react';

const ButtonSVG = ({ value }) => (
    <svg
        className="fill-button-control block w-full h-full transition-all duration-[0.2s] hover:scale-[1.1] active:scale-[0.9]"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="25" cy="25" r="20" />
        <text
            className="select-none whitespace-pre"
            fill="white"
            fontFamily="Roboto"
            fontSize="10"
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

export default ButtonSVG;
