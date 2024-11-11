import React, { useEffect, useState } from 'react';
import { getallcoffe } from '../components/Utilites';
import Card from '../components/Card';
import { useLoaderData } from 'react-router-dom';
import { data } from 'autoprefixer';

const Dashborad = () => {
    const data=useLoaderData();
    const [loactstorecoffe ,setloactorecoffe]=useState(data);
    
    useEffect(()=>
    {
    const herestorge=getallcoffe()
    setloactorecoffe(herestorge);

    },[getallcoffe])

    return (
        <div>
            <h1>dasbord her</h1>
            <div className=' grid grid-cols-3 gap-5 '>
           {
             
                loactstorecoffe.map(coffe=><Card key={coffe.id} coffe={coffe}></Card>)
            
           }
           </div>
        </div>
    );
};

export default Dashborad;