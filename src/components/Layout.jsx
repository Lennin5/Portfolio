import React from "react";
import {Outlet, ScrollRestoration} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
// import HeaderMobile from "./HeaderMobile";

import { useMediaLg } from "../hooks/useMediaQuery";

export default function VerticalLayout() {
    const [isOpen, setIsOpen] = React.useState(false);
    const isLg = useMediaLg();

    return (
        <>
            <Header />
            {/* {!isLg && <HeaderMobile isOpen={isOpen} 
            setIsOpen={setIsOpen} />} */}
            <main>
                <Outlet />
                <ScrollRestoration />
            </main>
            <Footer />
        </>
    );
}