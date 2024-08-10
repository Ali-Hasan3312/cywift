import { ChangeEvent, useCallback, useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import RiskTrendChart from "./chart";
import { CiUser } from "react-icons/ci";
import { GrEdit } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";

const boxNames = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8'] 
type BoxName = typeof boxNames[number];
type DropOpenState = {
  [key in BoxName]: boolean;
};
export type ControlInformationProps = {
    RiskTitle: string;
    RiskCategory: string;
    ControlDescription: string;
    RiskCode: string;
    Vulnerability: string;
    Threat: string;
}

export type RiskSummeryProps = {
    PredictedRisk: number;
    Probability: number;
    InheritedRisk: number;
}

export type ProbabilityAssessmentProps = {
    Probability: number;
}

export type RiskTreatmentProps = {
    Treatment: string;
    RiskOwner: string;
    RiskReviewer: string;
    ControlMapping: string;
    OwnerId: string;
    RiskId: string;
    OwnerValue: number;
    ReviewerValue: number;
}

export type DropDownsProps = {
    controlInfo: ControlInformationProps;
    RiskSummery: RiskSummeryProps;
    ProbabilityAssessment: ProbabilityAssessmentProps;
    RiskTreatment: RiskTreatmentProps;
}


const DropDowns = ({
    controlInfo,
    RiskSummery,
    ProbabilityAssessment,
    RiskTreatment
}: DropDownsProps) => {
    const [dropOpenState, setDropOpenState] = useState<DropOpenState>(
        boxNames.reduce((acc, boxName) => ({ ...acc, [boxName]: true }), {} as DropOpenState)
      );
      const handleDropToggle = useCallback((boxName: BoxName) => {
        setDropOpenState(prev => ({
          ...prev,
          [boxName]: !prev[boxName]
        }));
      }, []);
      const [value, setValue] = useState(50);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value, 10));
  };
    return (
        <div className='h-full w-[90%] animate-slide-up pb-4 pt-2 mx-auto mt-2 bg-gray-300 rounded-lg flex flex-col'>
            <div className="flex items-center gap-6 font-bold pl-2 h-auto py-2 w-[95%] max-sm:w-[85%] max-sm:text-sm rounded-lg text-lg mx-auto bg-white mt-2 relative max-w-[95%]"  >
                {
                   dropOpenState["box1"] ? (
                    <>
                   <div className="flex items-center gap-5 transition-all ease-out duration-500 translate-y-[10%]">
                    <FaAngleRight className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box1")} />
                    <h1 className=" font-bold">Control Information</h1>
                    </div>
                   
                    </>
                   ) : (
                    <>
                   <div className="transition-all ease-out duration-500 translate-y-0">
                  <div className="absolute top-2 left-2 flex items-center gap-2 font-bold text-lg">
                  <FaAngleDown className="text-[12px] max-sm:text-[9px] cursor-pointer" onClick={() => handleDropToggle("box1")}/>
                  <h1 className="">Control Information</h1>
                  </div>
                  <div className=" h-6 w-6 border border-gray-500 cursor-pointer text-sm absolute top-2 right-2 rounded-full flex items-center justify-center">
                  <GrEdit className=" text-gray-500"/>
                  </div>
                    <div className="flex flex-wrap items-center mt-6 gap-8 ml-6 pb-2">
                      <div className="flex flex-col gap-4 w-[30vw]">
                      <div className="flex items-center gap-12">
                        <div className="h-auto">
                         <h3 className="flex text-[12px] font-bold">Risk Title<span className=" text-red-600">*</span></h3>
                         <span className=" text-[14px]">{controlInfo.RiskTitle}</span>
                            </div>                       
                        <div className="h-auto">
                        <h3 className="flex text-[12px] font-bold">Risk Category</h3>
                        <span className=" text-[14px]">{controlInfo.RiskCategory}</span>
                        </div>
                        </div>
                     
                       
                        <div className="flex items-center gap-[180px]">
                       <div className=" h-auto">
                        <h3 className="flex text-[12px] font-bold">Risk Code</h3>
                        <span className=" text-[14px]">{controlInfo.RiskCode}</span>
                        </div>
                        <div className="h-auto">
                        <h3 className="flex text-[12px] font-bold">Vulnarability</h3>
                        <span className=" text-[14px]">{controlInfo.Vulnerability}</span>
                        </div>
                       </div>
                       <div className="flex items-center">
                       <div className="h-auto">
                        <h3 className="flex text-[12px] font-bold">Supporting Documents</h3>
                        <input type="file" className="text-[14px]"/>
                        </div>
                        <div className="h-auto -ml-12">
                        <h3 className="flex text-[12px] font-bold">Threat</h3>
                        <span className=" text-[14px]">{controlInfo.Threat}</span>
                        </div>
                       </div>
                      </div>
                       <div className="">
                        <h3 className="flex text-[12px] font-bold">Control Description<span className=" text-red-600">*</span></h3>
                        <div className=" h-auto w-[25vw] border border-black text-sm p-2 rounded-lg ">
                        <p>{controlInfo.ControlDescription}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    </>
                   ) 
                }
                
               
            </div>
            <div className="flex items-center gap-6  relative font-bold pl-2 h-auto py-2 w-[95%] max-sm:w-[85%] max-sm:text-sm rounded-lg text-lg mx-auto bg-white mt-2">
            {
                   dropOpenState["box2"] ? (
                    <>
                   <div className="flex items-center gap-5 transition-all ease-out duration-500 translate-y-[10%]">

                    <FaAngleRight className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box2")} /> 
                        <h1 className=" font-bold">Risk Summary</h1>
                    </div>
                        </>
                   ): (

                    <>
                   <div className="transition-all ease-out duration-500 translate-y-0">

                 
                   <div className="absolute top-2 left-2 flex items-center gap-6 font-bold text-lg">

                    <FaAngleDown className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box2")}/>
                    <h1>Risk Summary</h1>
                    </div>
                    <div className="flex gap-4 mt-8 pl-4">
                       <div>
                      <div className=" mt-4">
                      <h3 className="text-[14px] font-bold mb-2">Risk Calculation</h3>
                     
                      </div>
                        <div className="flex justify-center gap-0">
                        <div className=" h-32 w-auto flex flex-col justify-center gap-1">
                           <div className=" h-20 w-20 border-[8px] rounded-full border-red-600 flex items-center justify-center">$ {RiskSummery.PredictedRisk}m</div>
                           <span className=" text-base">Predicted Risk</span>
                           </div>
                           <div className=" h-32 w-auto -ml-12">
                           <div className="h-20 w-20 flex items-center justify-center">=</div>
                           </div>
                           <div className=" h-32 w-auto flex flex-col justify-center gap-1">
                            <div className=" h-20 w-20 border-[8px] rounded-full border-red-600 flex items-center justify-center">{RiskSummery.Probability}%</div>
                            <span className=" text-base">Probability</span>
                            </div>
                           <div className=" h-32 w-auto -ml-4">
                           <div className="h-20 w-20 flex items-center justify-center">X</div>
                           </div>
                           <div className=" h-32 w-auto flex flex-col justify-center gap-1">
                                
                            <div className=" h-20 w-20 border-[8px] rounded-full border-red-600 flex items-center justify-center">$ {RiskSummery.InheritedRisk}m</div>
                            <span className=" text-base">Inherited Risk</span>
                            </div>
                        </div>
                       </div>
                       <div>
                     <div className="flex items-center justify-between">
                     <h2 className="text-[14px] font-semibold">Risk Trend</h2>
                     <div className=" text-[14px] font-semibold">W M Q Y</div>
                     </div>
                       <RiskTrendChart />
                       </div>
                    </div>
                    </div>
                        </>
                   ) }
                
            </div>
            <div className="flex items-center gap-6  font-bold pl-2 h- py-2 w-[95%] max-sm:w-[85%] max-sm:text-sm rounded-lg text-lg mx-auto bg-white mt-2">
            {
                   dropOpenState["box3"] ? (
                    <>
                    <div className="flex items-center gap-5 transition-all ease-out duration-500 translate-y-[10%]">

                    <FaAngleRight className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box3")} /> 
                        <h1 className=" font-bold">Affected Assets</h1>
                    </div>
                        </>
                   ): (

                    <>
                    <div className="flex items-center gap-5 transition-all ease-out duration-500 translate-y-0">

                    <FaAngleDown className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box3")}/>
                    <h1 className=" font-bold">Affected Assets</h1>
                    </div>
                        </>
                   ) }
            </div>
            <div className="flex items-center gap-6 relative font-bold pl-2 h- py-2 w-[95%] max-sm:w-[85%] max-sm:text-sm rounded-lg text-lg mx-auto bg-white mt-2">
            {
                   dropOpenState["box4"] ? (
                    <>
                       <div className="transition-all ease-in duration-500 flex items-center gap-6 translate-y-[10%]">
                      
                    <FaAngleRight className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box4")} /> 
                        <h1 className=" font-bold">Probability Assessment</h1>
                    </div>
                        </>
                   ): (

                    <>
                    <div className="transition-all ease-out duration-500 translate-y-0">
                        <div className=" flex items-center gap-6 absolute top-2 left-2 ">
                        <FaAngleDown className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box4")}/>
                        <h1 className=" font-bold text-lg">Probability Assessment</h1>
                        </div>
                   
                        <div className="relative pt-1 mt-8">
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={handleChange}
            className="w-[50vw] h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-600 px-2 mt-2">
            <span>0%</span>
            <span>{value}%</span>
          </div>
        </div>
                    </div>
                        </>
                   ) }
            </div>
            <div className="flex items-center gap-6 relative font-bold pl-2 h- py-2 w-[95%] max-sm:w-[85%] max-sm:text-sm rounded-lg text-lg mx-auto bg-white mt-2 ">
            {
                   dropOpenState["box5"] ? (
                    <>
                    <div className="transition-all ease-in duration-500 flex items-center gap-6 translate-y-[10%]">

                    <FaAngleRight className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box5")} /> 
                        <h1 className=" font-bold">Risk Treatment</h1>
                    </div>
                        </> 
                   ): (

                    <>
                    <div className="transition-all ease-out duration-500 translate-y-0">

                    <div className=" flex items-center gap-6 absolute top-2 left-2  ">

                    <FaAngleDown className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box5")}/>
                    <h1 className=" font-bold text-lg">Risk Treatment</h1>
                   </div>
                    
                    <div className=" mt-8 pt-1 ml-9">
                      <h3 className=" font-bold text-sm">Select Treatment</h3>
                     <select className=" h-10 w-[55vw] border rounded-lg border-gray-500 bg-gray-200 outline-none mt-2 px-4 text-sm">
                      <option>Treatment-1</option>
                      <option>Treatment-2</option>
                      <option>Treatment-3</option>
                     </select>
                     <div className=" border border-gray-300 w-[55vw] mt-4"></div>
                    </div>
                    <div className="flex items-center justify-between w-[55vw] mt-3 pt-1 ml-9">
                      <div>
                      <h3 className=" font-bold text-sm">Risk Owners</h3>
                     <select className=" h-10 w-[25vw] border rounded-lg border-gray-500 bg-gray-200 outline-none mt-2 px-4 text-sm">
                      <option>{RiskTreatment.RiskOwner}</option>
                      <option>Owner-2</option>
                      <option>Owner-3</option>
                     </select>
                     <div className=" h-8 w-[150px] border cursor-pointer border-black mt-4 rounded-[16px] bg-gray-200 flex items-center ">
                      <div className=" h-8 w-8 bg-black rounded-full text-white flex items-center justify-center text-[24px]">
                        <CiUser />
                      </div>
                      <h4 className="text-[12px] font-bold ml-1">{RiskTreatment.RiskOwner}</h4>
                     </div>
                      </div>
                      <div>
                      <h3 className=" font-bold text-sm">Risk Reviewers</h3>
                     <select className=" h-10 w-[25vw] border rounded-lg border-gray-500 bg-gray-200 outline-none mt-2 px-4 text-sm">
                      <option>{RiskTreatment.RiskReviewer}</option>
                      <option>Reviewer-2</option>
                      <option>Reviewer-3</option>
                     </select>
                     <div className=" h-8 w-[150px] border cursor-pointer border-black mt-4 rounded-[16px] bg-gray-200 flex items-center ">
                      <div className=" h-8 w-8 bg-black rounded-full text-white flex items-center justify-center text-[24px]">
                        <CiUser />
                      </div>
                      <h4 className="text-[12px] font-bold ml-1">{RiskTreatment.RiskReviewer}</h4>
                     </div>
                      </div>
                    </div>
                      <div className=" border border-gray-300 w-[55vw] mt-4 ml-9"></div>
                      <div className=" mt-3 pt-1 ml-9">
                      <h3 className=" font-bold text-sm">Controls Mapping</h3>
                     <select className=" h-10 w-[55vw] border rounded-lg border-gray-500 bg-gray-200 outline-none mt-2 px-4 text-sm">
                      <option>Mapping-1</option>
                      <option>Mapping-2</option>
                      <option>Mapping-3</option>
                     </select>
                    
                    </div>
                    <div className="flex items-center">

                    <div className=" h-6 w-24 border ml-9 border-black mt-4 rounded-[16px] bg-green-400 flex items-center justify-between ">
                     
                      <h4 className="text-sm font-bold ml-1">{RiskTreatment.OwnerId}</h4>
                      <RxCrossCircled  className=" text-gray-800 mr-1 cursor-pointer text-[12px]"/>
                     </div>
                    <div className=" h-6 w-24 border ml-9 er border-black mt-4 rounded-[16px] bg-green-400 flex items-center justify-between ">
                     
                      <h4 className="text-sm font-bold ml-1">{RiskTreatment.RiskId}</h4>
                      <RxCrossCircled  className=" text-gray-800 mr-1 cursor-pointer text-[12px]"/>
                     </div>
                    </div>
                    <div className=" mt-3 pt-1 ml-9">
                    <h3 className=" font-bold text-sm">Controls Weightage</h3>
                   <div className="flex items-center gap-8 text-sm mt-2">
                   <div className="font-bold">
                      <h3 >{RiskTreatment.OwnerId}</h3>
                      <div className=" h-6 w-28 font-bold rounded mt-2 bg-gray-300 flex items-center justify-center">{RiskTreatment.OwnerValue}%</div>
                    </div>
                   <div className="font-bold">
                      <h3>{RiskTreatment.RiskId}</h3>
                      <div className=" h-6 w-28 font-bold rounded mt-2 bg-gray-300 flex items-center justify-center">
                        {RiskTreatment.ReviewerValue}%</div>
                    </div>
                   <div className="font-bold">
                      <h3>Residual Risk</h3>
                      <div className=" h-6 w-28 font-bold rounded mt-2 bg-gray-300 flex items-center justify-center">
                        {ProbabilityAssessment.Probability}%</div>
                    </div>
                   </div>
                   <div className=" border border-gray-300 w-[55vw] mt-4"></div>
                   <div className=" mt-4"></div>
                    </div>

                    </div>
                        </>
                   ) }
            </div>
            <div className="flex items-center gap-6  font-bold pl-2 h- py-2 w-[95%] max-sm:w-[85%] max-sm:text-sm rounded-lg text-lg mx-auto bg-white mt-2">
            {
                   dropOpenState["box6"] ? (
                    <>
                  <div className="transition-all ease-out duration-500 translate-y-[10%] flex items-center gap-5">

                    <FaAngleRight className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box6")} /> 
                        <h1 className=" font-bold">Notes & Comments</h1>
                    </div>
                        </>
                   ): (

                    <>
                     <div className="transition-all ease-out duration-500 translate-y-0 flex items-center gap-5">

                    <FaAngleDown className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box6")}/>
                    <h1 className=" font-bold">Notes & Comments</h1>
                    </div>
                        </>
                   ) }
            </div>
        </div>
    )
}

export default DropDowns;
