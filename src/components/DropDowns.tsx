import { FaAngleRight  } from "react-icons/fa6";

const DropDowns = () => {
  return (
    <div className=' h-full w-[90%] pb-4 pt-2 mx-auto mt-2 bg-gray-300 rounded-lg flex flex-col'>
        <div className="flex items-center gap-6 cursor-pointer font-bold pl-2 h-8 w-[95%] rounded-lg text-lg mx-auto bg-white mt-2">
        <FaAngleRight className=" text-[12px]"  />       
         <h1>Control Information</h1>
        </div>
        <div className="flex items-center gap-6 cursor-pointer font-bold pl-2 h-8 w-[95%] rounded-lg text-lg mx-auto bg-white mt-2">

        <FaAngleRight className=" text-[12px]" />       
         <h1>Control Owners</h1>
        </div>
                <div className="flex items-center gap-6 cursor-pointer font-bold pl-2 h-8 w-[95%] rounded-lg text-lg mx-auto bg-white mt-2">

        <FaAngleRight className=" text-[12px]" />       
         <h1>Control Requirement Mapping</h1>
        </div>
                <div className="flex items-center gap-6 cursor-pointer font-bold pl-2 h-8 w-[95%] rounded-lg text-lg mx-auto bg-white mt-2">

        <FaAngleRight className=" text-[12px]" />       
         <h1>Automation Plugins</h1>
        </div>
                <div className="flex items-center gap-6 cursor-pointer font-bold pl-2 h-8 w-[95%] rounded-lg text-lg mx-auto bg-white mt-2">

        <FaAngleRight className=" text-[12px]" />       
         <h1>Controls Evidence</h1>
        </div>
    </div>
  )
}

export default DropDowns