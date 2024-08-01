import { BsFillGridFill } from "react-icons/bs";
import { CiCloud } from "react-icons/ci";
import { FaLessThan } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { LuFramer } from "react-icons/lu";
import { MdInfoOutline, MdOutlineInventory2 } from "react-icons/md";
import { PiNotepadThin } from "react-icons/pi";
import { RiBookLine, RiFileList2Fill, RiThunderstormsLine } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
const Sidebar = () => {
    return (
      <div className=" h-[638px] w-[160px] bg-black rounded-md relative">
            <img className=" h-12 w-32 mx-auto" src="https://cdn.prod.website-files.com/6565124c786d4f76eddcae02/656c4f79faeb86dd4a1a7b85_image%20476.svg" alt="" />
            <button className=" bg-green-400 h-4 w-4 rounded-full absolute top-8 shadow-md shadow-black -right-2">
                <FaLessThan  className=" h-3 w-3 font-bold"/>
            </button>
            <div className=" h-[30px] rounded-md w-[150px] mt-4 mx-auto bg-gray-300 flex cursor-pointer gap-2 items-center justify-center">
                <div></div>
                <p className=" text-[0.75rem] font-semibold">Alpha Inc.</p>
                <div className="flex flex-col gap-[2px] justify-center ml-2 items-center">
                    <div className=" w-4 border border-black"></div>
                    <div className=" w-3 border border-black"></div>
                    <div className=" w-2 border border-black"></div>
                    
                </div>
            </div>
            <div className=" border mt-4 w-[150px] mx-auto border-gray-600"></div>
            <div className=" text-gray-400 flex items-center gap-2 ml-2 mt-4 hover:text-green-400">
                <BsFillGridFill  />
                <a href="#" className=" text-sm ">Dashboard</a>
            </div>
            <div className=" text-gray-400 flex items-center gap-2 ml-2 mt-4 hover:text-green-400 cursor-pointer    ">
                <img className=" h-5 w-5" src="https://cdn.prod.website-files.com/6565124c786d4f76eddcae02/656cbb9198a3f4facf74b08b_image%20365.svg" alt="" />
                <h5 className=" text-sm flex">M<p className=" text-[0.7rem] mr-1">𝓨 </p> C<p className=" text-[0.7rem]">𝓨</p>wift</h5>
            </div>
            
            <div>
                <h5 className="text-gray-400 text-[0.7rem] ml-2 mt-4 uppercase">compliance</h5>
                <div className="flex items-center gap-2 ml-2 mt-1 cursor-pointer">
                    <RiFileList2Fill className=" text-green-400"/>
                    <span className=" text-green-400 text-sm font-normal">Controls Library</span>
                </div>
                <div className="flex items-center gap-2 ml-2 mt-1 text-gray-400 hover:text-green-400">
                    <LuFramer className=" "/>
                    <a href="#" className="  text-sm font-normal">Frameworks</a>
                </div>
                <div className="flex items-center gap-2 ml-2 mt-1 text-gray-400 hover:text-green-400">
                    <RiBookLine className=" "/>
                    <a href="#" className="  text-sm font-normal">Evidence Pool</a>
                </div>
                <div className="flex items-center gap-2 ml-2 mt-1 text-gray-400 hover:text-green-400">
                    <CiCloud className=" font-[900] text-[16px]"/>
                    <a href="#" className="  text-[12px] font-normal flex flex-nowrap">Automation Plugins</a>
                </div>
                
                
            </div>
            <div>
            <h5 className="text-gray-400 text-[0.7rem] ml-2 mt-4 uppercase">Risk </h5>
            <div className="flex items-center gap-2 ml-2 mt-1 text-gray-400 hover:text-green-400">
                    <MdInfoOutline className=" font-[900] text-[16px]"/>
                    <a href="#" className="  text-[12px] font-normal flex flex-nowrap">Risk Management</a>
                </div>
            <div className="flex items-center gap-2 ml-2 mt-1 text-gray-400 hover:text-green-400">
                    <MdOutlineInventory2 className=" font-[900] text-[16px]"/>
                    <a href="#" className="  text-[12px] font-normal flex flex-nowrap">Asset Inventory</a>
                </div>
                
            </div>
            <div>
            <h5 className="text-gray-400 text-[0.7rem] ml-2 mt-4 uppercase">Governance</h5>
            <div className="flex items-center gap-2 ml-2 mt-1 text-gray-400 hover:text-green-400">
                    <PiNotepadThin className=" font-[900] text-[16px]"/>
                    <a href="#" className="  text-[12px] font-normal flex flex-nowrap">Policy</a>
                </div>
            <div className="flex items-center gap-2 ml-2 mt-1 text-gray-400 hover:text-green-400">
                    <VscWorkspaceTrusted className=" font-[900] text-[16px]"/>
                    <a href="#" className="  text-[12px] font-normal flex flex-nowrap">Trust Center</a>
                </div>
            </div>
         
           
            <div className="text-gray-400 flex items-center ml-2 mt-28 gap-2 cursor-pointer hover:text-green-500">
                <RiThunderstormsLine />
            <h5 className="text-gray-400 text-[0.7rem] cursor-pointer hover:text-green-400">Integrations</h5>
            </div>
            <div className="text-gray-400 flex items-center ml-2 mt-3 gap-2 cursor-pointer hover:text-green-400">
            <IoSettingsOutline />
            <h5 className=" text-[0.7rem] cursor-pointer hover:text-green-400">Settings</h5>
            </div>
      </div>
    )
  }
  
  export default Sidebar