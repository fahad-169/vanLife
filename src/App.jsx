import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";

function App() {
    return (
        <BrowserRouter>
            <header>
                <Link className="site-logo" to="/">
                    #VanLife
                </Link>
                <nav>
                    <Link to="/about">About</Link>
                    <Link to="/vans">Vans</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<Vans />} />
                {/* the colon makes the next word act as a key for the
                 KVP it will generate using the value in the link */}
                <Route path="/vans/:id" element={<VanDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
