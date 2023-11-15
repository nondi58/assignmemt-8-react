import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleCard from './SingleCard';

const Card = () => {
    const[cart,setCart]=useState([]);
    const {id}=useParams();
  
    const card=useLoaderData();
  
    useEffect(()=>{
        const findCard=card.find(carrd=>carrd.id===id)
        
        setCart(findCard)
    },[id,card])
   

    return (
        <div>
      <SingleCard cart={cart}></SingleCard>
        </div>
    );
};

export default Card;