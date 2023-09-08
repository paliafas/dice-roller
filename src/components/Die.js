import React from 'react';

const Die = ({ path, sides, value }) => {
    const colorVariants = {
        4: 'fill-d4',
        6: 'fill-d6',
        8: 'fill-d8',
        10: 'fill-d10',
        12: 'fill-d12',
        20: 'fill-d20',
    };

    return (
        <svg
            className={
                colorVariants[sides] +
                ' block w-full h-full transition-all duration-[0.2s] hover:scale-[1.1] active:scale-[0.9]'
            }
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
        >
            <path d={path}></path>
            <text
                className="select-none whitespace-pre"
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
};

export default Die;
