import React from 'react';

const Card = ({coffe}) => {
    const {name}=coffe;
    return (
        <div className='grid grid-cols-3'>
            <h1>{name}</h1>
            
        </div>
    );
};

export default Card;