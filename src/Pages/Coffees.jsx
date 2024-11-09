import React from 'react';
import { useParams } from 'react-router-dom';

const Coffees = () => {
    const obj=useParams();
    console.log(obj)
    return (
        <div className=' '>
            <h1>Coffees here</h1>
        </div>
    );
};

export default Coffees;