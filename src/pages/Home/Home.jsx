import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import CardDonate from "../../components/cardDonate/cardDonate";


const Home = () => {
    const Cards=useLoaderData()
   
    return (
        <div>
           <Banner></Banner>
           <CardDonate Cards={Cards}></CardDonate>
        
            
        </div>
    );
};

export default Home;