import React from "react";
import { motion } from "framer-motion";
import { VARIANTS_PAGE } from "../variants";

export const Page2 = () => {
    return (
        <motion.div
            className="Container"
            initial={"initial"}
            animate={"in"}
            exit={"out"}
            variants={VARIANTS_PAGE}
        >
            <header className={"Header"}>
                <div className={"Header-heading"} />
                <div className={"Header-description"} />
            </header>
        </motion.div>
    );
};
