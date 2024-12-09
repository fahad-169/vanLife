import React from "react";
import { Outlet } from "react-router-dom";

export default function () {
    return (
        <>
            <h1>Dashboard Here</h1>
            <Outlet />
        </>
    );
}
