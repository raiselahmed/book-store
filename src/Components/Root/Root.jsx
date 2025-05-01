import React from 'react';
import NavBar from '../NavBar/NavBar';
import Fotter from '../Fotter/Fotter';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Root;