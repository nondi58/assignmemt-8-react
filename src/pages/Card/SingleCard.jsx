import swal from 'sweetalert';

const SingleCard = ({ cart }) => {
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
     <div style={{  }} className="relative flex flex-col text-gray-700 bg-white shadow-md p-4 w-3/4 rounded-xl bg-clip-border">
  <div className="relative  my-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    <img className='w-full'
      src={image}
      alt=""
     
    />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {title}
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      {description}
    </p>
  </div>
  <div className="p-6 pt-0">
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

export default SingleCard;