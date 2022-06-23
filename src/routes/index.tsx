import { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Detail from "@pages/Detail";

const MainRoutes:FC<{}> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Navigate to="/detail" /> } />
                <Route path="/detail" element={ <Detail /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default MainRoutes;