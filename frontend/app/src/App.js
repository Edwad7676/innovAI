import React, { Component } from 'react';
import Home from "./pages/home.js";
import Main from "./pages/main.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {

    

    render() {
        
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/main" element={<Main /> } />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
