import React from "react";
import "./Css/bootstrap.rtl.min.css";
import "./Css/App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { AppProvider } from "./Hooks/Context";
import CocktailDetails from "./Pages/CocktailDetails";
import About from "./Pages/About";

function App() {
    return (
        <AppProvider>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route
                        path="cocktail-details"
                        element={<CocktailDetails />}
                    >
                        <Route
                            path=":cocktailId"
                            element={<CocktailDetails />}
                        />
                    </Route>
                </Routes>
            </div>
        </AppProvider>
    );
}

export default App;
