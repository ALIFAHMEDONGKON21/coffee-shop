import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';

import { Outlet, useLoaderData } from 'react-router-dom';
import Categoress from '../components/Categoress';

const Home = () => {
    const categores=useLoaderData();
    return (
        <div>
            
             
            <Banner></Banner>
            <Heading title={'Browse Coffees by category '} subtitle={'choose your desried coffe category to browse through specific coffee your taste'} />

            <Categoress categores={categores}></Categoress>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;