import image1 from "../../Image/Cooking.png"
import { GoDotFill } from "react-icons/go";

const OderDetails = () => {
    return (
        <div>
            <h1 className="text-[25px] font-bold text-black text-center">Order ID : <span> #DI5436</span></h1>
            <h1 className="text-[25px] font-bold text-black text-center">Order Type :  <span>  Dine In</span></h1>
            <h1 className="text-[25px] font-bold text-black text-center">Choosed :  <span> Table 1 Seat 6</span></h1>


            <div className="border-2 border-[#FF6440] rounded-[20px] pb-[20px] overflow-y-auto h-[300px]">
                   <h1 className="mt-[10px] flex justify-between px-[20px] font-bold">Own Style Burger 1 <span>400 BDT</span></h1>
                   <h1 className="mt-[10px] flex justify-between px-[20px] ">Sesame Bun x1 <span>80 BDT</span></h1>
                   <h1 className="mt-[10px] flex justify-between px-[20px] ">Chicken Fried Patty x1 <span>80 BDT</span></h1>
                   <h1 className="mt-[10px] flex justify-between px-[20px] ">Cheddar Cheese x1 <span>20 BDT</span></h1>
                   



                   <div className="flex gap-[10px] mt-[10px] pl-[20px] pb-[10px] border-b-2  border-dashed border-black">
                    <h1>QTY</h1>
                    <h1 className="border-2 border-[#FF6440] w-[120px] flex items-center justify-center rounded-[20px] "><span className=" w-[25%] text-center">+</span> <span className="border-l-2 border-[#FF6440] w-[50%] text-center">1</span> <span className="border-l-2 border-[#FF6440] w-[25%] text-center">-</span></h1>
                   </div>

                  <div>
                    <h1 className="mt-[20px] flex justify-between px-[20px] font-bold border-t-2 border-[#FF6440] pt-[20px]">Total <span>1200 BDT</span></h1>
                  </div>

            </div>

            <img className="w-[350px] h-[350px] mx-auto mt-[40px]" src={image1} alt="" />

           <h1 className="text-[18px] flex items-center justify-center font-semibold"><GoDotFill className="org "></GoDotFill>Cooking</h1>
            <h1 className="text-[18px] text-center font-semibold">Estimated 5 Min 29 Sec</h1>
        </div>
    );
};

export default OderDetails;