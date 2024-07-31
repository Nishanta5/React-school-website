// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Academics from "./components/Academics/Academics";
import Admissions from "./components/Admissions/Admissions";
import Faculty from "./components/Faculty/Faculty";
import Students from "./components/Students/Students";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <Router>
            <div>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/academics" element={<Academics />} />
                    <Route path="/admissions" element={<Admissions />} />
                    <Route path="/faculty" element={<Faculty />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

                <footer className="footer text-center">
                    <div className="container">
                        <p>
                            &copy; 2024 Springdale Public School. All Rights
                            Reserved.
                        </p>
                        <a href="/">Privacy Policy</a> |{" "}
                        <a href="/">Terms of Service</a>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
