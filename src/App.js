import React from "react";
import Header from "./Components/Header/Header";
import './app.css';
import Hero from "./Components/Hero/Hero";
import Expert from "./Components/Expertes/Expert";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolios/Portfolio";
import People from "./Components/People/People";
import Footer from "./Components/Footer/Footer";
function App() {
    return (
        <div className="a-container">
            <Header />
            <Hero />
            <Expert />
            <Works />
            <Portfolio />
            <People />
            <Footer />
        </div >

    );
}

export default App;
