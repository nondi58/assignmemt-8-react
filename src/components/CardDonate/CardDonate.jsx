import DonationCard from "./donationCard";

const cardDonate = ({Cards}) => {
   
    return (
        <div>
            <h1 className='text-3xl items-center text-center justify-center font-bold'>All catagories card</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  py-5 my-5">
                {
                    Cards?.map((card)=><DonationCard key={card.id}card={card}></DonationCard>)
                }
            </div>
        </div>

    );
};

export default cardDonate;