import React from 'react';


  const Card = ({coffe}) => {
    const { name, image, category, origin, type, id, rating, popularity } =
    coffe || {}
  return (
    <div className="card bg-base-100  shadow-xl">
    <figure>
      <img
        src={image}
        alt="coffee" />
    </figure>
    <div className="card-body">
    <div className='p-4'>
          <h1 className='text-xl'>Name: {name}</h1>
          <p>Category: {category}</p>
          <p>Type: {type}</p>
          <p>Origin: {origin}</p>
          <p>Rating: {rating}</p>
          <p>Popular: {popularity}</p>
        </div>
    </div>
  </div>
    
    
  );
};

export default Card;
