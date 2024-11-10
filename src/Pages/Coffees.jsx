import React, {  useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../components/Card';

const Coffees = () => {
    const data =useLoaderData();
    
    
    const [coffeees, setcoffeees]=useState(data)
   


    const handlesort = sortBy=>{
        if(sortBy==='popularity')
        {
            const sorted=[...data].sort((a, b) => b.popularity-a.popularity)
            setcoffeees(sorted)
            console.log(sorted)
        }
        else if(sortBy ==='rating')
        {
            const sorted=[...data].sort((a,b)=>b.rating -a.rating)
            setcoffeees(sorted)
            console.log(sorted)
        }
    }

    return (
        <div >
            <div className=' flex  justify-between my-5 '>
                <div> 
                    <p className='text-2xl  font-bold'>sorting </p>
                </div>
                <div className='gap-2'>
                    <button onClick={()=>handlesort('popularity')} className='btn bg-yellow-500 text-black'>Sort by price</button>
                    <button onClick={()=>handlesort('rating')} className=' btn bg-yellow-500 text-black'>sort by raiting</button>
                </div>
            </div>
        <div className=' grid grid-cols-3 gap-5 '>
           {
             
                coffeees.map(coffe=><Card key={coffe.id} coffe={coffe}></Card>)
            
           }
           </div>
        </div>
    );
};

export default Coffees;