export const VARIANTS_PAGE = {
    initial: {
        x: "100%",
        opacity: 0,
        transition: {
            type: "spring",
            duration: 1,
            delay: 0
        }
    },
    in: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1,
            delay: 0
        }
    },
    out: {
        x: "100%",
        opacity: 0,
        transition: {
            type: "spring",
            duration: 0.5,
            delay: 0
        }
    }
};

export const VARIANTS_CONTENT = {
    initial: {
        opacity: 1,
        height: 0,
        transition: {
            duration: 1,
            delay: 0
        }
    },
    in: {
        opacity: 1,
        height: "50vh",
        transition: {
            duration: 0.5,
            delay: 0
        }
    },
    out: {
        opacity: 0,
        height: 0,
        transition: {
            type: "spring",
            duration: 1,
            delay: 0
        }
    }
};
