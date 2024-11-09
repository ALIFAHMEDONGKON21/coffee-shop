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
                            isActive ? "bg-sky-100 text-sky-600" : "hover:bg-sky-100 hover:text-sky-600"
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