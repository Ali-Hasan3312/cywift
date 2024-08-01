import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { IoDownloadOutline, IoSearchOutline } from "react-icons/io5";
import { LuClock8 } from "react-icons/lu";

import Sidebar from "../pages/Sidebar";
import Navbar from "./Navbar";
const RiskManagement = () => {
  const [selectAll,setSelectAll] = useState<boolean>(false);
 
  const selectAllHandler:React.MouseEventHandler<HTMLLabelElement>  = (e)=>{
    e.preventDefault()
 setSelectAll((prev)=> !prev)
}
const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  // setSelectAll(event.target.checked);
};
 
  
  return (
    <div className=" h-[900px] w-full bg-gray-300 pt-8 pl-8 pb-4">
    
    <div className="h-[640px] flex gap-6">
        <Sidebar />
        <div>
      <Navbar />
    <div className="flex h-[525px] mt-2 gap-2">
      <div className=" h-full w-[150px] bg-white rounded-lg">
      <div className="flex items-center h-10 w-full bg-black rounded-lg cursor-pointer">
       <HiOutlineAdjustmentsVertical className=" text-white ml-2" />
       <span className=" ml-6 text-white font-[300] text-opacity-90">All Risks</span>
      </div>
      <div className="flex flex-col gap-3 mt-2 ml-3">
        <h1 className=" text-[15px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Treatment</h1>
        <span className=" text-[11px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Accepted</span>
        <span className=" text-[11px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Mitigate</span>
        <span className=" text-[11px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Avoided</span>
        <span className=" text-[11px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Transferred</span>
        <span className=" text-[11px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Needs Treatment</span>
        <div className=" border w-32 border-gray-300"></div>
      </div>
      <div className="flex flex-col gap-2 mt-2 ml-3">
        <h1 className=" text-[15px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Assessment</h1>
       
        <span className=" text-[11px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Scored</span>
        <span className=" text-[11px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Not Scored</span>
        <div className=" border w-32 border-gray-300"></div>
      </div>
      <div className="flex flex-col gap-2 mt-2 ml-3">
        <h1 className=" text-[15px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Category</h1>
        <span className=" text-[11px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Assessment</span>
        <span className=" text-[11px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Audits</span>
        <span className=" text-[11px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Acess Control</span>
        <span className=" text-[11px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Asset Management</span>
        <span className=" text-[11px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Governance</span>
        <span className=" text-[11px] font-medium cursor-pointer opa hover:text-green-500 hover:transition-all hover:duration-300">Physical Access</span>
      </div>
      </div>
      <div className=" h-full w-full flex flex-col gap-1">
      <div className="flex items-center h-10 w-full gap-2 bg-black rounded-lg">
      <div className="">
      <label className="custom-checkbox-container text-white cursor-pointer flex items-center ml-6 font-normal text-sm"
      onClick={selectAllHandler}>
    <input type="checkbox" checked={selectAll? true:false} onChange={handleCheckboxChange} />
    <span className="custom-checkbox h-4 w-4 bg-gray-600 border border-gray-400"></span>
    Select All
    </label>
      </div>
      
        <span className=" text-white cursor-pointer text-[15px] text-opacity-90 font-normal ml-10 hover:text-green-500 hover:transition-all hover:duration-300">Risk Register</span>
      
        <div className=" border border-r-[1px] ml-2 h-4 opacity-85"></div>
        <span className=" text-white cursor-pointer text-[15px] font-normal ml-4 hover:text-green-500 hover:transition-all hover:duration-300 text-opacity-90">Risk Library</span>
        <div className=" h-8 w-[545px] ml-5 flex items-center gap-2">
          <div className="border border-gray-400 h-7 bg-gray-800 rounded-md w-[450px] flex items-center gap-2 text-white  ml-8">
          <IoSearchOutline className=" text-xl ml-2"/>
          <input type="text" className=" w-full outline-none px-4 border-none bg-inherit h-4 text-[12px] font-light" placeholder="Search by Risk name or code" />
          </div>
          <div className=" text-white text-opacity-90 ml-4 cursor-pointer hover:text-green-500">
            <IoDownloadOutline />
          </div>
        </div>
      </div>
      <div className=" h-[54px] w-full bg-white rounded-lg">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer flex ml-6 mt-2 font-normal text-sm">
    <input type="checkbox" checked={selectAll? true:false} onChange={handleCheckboxChange} />
    <span className="custom-checkbox h-4 w-4 bg-gray-300 border border-gray-500 "></span>
    
    </label>
      <LuClock8 className="mt-2"/>
      <div className="flex flex-col gap-[2px] mt-2 ml-1">
      <span className=" font-semibold">Unauthorized System Access</span>
      <div className="flex gap-[6px]">
        <div className=" h-4 w-14 rounded-lg bg-teal-200 relative">
          <span className=" text-[10px] absolute left-3">CyD-1</span>
        </div>
        <div className=" h-4 w-14 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-3">CyD-2</span>
        </div>
        <div className=" h-4 w-14 rounded-lg bg-teal-200 relative">
          <span className=" text-[10px] absolute left-3">CyD-3</span>
        </div>
       
      </div>
      </div>
      </div>
    <div className="flex items-center gap-8 mr-4">
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-red-400 w-7 text-red-400">25</div>
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400">10</div>
    <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-yellow-400 w-24 text-yellow-400 mr-4">
      <div className=" h-3 w-3 rounded-full bg-yellow-400"></div>
      <span>Mitigate</span>
    </div>
    <div className=" text-green-500 mr-2 cursor-pointer">
    <FaUser />
    </div>
    </div>
    </div>

      </div>
      <div className=" h-[54px] w-full bg-white rounded-lg">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer flex ml-6 mt-2 font-normal text-sm">
    <input type="checkbox" checked={selectAll? true:false} onChange={handleCheckboxChange} />
    <span className="custom-checkbox h-4 w-4 bg-gray-300 border border-gray-500 "></span>
    
    </label>
      <LuClock8 className="mt-2"/>
      <div className="flex flex-col gap-[2px] mt-2 ml-1">
      <span className=" font-semibold">Weak Authentication</span>
      <div className="flex gap-[6px]">
        <div className=" h-4 w-14 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-3">CyD-4</span>
        </div>
        <div className=" h-4 w-14 rounded-lg bg-teal-200 relative">
          <span className=" text-[10px] absolute left-3">CyD-5</span>
        </div>
        <div className=" h-4 w-14 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-3">CyD-6</span>
        </div>
       
      </div>
      </div>
      </div>
    <div className="flex items-center gap-8 mr-4">
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400">15</div>
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500">-</div>
    <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400 mr-4">
      <div className=" h-3 w-3 rounded-full bg-red-400"></div>
      <span>Transfer</span>
    </div>
    <div className=" text-green-500 mr-2 cursor-pointer">
    <FaUser />
    </div>
    </div>
    </div>

      </div>
      <div className=" h-[54px] w-full bg-white rounded-lg">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer flex ml-6 mt-2 font-normal text-sm">
    <input type="checkbox" checked={selectAll? true:false} onChange={handleCheckboxChange} />
    <span className="custom-checkbox h-4 w-4 bg-gray-300 border border-gray-500 "></span>
    
    </label>
      <LuClock8 className="mt-2"/>
      <div className="flex flex-col gap-[2px] mt-2 ml-1">
      <span className=" font-semibold">Critical System Dependencies - DoS</span>
      <div className="flex gap-[6px]">
        <div className=" h-4 w-14 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-3">CyD-4</span>
        </div>
        <div className=" h-4 w-14 rounded-lg bg-teal-200 relative">
          <span className=" text-[10px] absolute left-3">CyD-5</span>
        </div>
        <div className=" h-4 w-14 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-3">CyD-6</span>
        </div>
       
      </div>
      </div>
      </div>
    <div className="flex items-center gap-8 mr-[70px]">
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400">15</div>
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500">-</div>
    <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400 mr-4">
      <div className=" h-3 w-3 rounded-full bg-red-400"></div>
      <span>Accept</span>
    </div>
    
    </div>
    </div>

      </div>
      <div className=" h-[54px] w-full bg-white rounded-lg">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer flex ml-6 mt-2 font-normal text-sm">
    <input type="checkbox" checked={selectAll? true:false} onChange={handleCheckboxChange} />
    <span className="custom-checkbox h-4 w-4 bg-gray-300 border border-gray-500 "></span>
    
    </label>
      <LuClock8 className="mt-2"/>
      <div className="flex flex-col gap-[2px] mt-2 ml-1">
      <span className=" font-semibold">Exposure - Zero-day Attack</span>
      <div className="flex gap-[6px]">
        <div className=" h-4 w-14 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-3">CyD-4</span>
        </div>
        <div className=" h-4 w-14 rounded-lg bg-teal-200 relative">
          <span className=" text-[10px] absolute left-3">CyD-5</span>
        </div>
        <div className=" h-4 w-14 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-3">CyD-6</span>
        </div>
       
      </div>
      </div>
      </div>
    <div className="flex items-center gap-8 mr-[70px]">
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400">15</div>
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500">-</div>
    <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400 mr-4">
      <div className=" h-3 w-3 rounded-full bg-red-400"></div>
      <span>Mitigate</span>
    </div>
    
    </div>
    </div>

      </div>
      <div className=" h-[54px] w-full bg-white rounded-lg">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer flex ml-6 mt-2 font-normal text-sm">
    <input type="checkbox" checked={selectAll? true:false} onChange={handleCheckboxChange} />
    <span className="custom-checkbox h-4 w-4 bg-gray-300 border border-gray-500 "></span>
    
    </label>
      <LuClock8 className="mt-2"/>
      <div className="flex flex-col gap-[2px] mt-2 ml-1">
      <span className=" font-semibold">Physical Security - Theft</span>
      <div className="flex gap-[6px]">
        <div className=" h-4 w-14 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-3">CyD-4</span>
        </div>
        <div className=" h-4 w-14 rounded-lg bg-teal-200 relative">
          <span className=" text-[10px] absolute left-3">CyD-5</span>
        </div>
        <div className=" h-4 w-14 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-3">CyD-6</span>
        </div>
       
      </div>
      </div>
      </div>
    <div className="flex items-center gap-8 mr-[70px]">
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400">15</div>
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500">-</div>
    <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400 mr-4">
      <div className=" h-3 w-3 rounded-full bg-red-400"></div>
      <span>Transfer</span>
    </div>
    
    </div>
    </div>

      </div>
      <div className=" h-[54px] w-full bg-white rounded-lg">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer flex ml-6 mt-2 font-normal text-sm">
    <input type="checkbox" checked={selectAll? true:false} onChange={handleCheckboxChange} />
    <span className="custom-checkbox h-4 w-4 bg-gray-300 border border-gray-500 "></span>
    
    </label>
      <LuClock8 className="mt-2"/>
      <div className="flex flex-col gap-[2px] mt-2 ml-1">
      <span className=" font-semibold">Business Continuity - Lack of Contingency</span>
      <div className="flex gap-[6px]">
        <div className=" h-4 w-14 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-3">CyD-4</span>
        </div>
        <div className=" h-4 w-14 rounded-lg bg-teal-200 relative">
          <span className=" text-[10px] absolute left-3">CyD-5</span>
        </div>
        <div className=" h-4 w-14 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-3">CyD-6</span>
        </div>
       
      </div>
      </div>
      </div>
    <div className="flex items-center gap-8 mr-[70px]">
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400">15</div>
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500">-</div>
    <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400 mr-4">
      <div className=" h-3 w-3 rounded-full bg-red-400"></div>
      <span>Mitigate</span>
    </div>
    
    </div>
    </div>

      </div>
      <div className=" h-[54px] w-full bg-white rounded-lg">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer flex ml-6 mt-2 font-normal text-sm">
    <input type="checkbox" checked={selectAll? true:false} onChange={handleCheckboxChange} />
    <span className={`custom-checkbox h-4 w-4 bg-gray-300 border border-gray-500`}></span>
    
    </label>
      <LuClock8 className="mt-2"/>
      <div className="flex flex-col gap-[2px] mt-2 ml-1">
      <span className=" font-semibold">Risky Software Supply Chain</span>
      <div className="flex gap-[6px]">
        <div className=" h-4 w-14 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-3">CyD-4</span>
        </div>
        <div className=" h-4 w-14 rounded-lg bg-teal-200 relative">
          <span className=" text-[10px] absolute left-3">CyD-5</span>
        </div>
        <div className=" h-4 w-14 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-3">CyD-6</span>
        </div>
       
      </div>
      </div>
      </div>
    <div className="flex items-center gap-8 mr-[70px]">
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400">15</div>
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500">-</div>
    <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400 mr-4">
      <div className=" h-3 w-3 rounded-full bg-red-400"></div>
      <span>Avoid</span>
    </div>
    
    </div>
    </div>

      </div>
      <div className=" h-[54px] w-full bg-white rounded-lg">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer flex ml-6 mt-2 font-normal text-sm">
    <input type="checkbox" checked={selectAll? true:false} onChange={handleCheckboxChange} />
    <span className="custom-checkbox h-4 w-4 bg-gray-300 border border-gray-500 "></span>
    
    </label>
      <LuClock8 className="mt-2"/>
      <div className="flex flex-col gap-[2px] mt-2 ml-1">
      <span className=" font-semibold">Network Management - Advance Persistence Threats</span>
      <div className="flex gap-[6px]">
        <div className=" h-4 w-14 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-3">CyD-4</span>
        </div>
        <div className=" h-4 w-14 rounded-lg bg-teal-200 relative">
          <span className=" text-[10px] absolute left-3">CyD-5</span>
        </div>
        <div className=" h-4 w-14 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-3">CyD-6</span>
        </div>
       
      </div>
      </div>
      </div>
    <div className="flex items-center gap-8 mr-[70px]">
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400">15</div>
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500">-</div>
    <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400 mr-4">
      <div className=" h-3 w-3 rounded-full bg-red-400"></div>
      <span>Mitigate</span>
    </div>
    
    </div>
    </div>

      </div>
      <div className="flex justify-between">
        <div className=" h-6 w-16 rounded-lg text-gray-400 bg-white text-[12px] text-center flex items-center justify-between">
          <span className=" ml-2">8/page</span>
        </div>
        <div className="flex gap-2">
          <div className=" h-6 w-6 rounded-md bg-white text-[8px] flex items-center justify-center cursor-pointer"><FaLessThan className=" ml-1" /><FaLessThan className=" mr-[6px]" /></div>
          <div className=" h-6 w-6 rounded-md bg-white text-[8px] flex items-center justify-center cursor-pointer"><FaLessThan /></div>
          <div className=" h-6 w-6 rounded-md text-white cursor-pointer text-[10px] flex items-center justify-center bg-gray-900">1</div>
          <div className=" h-6 w-6 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer">2</div>       
             <div className=" h-6 w-6 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer">3</div>      
                 <div className=" h-6 w-6 rounded-md bg-white text-[12px] flex items-center justify-center cursor-pointer">...</div> 
                          <div className=" h-6 w-6 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer">10</div> 
                                   <div className=" h-6 w-6 rounded-md bg-white text-[8px] flex items-center justify-center cursor-pointer"><FaGreaterThan /></div>
          <div className=" h-6 w-6 rounded-md bg-white text-[8px] flex items-center justify-center cursor-pointer"><FaGreaterThan className=" ml-1" /><FaGreaterThan className=" mr-[6px]" /></div>
        </div>
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default RiskManagement