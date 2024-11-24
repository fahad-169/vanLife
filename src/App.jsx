import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function About() {
    return <h1>ABOUT Page</h1>;
}

function Home() {
    return <h1>HOME Page</h1>;
}

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
