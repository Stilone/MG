import { motion } from "framer-motion";
import { VARIANTS_PAGE } from "../variants";

export const Page1 = () => {
    return (
        <motion.div
            className="Container"
            initial={"initial"}
            animate={"in"}
            exit={"out"}
            variants={VARIANTS_PAGE}
        >
            <header className={"Header"}>
                <div className={"Header-title"} />
                <div className={"Header-text"} />
            </header>
            <div className={"Content"}>
                <div className={"Content-cards"}>
                    <div className={"Card"}>
                        <div className={"Card-img"} />
                        <div className={"Card-title"} />
                        <div className={"Card-text"} />
                    </div>
                    <div className={"Card"}>
                        <div className={"Card-img"} />
                        <div className={"Card-title"} />
                        <div className={"Card-text"} />
                    </div>
                    <div className={"Card"}>
                        <div className={"Card-img"} />
                        <div className={"Card-title"} />
                        <div className={"Card-text"} />
                    </div>
                </div>
                <div className={"Content-text"}>
                    <div className={"Content-title"} />
                    <div className={"Content-description"} />
                    <div className={"Content-description"} />
                </div>
            </div>
            <footer className={"Footer"}>
                <div className={"Footer-img"} />
                <div className={"Footer-img"} />
                <div className={"Footer-img"} />
                <div className={"Footer-img"} />
                <div className={"Footer-img"} />
            </footer>
        </motion.div>
    );
};