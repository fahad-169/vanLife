import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//code.tidio.co/bqs9p8vtubrs3swhah5994rxduhllvvg.js";
        script.async = true;
        document.body.appendChild(script);
      }, []);

    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            <script src="//code.tidio.co/bqs9p8vtubrs3swhah5994rxduhllvvg.js" async></script>
            </main>
            <Footer />
        </div>
    );
}
