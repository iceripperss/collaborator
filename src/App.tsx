import React from 'react';
import "./style.css";
import Header from "./components/Header";
import List from "./components/List";
import Filters from "./components/Filters";

const App = () => {
    return (
        <>
            <Header/>
            <Filters/>
            <List/>
        </>
    );
}

export default App;
