import { useEffect, useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { CiCloud } from "react-icons/ci";
import { HiMenuAlt4 } from 'react-icons/hi';
import { IoSettingsOutline } from "react-icons/io5";
import { LuFramer } from "react-icons/lu";
import { MdInfoOutline, MdOutlineInventory2 } from "react-icons/md";
import { PiNotepadThin } from "react-icons/pi";
import { RiBookLine, RiFileList2Fill, RiThunderstormsLine } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
const Sidebar = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [phoneActive, setPhoneActive] = useState<boolean>(
      window.innerWidth < 1200
    );
  
    const resizeHandler = () => {
      setPhoneActive(window.innerWidth < 1200);
    };
  
    useEffect(() => {
      window.addEventListener("resize", resizeHandler);
      return () => {
        window.removeEventListener("resize", resizeHandler);
      };
    }, []);
    return (
        <>

        {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)} className='grid place-items-center h-6 w-6 border-none outline-none cursor-pointer text-blue-500 bg-opacity-100  text-3xl bg-white rounded-full z-[9] -ml-7 -mt-3'>
          <HiMenuAlt4 className=" text-lg" />
        </button>
      )}
       
      <div className=" h-[638px] w-[185px] bg-black rounded-md relative -ml-8 -mt-6 overflow-hidden z-10"
      style={
        phoneActive
          ? {
              width: "12rem",
              height: "700px",
              position: "fixed",
              top: 0,
              left: showModal ? "0" : "-20rem",
              transition: "all 0.5s",
              paddingLeft: "40px"
            }
          : {}
      }>
      
            <img className=" h-12 w-32 mx-auto max-sm:h-10 max-sm:w-24 max-sm:mt-3 max-sm:pt-2" src="https://cdn.prod.website-files.com/6565124c786d4f76eddcae02/656c4f79faeb86dd4a1a7b85_image%20476.svg" alt="" />
            <div className="flex items-center">
          <select className="h-[30px] rounded-md w-[92%] mt-4 mx-auto bg-gray-300 outline-none flex cursor-pointer gap-2 items-center justify-center appearance-none relative text-center max-sm:w-[130px]">
            <option className=" text-sm font-normal max-sm:text-[10px]">Alpha Inc.</option>
            <option className=" text-sm font-normal max-sm:text-[10px]">option-1</option>
            <option className=" text-sm font-normal max-sm:text-[10px]">option-2</option>
            </select>
            <div className="flex flex-col gap-[2px] justify-center items-center absolute right-5 top-[74px] max-sm:top-[78px]">
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
                <a href="#" className=" text-sm ">My Cywift</a>
            </div>
            
            <div>
                <h5 className="text-gray-400 text-[0.7rem] ml-2 mt-4 uppercase">compliance</h5>
                <div className="flex items-center gap-2 ml-2 mt-2 cursor-pointer">
                    <RiFileList2Fill className=" text-green-400"/>
                    <span className=" text-green-400 text-sm font-normal">Controls Library</span>
                </div>
                <div className="flex items-center gap-2 ml-2 mt-2 text-gray-400 hover:text-green-400">
                    <LuFramer className=" "/>
                    <a href="#" className="  text-sm font-normal">Frameworks</a>
                </div>
                <div className="flex items-center text-sm gap-2 ml-2 mt-2 text-gray-400 hover:text-green-400">
                    <RiBookLine className=" "/>
                    <a href="#" className="   font-normal">Evidence Pool</a>
                </div>
                <div className="flex items-center gap-2 ml-2 mt-2 text-gray-400 hover:text-green-400">
                    <CiCloud className=" font-[900] text-[16px]"/>
                    <a href="#" className="text-sm font-normal flex flex-nowrap">Automation Plugins</a>
                </div>
                
                
            </div>
            <div>
            <h5 className="text-gray-400 text-[0.7rem] ml-2 mt-4 uppercase">Risk </h5>
            <div className="flex items-center gap-2 ml-2 mt-2 text-gray-400 hover:text-green-400">
                    <MdInfoOutline className=" font-[900] text-[16px]"/>
                    <a href="#" className="  text-sm font-normal flex flex-nowrap">Risk Management</a>
                </div>
            <div className="flex items-center gap-2 ml-2 mt-2 text-gray-400 hover:text-green-400">
                    <MdOutlineInventory2 className=" font-[900] text-[16px]"/>
                    <a href="#" className="  text-sm font-normal flex flex-nowrap">Asset Inventory</a>
                </div>
                
            </div>
            <div>
            <h5 className="text-gray-400 text-[0.7rem] ml-2 mt-4 uppercase">Governance</h5>
            <div className="flex items-center gap-2 ml-2 mt-2 text-gray-400 hover:text-green-400">
                    <PiNotepadThin className=" font-[900] text-[16px]"/>
                    <a href="#" className="  text-sm font-normal flex flex-nowrap">Policy</a>
                </div>
            <div className="flex items-center gap-2 ml-2 mt-2 text-gray-400 hover:text-green-400">
                    <VscWorkspaceTrusted className=" font-[900] text-[16px]"/>
                    <a href="#" className="  text-sm font-normal flex flex-nowrap">Trust Center</a>
                </div>
            </div>
         
           
                <div className=" border border-t-[1px]  mt-[62px] border-gray-500 w-[140px] mx-auto"></div>
            <div className="text-gray-400 flex items-center ml-2 mt-2  gap-2 cursor-pointer hover:text-green-500">
                <RiThunderstormsLine />
            <h5 className="text-gray-400 text-sm cursor-pointer hover:text-green-400">Integrations</h5>
            </div>
            <div className="text-gray-400 flex items-center ml-2 mt-2 gap-2 cursor-pointer hover:text-green-400">
            <IoSettingsOutline />
            <h5 className=" text-sm cursor-pointer hover:text-green-400">Settings</h5>
            </div>
            {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)} className=' w-[70%] h-7 my-4 mx-auto flex items-center justify-center p-3 border-none text-sm outline-none cursor-pointer bg-red-500 text-white rounded-lg'>
            Close
          </button>
        )}
      </div>
      </>
    )
  }
  
  export default Sidebar