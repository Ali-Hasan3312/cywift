import { useCallback, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { IoIosArrowDropdown, IoIosArrowDropright } from "react-icons/io";
import { IoDownloadOutline, IoSearchOutline } from "react-icons/io5";
import Sidebar from "../pages/Sidebar";
import DropDowns from "./DropDowns";
import Navbar from "./Navbar";
type CheckboxName = 'selectAll' | 'box1' | 'box2' | 'box3' | 'box4' | 'box5' | 'box6' | 'box7' | 'box8';
const boxNames = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8'] as const;type CheckboxState = {
  [key in CheckboxName]: boolean;
};
type BoxName = typeof boxNames[number];
type DropOpenState = {
  [key in BoxName]: boolean;
};
const RiskManagement = () => {
  const [dropOpenState, setDropOpenState] = useState<DropOpenState>(
    boxNames.reduce((acc, boxName) => ({ ...acc, [boxName]: false }), {} as DropOpenState)
  );
  const handleDropToggle = useCallback((boxName: BoxName) => {
    setDropOpenState(prev => ({
      ...prev,
      [boxName]: !prev[boxName]
    }));
  }, []);
  const [checkboxes, setCheckboxes] = useState({
    selectAll: false,
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
    box6: false,
    box7: false,
    box8: false,
  });

  
 
  const handleSelectAll = useCallback(() => {
    setCheckboxes(prev => {
      const newSelectAllState = !prev.selectAll;
      return Object.keys(prev).reduce((acc, key) => {
        acc[key as CheckboxName] = newSelectAllState;
        return acc;
      },{} as CheckboxState);
    });
  }, []);
  const handleSingleCheck = useCallback((boxName: keyof typeof checkboxes) => {
    setCheckboxes(prev => {
      const newState = { ...prev, [boxName]: !prev[boxName] };
      const allChecked = Object.entries(newState)
        .filter(([key]) => key !== 'selectAll')
        .every(([, value]) => value);
      return { ...newState, selectAll: allChecked };
    });
  }, []);
  
  return (
    <div className=" h-screen bg-gray-300 pt-8 pl-8 pb-4 flex gap-10 overflow-y-auto">
    <Sidebar />
        <div className=" -ml-7">
      <Navbar />
    <div className="flex h-[525px] mt-2 gap-2">
      <div className=" h-[93vh] w-[150px] bg-white rounded-lg">
      <div className="flex items-center h-[42px] w-full bg-black rounded-lg cursor-pointer">
       <HiOutlineAdjustmentsVertical className=" text-white ml-2" />
       <span className=" ml-10 text-white font-[300] text-[16px] text-opacity-90">All Risks</span>
      </div>
      <div className="flex flex-col gap-3 mt-2 ml-3">
        <h1 className=" text-[17px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Treatment</h1>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Accepted</span>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Mitigate</span>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Avoided</span>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Transferred</span>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Needs Treatment</span>
        <div className=" border w-32 border-gray-300 mr-2"></div>
      </div>
      <div className="flex flex-col gap-2 mt-2 ml-3">
        <h1 className=" text-[17px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Assessment</h1>
       
        <span className=" text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Scored</span>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Not Scored</span>
        <div className=" border w-32 border-gray-300 mr-2"></div>
      </div>
      <div className="flex flex-col gap-2 mt-2 ml-3">
        <h1 className=" text-[17px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Category</h1>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Assessment</span>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Audits</span>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Acess Control</span>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Asset Management</span>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">Governance</span>
        <span className=" text-[13px] font-medium cursor-pointer opa hover:text-green-500 hover:transition-all hover:duration-300">Physical Access</span>
      </div>
      </div>
      <div className=" h-screen w-full flex flex-col gap-1 overflow-auto">
      <div className="flex items-center h-10 py-[22px] w-full gap-2 bg-black rounded-lg">
      <div className="">
      <label className="custom-checkbox-container text-white cursor-pointer flex items-center ml-10 font-normal text-sm"
      >
    <input type="checkbox" onChange={handleSelectAll} name="selectAll" />
    <span className="custom-checkbox h-4 w-4 bg-gray-600 border border-gray-400"></span>
    Select All
    </label>
      </div>
        <span className=" text-white cursor-pointer text-[17px] text-opacity-90 font-normal ml-10 hover:text-green-400 hover:transition-all hover:duration-300">Risk Register</span>
        <div className=" border border-r-[1px] ml-2 h-4 opacity-85"></div>
        <span className=" text-white cursor-pointer text-[17px] font-normal ml-4 hover:text-green-400 hover:transition-all hover:duration-300 text-opacity-90">Risk Library</span>
        <div className=" h-8 w-[545px] ml-5 flex items-center gap-2">
          <div className="border border-gray-400 h-7 bg-gray-800 rounded-md w-[450px] flex items-center gap-2 text-white  ml-8">
          <IoSearchOutline className=" text-xl ml-2"/>
          <input type="text" className=" w-full outline-none px-4 border-none bg-inherit h-4 text-[12px] font-light" placeholder="Search by Risk name or code" />
          </div>
          <div className=" text-white text-opacity-90 ml-4 cursor-pointer hover:text-green-400">
          <IoDownloadOutline />
          </div>
        </div>
    
      </div>
      <div className="register-container-1 h-auto w-full bg-white rounded-lg mt-1 pb-2">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer flex ml-10 mt-2 font-normal text-sm">
    <input type="checkbox" checked={checkboxes["box1"]} onChange={()=>handleSingleCheck("box1")} />
    <span className="custom-checkbox h-4 w-4 bg-gray-300 border border-gray-500 "></span>
    
    </label>
    {dropOpenState["box1"] ? (
                    <div className=" flex items-center gap-5">

                    <IoIosArrowDropdown 
                      className="mt-2 text-xl cursor-pointer" 
                      onClick={() => handleDropToggle("box1")}
                      />
                      
                      </div>
                  ) : (
                    <IoIosArrowDropright 
                      className="mt-2 text-xl cursor-pointer" 
                      onClick={() => handleDropToggle("box1")}
                    />
                  )}
      
      <div className="flex flex-col gap-[4px] mt-3 ml-1">
      <span className=" font-semibold pb-1">Unauthorized System Access</span>
      <div className="flex gap-[6px]">
        <div className=" h-5 w-16 rounded-lg bg-teal-200 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-1</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-2</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-teal-200 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-3</span>
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
    <div className={``}>
     {dropOpenState["box1"] ? (
        <DropDowns controlInfo={{RiskTitle:"Unauthorized System Access", RiskCategory: "Access Control", ControlDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", RiskCode: "RM-001", Vulnerability: "Weak Authentication", Threat: "Espionage"}}
        RiskSummery={{PredictedRisk:15, Probability:30, InheritedRisk:50}} ProbabilityAssessment={{Probability:40}}
        RiskTreatment={{Treatment:"",RiskOwner:"Eleanor Roosevelt",RiskReviewer:"Jane Austen",ControlMapping:"",OwnerId:"CyID-128",RiskId:"CyID-129",OwnerValue:25,ReviewerValue:35}}
        />
      ) : (<></>)}
   </div>
    </div>
      <div className="register-container-2 h-auto w-full bg-white rounded-lg mt-1 pb-2">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer flex ml-10 mt-2 font-normal text-sm">
    <input type="checkbox" checked={checkboxes["box2"]} onChange={()=>handleSingleCheck("box2")} />
    <span className="custom-checkbox h-4 w-4 bg-gray-300 border border-gray-500 "></span>
    
    </label>
    {dropOpenState["box2"] ? (
                    <IoIosArrowDropdown 
                      className="mt-2 text-xl cursor-pointer" 
                      onClick={() => handleDropToggle("box2")}
                    />
                  ) : (
                    <IoIosArrowDropright 
                      className="mt-2 text-xl cursor-pointer" 
                      onClick={() => handleDropToggle("box2")}
                    />
                  )}
      
      <div className="flex flex-col gap-[4px] mt-3 ml-1">
      <span className=" font-semibold pb-1">Weak Authentication</span>
      <div className="flex gap-[6px]">
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-4</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-teal-200 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-5</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-10</span>
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
    <div className={``}>
     {dropOpenState["box2"] ? (
        <DropDowns controlInfo={{RiskTitle:"Weak Authentication", RiskCategory: "Access Control", ControlDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", RiskCode: "RM-001", Vulnerability: "Weak Authentication", Threat: "Espionage"}}
        RiskSummery={{PredictedRisk:20, Probability:35, InheritedRisk:55}} ProbabilityAssessment={{Probability:45}}
        RiskTreatment={{Treatment:"", RiskOwner:"Leonardo da Vinci", RiskReviewer:"Marie Curie", ControlMapping:"", OwnerId:"CyID-130", RiskId:"CyID-131", OwnerValue:30, ReviewerValue:40}}
        />
      ) : (<></>)}
   </div>
    </div>
      <div className=" register-container h-auto w-full bg-white rounded-lg mt-1 pb-2">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer flex ml-10 mt-2 font-normal text-sm">
    <input type="checkbox" checked={checkboxes["box3"]} onChange={()=>handleSingleCheck("box3")} />
    <span className="custom-checkbox h-4 w-4 bg-gray-300 border border-gray-500 "></span>
    
    </label>
    {dropOpenState["box3"] ? (
                    <IoIosArrowDropdown 
                      className="mt-2 text-xl cursor-pointer" 
                      onClick={() => handleDropToggle("box3")}
                    />
                  ) : (
                    <IoIosArrowDropright 
                      className="mt-2 text-xl cursor-pointer" 
                      onClick={() => handleDropToggle("box3")}
                    />
                  )}
      <div className="flex flex-col gap-[2px] mt-2 ml-1">
      <span className=" font-semibold pb-1">Critical System Dependencies - DoS</span>
      <div className="flex gap-[6px]">
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-4</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-teal-200 relative">
          <span className=" text-[10px] absolute left-3">CyD-5</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-10</span>
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
    <div className={``}>
     {dropOpenState["box3"] ? (
        <DropDowns
        controlInfo={{RiskTitle:"Critical System Dependencies - Do", RiskCategory: "Dependencies", ControlDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", RiskCode: "RM-001", Vulnerability: "Weak Authentication", Threat: "Espionage"}}
        RiskSummery={{PredictedRisk:25, Probability:40, InheritedRisk:60}} ProbabilityAssessment={{Probability:50}}
        RiskTreatment={{Treatment:"", RiskOwner:"Nelson Mandela", RiskReviewer:"Ada Lovelace", ControlMapping:"", OwnerId:"CyID-132", RiskId:"CyID-133", OwnerValue:35, ReviewerValue:45}}
        />
      ) : (<></>)}
   </div>
      </div>
      <div className=" register-container h-auto w-full bg-white rounded-lg mt-1 pb-2">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer flex ml-10 mt-2 font-normal text-sm">
    <input type="checkbox" checked={checkboxes["box4"]} onChange={()=>handleSingleCheck("box4")} />
    <span className="custom-checkbox h-4 w-4 bg-gray-300 border border-gray-500 "></span>
    
    </label>
    {dropOpenState["box4"] ? (
                    <IoIosArrowDropdown 
                      className="mt-2 text-xl cursor-pointer" 
                      onClick={() => handleDropToggle("box4")}
                    />
                  ) : (
                   
                    <IoIosArrowDropright 
                      className="mt-2 text-xl cursor-pointer" 
                      onClick={() => handleDropToggle("box4")}
                    />
                    
                  )}
      <div className="flex flex-col gap-[2px] mt-2 ml-1">
      <span className=" font-semibold pb-1">Exposure - Zero-day Attack</span>
      <div className="flex gap-[6px]">
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-4</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-teal-200 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-5</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-10</span>
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
    <div className={``}>
     {dropOpenState["box4"] ? (
        <DropDowns 
        controlInfo={{RiskTitle:"Exposure - Zero-day Attack", RiskCategory: "Exposure Attack", ControlDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", RiskCode: "RM-001", Vulnerability: "Weak Authentication", Threat: "Espionage"}}
        RiskSummery={{PredictedRisk:30, Probability:45, InheritedRisk:65}} ProbabilityAssessment={{Probability:55}}
        RiskTreatment={{Treatment:"", RiskOwner:"Rosa Parks", RiskReviewer:"Mahatma Gandhi", ControlMapping:"", OwnerId:"CyID-134", RiskId:"CyID-135", OwnerValue:40, ReviewerValue:50}}
        />
      ) : (<></>)}
   </div>

      </div>
      <div className=" register-container h-auto w-full bg-white rounded-lg mt-1 pb-2">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer flex ml-10 mt-2 font-normal text-sm">
    <input type="checkbox" checked={checkboxes["box5"]} onChange={()=>handleSingleCheck("box5")} />
    <span className="custom-checkbox h-4 w-4 bg-gray-300 border border-gray-500 "></span>
    
    </label>
    {dropOpenState["box5"] ? (
                    <IoIosArrowDropdown 
                      className="mt-2 text-xl cursor-pointer" 
                      onClick={() => handleDropToggle("box5")}
                    />
                  ) : (
                    <IoIosArrowDropright 
                      className="mt-2 text-xl cursor-pointer" 
                      onClick={() => handleDropToggle("box5")}
                    />
                  )}
      <div className="flex flex-col gap-[2px] mt-2 ml-1">
      <span className=" font-semibold pb-1">Physical Security - Theft</span>
      <div className="flex gap-[6px]">
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-4</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-teal-200 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-5</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-10</span>
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

    <div className={``}>
     {dropOpenState["box5"] ? (
        <DropDowns 
        controlInfo={{RiskTitle:"Physical Security - Theft", RiskCategory: "Privacy", ControlDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", RiskCode: "RM-001", Vulnerability: "Weak Authentication", Threat: "Espionage"}}
        RiskSummery={{PredictedRisk:35, Probability:50, InheritedRisk:70}} ProbabilityAssessment={{Probability:60}}
        RiskTreatment={{Treatment:"", RiskOwner:"Malala Yousafzai", RiskReviewer:"Abraham Lincoln", ControlMapping:"", OwnerId:"CyID-136", RiskId:"CyID-137", OwnerValue:45, ReviewerValue:55}}
        />
      ) : (<></>)}
   </div>
      </div>
      <div className=" register-container h-auto w-full bg-white rounded-lg mt-1 pb-2">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer flex ml-10 mt-2 font-normal text-sm">
    <input type="checkbox" checked={checkboxes["box6"]} onChange={()=>handleSingleCheck("box6")} />
    <span className="custom-checkbox h-4 w-4 bg-gray-300 border border-gray-500 "></span>
    
    </label>
    {dropOpenState["box6"] ? (
                    <IoIosArrowDropdown 
                      className="mt-2 text-xl cursor-pointer" 
                      onClick={() => handleDropToggle("box6")}
                    />
                  ) : (
                    <IoIosArrowDropright 
                      className="mt-2 text-xl cursor-pointer" 
                      onClick={() => handleDropToggle("box6")}
                    />
                  )}
      <div className="flex flex-col gap-[2px] mt-2 ml-1">
      <span className=" font-semibold pb-1">Business Continuity - Lack of Contingency</span>
      <div className="flex gap-[6px]">
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-4</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-teal-200 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-5</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-10</span>
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
    <div className={``}>
     {dropOpenState["box6"] ? (
        <DropDowns 
        controlInfo={{RiskTitle:"Business Continuity - Lack of Contingency", RiskCategory: "Business Continuity", ControlDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", RiskCode: "RM-001", Vulnerability: "Weak Authentication", Threat: "Espionage"}}
        RiskSummery={{PredictedRisk:40, Probability:55, InheritedRisk:75}} ProbabilityAssessment={{Probability:65}}
        RiskTreatment={{Treatment:"", RiskOwner:"Marie Curie", RiskReviewer:"Albert Einstein", ControlMapping:"", OwnerId:"CyID-138", RiskId:"CyID-139", OwnerValue:50, ReviewerValue:60}}
        />
      ) : (<></>)}
   </div>
      </div>
      <div className=" register-container h-auto w-full bg-white rounded-lg mt-1 pb-2">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer flex ml-10 mt-2 font-normal text-sm">
    <input type="checkbox" checked={checkboxes["box7"]} onChange={()=>handleSingleCheck("box7")} />
    <span className={`custom-checkbox h-4 w-4 bg-gray-300 border border-gray-500`}></span>
    
    </label>
    {dropOpenState["box7"] ? (
                    <IoIosArrowDropdown 
                      className="mt-2 text-xl cursor-pointer" 
                      onClick={() => handleDropToggle("box7")}
                    />
                  ) : (
                    <IoIosArrowDropright
                      className="mt-2 text-xl cursor-pointer" 
                      onClick={() => handleDropToggle("box7")}
                    />
                  )}
      <div className="flex flex-col gap-[2px] mt-2 ml-1">
      <span className=" font-semibold pb-1">Risky Software Supply Chain</span>
      <div className="flex gap-[6px]">
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-4</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-teal-200 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-5</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-10</span>
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
    <div className={``}>
     {dropOpenState["box7"] ? (
        <DropDowns
        controlInfo={{RiskTitle:"Risky Software Supply Chain", RiskCategory: "Software Risk", ControlDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", RiskCode: "RM-001", Vulnerability: "Weak Authentication", Threat: "Espionage"}}
        RiskSummery={{PredictedRisk:45, Probability:60, InheritedRisk:80}} ProbabilityAssessment={{Probability:70}}
        RiskTreatment={{Treatment:"", RiskOwner:"William Shakespeare", RiskReviewer:"Florence Nightingale", ControlMapping:"", OwnerId:"CyID-140", RiskId:"CyID-141", OwnerValue:55, ReviewerValue:65}}
        />
      ) : (<></>)}
   </div>
      </div>
      <div className=" register-container h-auto w-full bg-white rounded-lg mt-1 pb-2">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer flex ml-10 mt-2 font-normal text-sm">
    <input type="checkbox" checked={checkboxes["box8"]} onChange={()=>handleSingleCheck("box8")} />
    <span className="custom-checkbox h-4 w-4 bg-gray-300 border border-gray-500 "></span>
    
    </label>
    {dropOpenState["box8"] ? (
                    <IoIosArrowDropdown 
                      className="mt-2 text-xl cursor-pointer" 
                      onClick={() => handleDropToggle("box8")}
                    />
                  ) : (
                    <IoIosArrowDropright 
                      className="mt-2 text-xl cursor-pointer" 
                      onClick={() => handleDropToggle("box8")}
                    />
                  )}
      <div className="flex flex-col gap-[2px] mt-2 ml-1">
      <span className=" font-semibold pb-1">Network Management - Advance Persistence Threats</span>
      <div className="flex gap-[6px]">
        <div className="h-5 w-16 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-4</span>
        </div>
        <div className="h-5 w-16 rounded-lg bg-teal-200 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-5</span>
        </div>
        <div className="h-5 w-16 rounded-lg bg-red-400 relative">
          <span className=" text-[10px] absolute left-4 top-[2px]">CyD-10</span>
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
    <div className={``}>
     {dropOpenState["box8"] ? (
        <DropDowns 
        controlInfo={{RiskTitle:"Network Management - Advance Persistence Threats", RiskCategory: "Network", ControlDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", RiskCode: "RM-001", Vulnerability: "Weak Authentication", Threat: "Espionage"}}
        RiskSummery={{PredictedRisk:50, Probability:65, InheritedRisk:85}} ProbabilityAssessment={{Probability:75}}
        RiskTreatment={{Treatment:"", RiskOwner:"Stephen Hawking", RiskReviewer:"Jane Goodall", ControlMapping:"", OwnerId:"CyID-142", RiskId:"CyID-143", OwnerValue:60, ReviewerValue:70}}
        />
      ) : (<></>)}
   </div>
      </div>
      <div className="flex justify-between mt-1">
        <div className=" h-10 w-20 rounded-lg text-gray-400 bg-white text-[12px] text-center flex items-center justify-center cursor-pointer">
          <span>8/page</span>
        </div>
        <div className="flex gap-2">
          <div className=" h-10 w-10 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer"><FaLessThan className=" ml-1" /><FaLessThan className=" mr-[6px]" /></div>
          <div className=" h-10 w-10 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer"><FaLessThan /></div>
          <div className=" h-10 w-10 rounded-md text-white cursor-pointer text-[10px] flex items-center justify-center bg-gray-900">1</div>
          <div className=" h-10 w-10 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer">2</div>       
             <div className=" h-10 w-10 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer">3</div>      
                 <div className=" h-10 w-10 rounded-md bg-white text-[22px] flex items-center justify-center cursor-pointer">...</div> 
                          <div className=" h-10 w-10 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer">10</div> 
                                   <div className=" h-10 w-10 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer"><FaGreaterThan /></div>
          <div className=" h-10 w-10 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer"><FaGreaterThan className=" ml-1" /><FaGreaterThan className=" mr-[6px]" /></div>
        </div>
      </div>
      </div>
    </div>
    </div>
   
    </div>
  )
}

export default RiskManagement