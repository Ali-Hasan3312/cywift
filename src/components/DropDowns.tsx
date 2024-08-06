import { ChangeEvent, useCallback, useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import RiskTrendChart from "./chart";

type CheckboxName = 'selectAll' | 'box1' | 'box2' | 'box3' | 'box4' | 'box5' | 'box6' | 'box7' | 'box8';
const boxNames = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8'] as const;type CheckboxState = {
  [key in CheckboxName]: boolean;
};
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
        <div className='h-full w-[90%] pb-4 pt-2 mx-auto mt-2 bg-gray-300 rounded-lg flex flex-col'>
            <div className="flex items-center gap-6 font-bold pl-2 h-auto py-2 w-[95%] rounded-lg text-lg mx-auto bg-white mt-2 relative"  >
                {
                   dropOpenState["box1"] ? (
                    <>
                    <FaAngleRight className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box1")} />
                    <h1>Control Information</h1>
                   
                    </>
                   ) : (
                    <>
                  <div className="absolute top-2 left-2 flex items-center gap-2 font-bold text-lg">
                  <FaAngleDown className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box1")}/>
                  <h1 className="">Control Information</h1>
                  </div>
                    <div className="flex flex-wrap mt-6">
                          <div className=" w-[230px] h-auto">
                         <h3 className="flex text-[12px] font-bold">Risk Title<span className=" text-red-600">*</span></h3>
                         <span className=" text-[14px]">{controlInfo.RiskTitle}</span>
                            </div>                       
                        <div className=" w-[230px] h-auto">
                        <h3 className="flex text-[12px] font-bold">Risk Category</h3>
                        <span className=" text-[14px]">{controlInfo.RiskCategory}</span>
                        </div>
                        <div className=" -ml-20">
                        <h3 className="flex text-[12px] font-bold">Control Description<span className=" text-red-600">*</span></h3>
                        <div className=" h-auto w-[400px] border border-black text-sm p-2 rounded-lg ">
                        <p>{controlInfo.ControlDescription}</p>
                        </div>
                        </div>
                       
                        <div className=" w-[230px] h-auto">
                        <h3 className="flex text-[12px] font-bold">Risk Code</h3>
                        <span className=" text-[14px]">{controlInfo.RiskCode}</span>
                        </div>
                        <div className=" w-[230px] h-auto">
                        <h3 className="flex text-[12px] font-bold">Vulnarability</h3>
                        <span className=" text-[14px]">{controlInfo.Vulnerability}</span>
                        </div>
                        <div className=" w-[230px] h-auto">
                        <h3 className="flex text-[12px] font-bold">Supporting Documents</h3>
                        <input type="file" className="text-[14px]"/>
                        </div>
                        <div className=" w-[230px] h-auto">
                        <h3 className="flex text-[12px] font-bold">Threat</h3>
                        <span className=" text-[14px]">{controlInfo.Threat}</span>
                        </div>
                    </div>
                    </>
                   ) 
                }
                
               
            </div>
            <div className="flex items-center gap-6  relative font-bold pl-2 h- py-2 w-[95%] rounded-lg text-lg mx-auto bg-white mt-2">
            {
                   dropOpenState["box2"] ? (
                    <>
                    <FaAngleRight className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box2")} /> 
                        <h1>Risk Summary</h1>
                        </>
                   ): (

                    <>
                   <div className="absolute top-2 left-2 flex items-center gap-6 font-bold text-lg">

                    <FaAngleDown className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box2")}/>
                    <h1>Risk Summary</h1>
                    </div>
                    <div className="flex gap-4 mt-8 pl-4">
                       <div>
                      <div className="">
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
                        </>
                   ) }
                
            </div>
            <div className="flex items-center gap-6  font-bold pl-2 h- py-2 w-[95%] rounded-lg text-lg mx-auto bg-white mt-2">
            {
                   dropOpenState["box3"] ? (
                    <>
                    <FaAngleRight className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box3")} /> 
                        <h1>Affected Assets</h1>
                        </>
                   ): (

                    <>
                    
                    <FaAngleDown className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box3")}/>
                    <h1>Affected Assets</h1>
                        </>
                   ) }
            </div>
            <div className="flex items-center gap-6 relative font-bold pl-2 h- py-2 w-[95%] rounded-lg text-lg mx-auto bg-white mt-2">
            {
                   dropOpenState["box4"] ? (
                    <>
                    <FaAngleRight className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box4")} /> 
                        <h1>Probability Assessment</h1>
                        </>
                   ): (

                    <>
                    <div>
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
            <div className="flex items-center gap-6  font-bold pl-2 h- py-2 w-[95%] rounded-lg text-lg mx-auto bg-white mt-2">
            {
                   dropOpenState["box5"] ? (
                    <>
                    <FaAngleRight className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box5")} /> 
                        <h1>Risk Treatment</h1>
                        </>
                   ): (

                    <>
                    <FaAngleDown className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box5")}/>
                    <h1>Risk Treatment</h1>
                        </>
                   ) }
            </div>
            <div className="flex items-center gap-6  font-bold pl-2 h- py-2 w-[95%] rounded-lg text-lg mx-auto bg-white mt-2">
            {
                   dropOpenState["box6"] ? (
                    <>
                    <FaAngleRight className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box6")} /> 
                        <h1>Notes & Comments</h1>
                        </>
                   ): (

                    <>
                    <FaAngleDown className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box6")}/>
                    <h1>Notes & Comments</h1>
                        </>
                   ) }
            </div>
        </div>
    )
}

export default DropDowns;
