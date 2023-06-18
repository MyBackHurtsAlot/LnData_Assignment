export const radius = `
    border-radius: 15px;
`;

export const outline = `
    outline: 3px solid #404040;
`;

export const hover = `
        transition: all 0.3s cubic-bezier(0.34, -0.28, 0.7, 0.93);
    &:hover {
        transform: translateX(2px);
        transform: translateY(-2px);
        box-shadow: 5px 5px 0px 0px #a6a6a6;
    }
`;

export const border = `
    border: 3px solid #1c1c1c ;
    border-width: 2px 3px 2px 3px;
    border-radius: 90% 6% 93% 5% / 5% 94% 7% 95%;
    // transform: rotate(2deg);
`;
