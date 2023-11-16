import React from 'react';
import swal from 'sweetalert';

const AnotherSingle = ({ cart }) => {
    console.log(cart);
    

        const { id, image, title, category, description, price } = cart;

        const handelFavorites = () => {
      
          const addDonationCardArray = []
          const fevoItems = JSON.parse(localStorage.getItem('donation'));
          if (!fevoItems) {
            addDonationCardArray.push(cart)
            localStorage.setItem('donation', JSON.stringify(addDonationCardArray))
            swal("Good job!", "You clicked the button!", "success");
          } else {
            // eslint-disable-next-line react/prop-types
            const isExits = fevoItems.find(cart => cart.id === id);
            if (!isExits) {
              addDonationCardArray.push(...fevoItems, cart);
              localStorage.setItem('donation', JSON.stringify(addDonationCardArray));
              swal("Good job!", "You clicked the button!", "success");
      
            } else {
              swal("Oops!", "Something went wrong, dont duplicate!", "error");
            }
      
          }
        }
        return (
          <div className='px-8 justify-center items-center '>
          <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img
      src={image}
      alt="image"
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
      {category}
    </h6>
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {title}
    </h4>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      {price}
    </p>
    <a className="inline-block" href="#">
        <button onClick={handelFavorites}
                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                   View Details
                    
                  </button>
                </a> 
  </div>
</div>


        
       </div>
    );
};

export default AnotherSingle;