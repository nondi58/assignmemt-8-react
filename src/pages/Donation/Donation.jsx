import React, { useEffect, useState } from 'react';
import SingleCard from '../Card/SingleCard';

const Donation = () => {
    const [donation,setDonation]=useState([]);
    const[nofound,setNofound]=useState(false);
    const [isShow,setIsShow] = useState(false)
    useEffect(()=>{
        const fevoItems=JSON.parse(localStorage.getItem('donation'));
        if (fevoItems) {
            setDonation(fevoItems)
            
        }else{
            console.log("no data found");
        }
      
    },[])

    console.log(donation);
    return (
        <div>
           <div className="grid grid-cols-2 gap-5">
            {
                isShow ? donation.map((cart) => (
                    <SingleCard key={cart.id} cart={cart}></SingleCard>
                  )) 
                  
                  : donation.slice(0,4).map((cart) => (
                    <SingleCard key={cart.id} cart={cart}></SingleCard>
                  ))
            }
          </div>

          {donation.length > 4 && <button onClick={()=>setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto">
            {isShow ? "See less" : "See more"}
          </button>}

            
        </div>
    );
};

export default Donation;