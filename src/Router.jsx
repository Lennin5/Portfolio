import React from "react";
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";

import Layout from "./components/Layout";
import HomeRoute from "./pages/home/HomeRoute";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<HomeRoute />} />
        </Route>
    )
);

export default router;