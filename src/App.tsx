import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Page1 } from "./page/Page-1";
import { Page2 } from "./page/Page-2";
import { SideBar } from "./components/sideBar";

import "./main.css";

export const App = () => {
    const location = useLocation();
    const locationArr = location.pathname?.split("/") ?? [];

    return (
        <AnimatePresence exitBeforeEnter>
            <div className="App">
                <SideBar />
                <div className={"Main"}>
                    <AnimatePresence exitBeforeEnter>
                        <Routes location={location} key={locationArr[1]}>
                            <Route path="/*" element={<Page1 />} />
                            <Route
                                path="page-2"
                                element={
                                    <Page2 />
                                }
                            />
                        </Routes>
                    </AnimatePresence>
                </div>
            </div>
        </AnimatePresence>
    );
};