import image1 from "../Image/DineIn.png";
import image3 from "../Image/HomeDelivery.png";
import image2 from "../Image/TakeAway.png";
import Banner from "./Banner/Banner";
import HowItWork from "./How it Work/HowItWork";
import ReadyToStart from "./Ready to start/ReadyToStart";
import WhyChoose from "./Why Choose/WhyChoose";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-[30px] font-bold text-center mt-[70px]">Choose Your Order Type</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-[30px] mt-[40px]">
                 <div>
                    <img className="h-[250px] w-[300px] mx-auto border-[2px] border-black rounded-[15px]" src={image1} alt="" />

                    <h1 className="text-[30px] font-semibold text-center mt-[20px]">Dine In</h1>
                 </div>

                 <div>
                    <img className="h-[250px] w-[300px] mx-auto border-[2px] border-black rounded-[15px]" src={image2} alt="" />

                    <h1 className="text-[30px] font-semibold text-center mt-[20px]">Take Away</h1>
                 </div>

                 <div>
                    <img className="h-[250px] w-[300px] mx-auto border-[2px] border-black rounded-[15px]" src={image3} alt="" />

                    <h1 className="text-[30px] font-semibold text-center mt-[20px]">Delivery</h1>
                 </div>
            </div>

            <WhyChoose></WhyChoose>
            <HowItWork></HowItWork>
            <ReadyToStart></ReadyToStart>
        </div>
    );
};

export default Home;