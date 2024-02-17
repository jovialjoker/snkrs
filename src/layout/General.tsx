import React from 'react';
import {Outlet} from "react-router-dom";
import Header from '../components/Header';

const GeneralLayout = () => {
    return (
        <div className="flex">
            <Header />
            <Outlet />
        </div>
    )
}

export default GeneralLayout;