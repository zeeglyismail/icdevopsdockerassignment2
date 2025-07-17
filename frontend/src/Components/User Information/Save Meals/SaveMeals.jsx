import { FaBookmark } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

const SaveMeals = () => {
    return (
        <div className=" shadow-[0_0_15px_rgba(0,0,0,0.5)] pb-[30px] rounded-[5px] w-[95%] md:w-full mx-auto">
            <h1 className="text-[25px] pl-[20px] bgorg py-[5px] flex items-center gap-[10px] rounded-t-[5px] text-white"><FaBookmark></FaBookmark>Saved Meals</h1>


          {/* Main div */}
            <div className="grid md:grid-cols-1 lg:grid-cols-2  gap-[30px] mt-[30px] px-[20px]">

                 {/* Sub div */}
                <div className="  mx-auto md:w-[400px] lg:w-[450px] px-[10px] py-[10px] shadow-[0_0_15px_rgba(0,0,0,0.5)] rounded-[5px]">
                    <div className="flex items-center justify-between ">
                        <h1 className=" org text-[20px] font-semibold">Test </h1>

                        <div className="flex ">
                            <TiShoppingCart className="text-[25px] org border-2 border-r-0 border-[#FF6440] p-[3px] rounded-l-[3px]"></TiShoppingCart>
                            <MdDelete className="text-[25px] org border-2 border-[#FF6440] p-[3px] rounded-r-[3px]"></MdDelete>
                        </div> 
                    </div>
                  
                  <h1 className="text-[20px] font-bold ">Base : <span className="org font-normal">Burger</span></h1>
                  <h1 className="text-[20px] font-bold ">Ingredient : <span className="org font-normal">{"Sesame Bun (48) , Sesame Bun (17)"}</span></h1>
                  <h1 className="text-[17px] mt-[10px]"><span className="org font-normal">Saved july 08 , 2025</span></h1>
                    
                </div>
            
                {/* Sub div */}
                <div className="  mx-auto md:w-[400px] lg:w-[450px] px-[10px] py-[10px] shadow-[0_0_15px_rgba(0,0,0,0.5)] rounded-[5px]">
                    <div className="flex items-center justify-between ">
                        <h1 className=" org text-[20px] font-semibold">Test </h1>

                        <div className="flex ">
                            <TiShoppingCart className="text-[25px] org border-2 border-r-0 border-[#FF6440] p-[3px] rounded-l-[3px]"></TiShoppingCart>
                            <MdDelete className="text-[25px] org border-2 border-[#FF6440] p-[3px] rounded-r-[3px]"></MdDelete>
                        </div> 
                    </div>
                  
                  <h1 className="text-[20px] font-bold ">Base : <span className="org font-normal">Burger</span></h1>
                  <h1 className="text-[20px] font-bold ">Ingredient : <span className="org font-normal">{"Sesame Bun (48) , Sesame Bun (17)"}</span></h1>
                  <h1 className="text-[17px] mt-[10px]"><span className="org font-normal">Saved july 08 , 2025</span></h1>
                    
                </div>

                 {/* Sub div */}
                <div className="  mx-auto md:w-[400px] lg:w-[450px] px-[10px] py-[10px] shadow-[0_0_15px_rgba(0,0,0,0.5)] rounded-[5px]">
                    <div className="flex items-center justify-between ">
                        <h1 className=" org text-[20px] font-semibold">Test </h1>

                        <div className="flex ">
                            <TiShoppingCart className="text-[25px] org border-2 border-r-0 border-[#FF6440] p-[3px] rounded-l-[3px]"></TiShoppingCart>
                            <MdDelete className="text-[25px] org border-2 border-[#FF6440] p-[3px] rounded-r-[3px]"></MdDelete>
                        </div> 
                    </div>
                  
                  <h1 className="text-[20px] font-bold ">Base : <span className="org font-normal">Burger</span></h1>
                  <h1 className="text-[20px] font-bold ">Ingredient : <span className="org font-normal">{"Sesame Bun (48) , Sesame Bun (17)"}</span></h1>
                  <h1 className="text-[17px] mt-[10px]"><span className="org font-normal">Saved july 08 , 2025</span></h1>
                    
                </div>



            </div>
        </div>
    );
};

export default SaveMeals;