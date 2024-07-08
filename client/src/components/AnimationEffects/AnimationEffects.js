export const modalAnimation = {
    '@keyframes fadeInScale': {
        '0%': { opacity: 0, transform: 'scale(0.9)' },
        '100%': { opacity: 1, transform: 'scale(1)' },
    },
    '@keyframes fadeInSlideInTop': {
        '0%': { opacity: 0, transform: 'translateY(-30px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
    },
    animation: 'fadeInSlideInTop 0.5s ease-in-out',
};

export const fadeInScale = {
    '@keyframes fadeInScale': {
        '0%': { opacity: 0, transform: 'scale(0.9)' },
        '100%': { opacity: 1, transform: 'scale(1)' },
    },

    animation: 'fadeInScale 0.5s ease-in-out',
};
