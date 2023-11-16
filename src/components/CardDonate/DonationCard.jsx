import { Link } from "react-router-dom";




const DonationCard = ({card}) => {
    const {id,image,title,category,description,price}=card;
    return (
        <div>
            <Link to={`./CardDonate/${id}`}>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-[312px] mb-5 rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
    <img
      src={image}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-2">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       {category}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
    
       {}
      </p>
    </div>
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
     {title}
    </p>
  </div>
  <div className="p-6 pt-0">
  
  </div>
</div>
            </Link>
      
            
        </div>
    );
};

export default DonationCard;