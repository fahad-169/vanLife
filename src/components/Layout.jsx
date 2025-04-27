import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {

    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        document.body.appendChild(script);
      }, []);

    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
