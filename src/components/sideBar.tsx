import React from 'react';
import { Link } from "react-router-dom";

export const SideBar = () => {
    const parsedUrl = new URL(window.location.href);
    const urlArrey = parsedUrl.pathname.split("/")[1];

    return (
        <div className={"SideBar"}>
            <div className={"Logo"} />
            <Link
                className={urlArrey === "page-1" ? "ButtonActive" : "Button"}
                to="page-1"
            />
            <Link
                className={urlArrey === "page-2" ? "ButtonActive" : "Button"}
                to="page-2"
            />
            <div className={"Button"} />
            <div className={"Button"} />
            <div className={"Button"} />
        </div>
    );
};