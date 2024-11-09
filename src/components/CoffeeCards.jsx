import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCards = () => {
    const {category} =useParams();
    const navigate=useNavigate();
    
    const data=useLoaderData();
    console.log(data)
    const [allcoffe,setallcoffe]=useState(data)
    useEffect(()=>{
        
          
           if(category){
            const fittterbycategory=[...data].filter(onecoffe => onecoffe.category === category)
            setallcoffe(fittterbycategory)
            console.log(fittterbycategory)
           }
           else
           {
            setallcoffe(data.slice(0,6));
           }
           
    },[category,data])
    
    return (
        <div>
        <div className=' grid grid-cols-3'>
        
            {
                allcoffe.map(coffe=><Card key={coffe.id} coffe={coffe}></Card>)
            }
        </div>
            <button className='btn bg-yellow-300 text-black' onClick={()=>navigate('/Coffees')}> veiw all</button>
        </div>
    );
};

export default CoffeeCards;