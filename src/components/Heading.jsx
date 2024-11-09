import React from 'react';

const Heading = ({title,subtitle}) => { 
    return (
        <div className=' text-center mt-5 '>
            <p className='text-4xl font-bold'>{title}</p>
            <p>{subtitle}</p>
        </div>
    );
};

export default Heading;