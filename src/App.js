import React from 'react';
import './styles/app.scss';
import Header from "./components/Header/Header";
import Market from "./components/Market/Market";
import NotFound from "./components/NotFound/NotFound";
import WeaponPage from "./components/WeaponPage/WeaponPage";
import {Routes, Route} from "react-router-dom";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Market/>}/>
                <Route path='/item/:id' element={<WeaponPage/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </>
    )
}

export default App;
