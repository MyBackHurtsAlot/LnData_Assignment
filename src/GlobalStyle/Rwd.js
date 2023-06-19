const size = {
    desktop: "1200px",
    w900: "900px",
    tablet: "768px",
    mobile: "500px",
    smallest: "360px",
};

export const device = {
    underDesktop: `(max-width:${size.desktop})`,

    w900: `(min-width: ${size.w900})`,
    underW900: `(max-width: ${size.w900})`,

    tablet: `(min-width:${size.tablet})`,
    underTablet: `(max-width:${size.tablet})`,

    mobile: `(min-width:${size.mobile})`,
    underMobile: `(max-width:${size.mobile})`,

    smallest: `(min-width:${size.smallest})`,
    underSmallest: `(max-width:${size.smallest})`,
};
