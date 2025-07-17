import { Link } from "react-router-dom";


const OtherStatus = () => {
    return (
        <div>
            <div>
                <div className=" md:overflow-y-auto h-[520px] md:overflow-x-hidden">

                    {/* Table no 1 */}
  <table className="table border-2 border-[#FF6440] ">
    {/* head */}
    <thead>
      <tr className=" border-b-2 border-[#FF6440]">
        <th className="text-[25px] text-black relative lg:left-[80px]">Order Id</th>
        <th className="text-[25px] text-black relative lg:left-[80px]">Price</th>
        <th className="text-[25px] text-black relative lg:left-[80px]">Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="border-none ">
        <td className="text-[18px] relative bottom-[15px] lg:left-[80px]">#DI5436</td>
        <td className="text-[18px] relative bottom-[15px] lg:left-[80px]">1200 BDT</td>
        <td className="text-[18px] relative lg:left-[80px]">Cooking <Link to={`/user/order-status/:${1}`}><h1 className="org underline mt-[5px]">See Details</h1></Link></td>
      </tr>
    </tbody>
  </table>


    {/* Table no 2 */}

  <table className="table border-2 border-[#FF6440] mt-[40px]">
    {/* head */}
    <thead>
      <tr className=" border-b-2 border-[#FF6440]">
        <th className="text-[25px] text-black relative lg:left-[80px]">Order Id</th>
        <th className="text-[25px] text-black relative lg:left-[80px]">Price</th>
        <th className="text-[25px] text-black relative lg:left-[80px]">Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="border-none ">
        <td className="text-[18px] relative bottom-[15px] lg:left-[80px]">#DI5436</td>
        <td className="text-[18px] relative bottom-[15px] lg:left-[80px]">1200 BDT</td>
        <td className="text-[18px] relative lg:left-[80px]">Cooking<Link to={`/user/order-status/:${2}`}><h1 className="org underline mt-[5px]">See Details</h1></Link></td>
      </tr>
    </tbody>
  </table>

  


</div>
            </div>
        </div>
    );
};

export default OtherStatus;