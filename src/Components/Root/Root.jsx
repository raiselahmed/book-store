import React from 'react';
import NavBar from '../NavBar/NavBar';
import Fotter from '../Fotter/Fotter';
import { Outlet, useNavigation } from 'react-router';
import Loader from '../Loader/Loader';

const Root = () => {
    const navigation = useNavigation();

    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar></NavBar>
           {
            navigation.state === 'loading' ?
            <Loader></Loader>:
            <Outlet></Outlet>
           }
            <Fotter></Fotter>
        </div>
    );
};

export default Root;