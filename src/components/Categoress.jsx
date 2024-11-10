import React from 'react';
import { NavLink } from 'react-router-dom';

const Categoress = ({categores}) => {
  
    return (
        <div className="flex  items-center justify-center py-5 gap-6" aria-label="Tabs">
            {   
                
                 categores.map(category=><NavLink
                    to={`category/${category.category}`}
                    className={({ isActive }) =>
                        `shrink-0 rounded-lg p-2 text-sm font-medium ${
                            isActive ? "bg-yellow-500  text-black" : "hover:bg-yellow-500 hover:text-sky-600"
                        }`
                    }
                    aria-current="page"
                    key={category.category}
                >
                    {category.category}
                </NavLink>)
            }

        </div>
    );
};

export default Categoress;