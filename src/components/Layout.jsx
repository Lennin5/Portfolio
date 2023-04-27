import React from "react";
import {Outlet, ScrollRestoration} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default function VerticalLayout() {

    return (
        <>
            <Header />
            <main>
                <Outlet />
                <ScrollRestoration />
            </main>
            {/* <Footer /> */}
        </>
    );
}