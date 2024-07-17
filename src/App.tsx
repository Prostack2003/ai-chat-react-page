import React from 'react';
import './App.css';
import NavBar from "./pages/nav-bar/NavBar";
import { Outlet } from "react-router-dom";

function App() {
    // it is time to dev!
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}

export default App;
