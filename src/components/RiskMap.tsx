import Sidebar from '../pages/Sidebar'
import Navbar from './Navbar'
import RiskMapimg2 from "../assets/images/Risk Map img2.png"
const RiskMap = () => {
  return (
    <div className=" h-screen bg-gray-300 pt-8 pl-8 pb-4 flex gap-6 overflow-y-auto">
    <div className=' h-[840px]'>
    <Sidebar />
    </div>
        <div className=" -ml-3">
      <Navbar />
      <div>
        <select className=" h-7 w-58 text-sm max-sm:w-52  rounded px-2 font-bold text-black mt-3 outline-none">
            <option className="">RM-01 : Malicious Insider</option>
            <option className="">RM-02 : Name</option>
            <option className="">RM-03 : Name</option>
          
        </select>
          
        </div>
        <div className='flex -ml-[150px] gap-2 items-center mt-2'>
        
        <img className='h-[610px] w-full ml-[150px] rounded-lg max-sm:w-[30%]' src={RiskMapimg2} alt="" />
        
        <div className=' h-[610px] w-52 border-2 border-black rounded max-sm:w-44'>
        <div className=' text-center bg-black text-gray-300 max-sm:text-sm'>RM-01 : Malicious Insider</div>
        <div className=' ml-1 '>
          <h1 className=' underline font-bold text-sm max-sm:text-[12px]'>Risk Assessment</h1>
          <div className=' flex mt-1'>
            <div className=' h-5 w-12 max-sm:h-4 max-sm:w-11 bg-custom-yellow flex items-center justify-center text-[12px]'>2</div>
            <div className=' h-5 w-32 max-sm:h-4 max-sm:w-28 bg-custom-red flex items-center justify-center text-[12px]'>5</div>
          </div>
            <div className='flex justify-between text-[12px] max-sm:text-[10px] w-44 max-sm:w-40'>
              <span className='font-semibold'>Likelhood</span>
              <span className='font-semibold'>Imapct</span>
            </div>
          <div className=' border border-b-[1px] border-black border-opacity-25 w-44 max-sm:w-40 mt-1 mx-auto'></div>
        </div>
        <div className=' ml-1 mt-[2px]'>
          <h1 className=' underline font-bold text-sm max-sm:text-[12px]'>Risk Severity</h1>
            <div className='flex justify-between text-[12px]  w-32 max-sm:w-28 items-center ml-4'>
              <span className='font-semibold text-[10px]'>Critical</span>
              <span className=' h-[9px] w-[9px] max-sm:h-[7px] max-sm:w-[7px] rounded-full bg-red-900'></span>
            </div>
          <div className=' border border-b-[1px] border-black border-opacity-25 w-44 mt-1 max-sm:w-40 mx-auto'></div>
        </div>
        <div className=' ml-1 mt-[2px]'>
          <h1 className=' underline font-bold text-sm max-sm:text-[12px]'>Key Controls</h1>
            <div className='flex justify-between text-[8px]  w-44 max-sm:w-40 items-center ml-2 px-1 relative'>
              <div className=' h-1 w-1 rounded-full bg-black -ml-1 p-[2px] absolute top-1 left-[1px]'></div>
              <span className='font-semibold'>CyID-115 : Impliment Multi-Factor Authentication</span>
              <span className='font-semibold text-blue-500 underline cursor-pointer'>Instructions</span>
            </div>
            <div className='flex justify-between text-[8px]  w-44 max-sm:w-40 items-center ml-2 px-1 relative mt-1'>
              <div className=' h-1 w-1 rounded-full bg-black -ml-1 p-[2px] absolute top-1 left-[1px]'></div>
              <span className='font-semibold'>CyID-195 : Monitor privileged users acitivity</span>
              <span className='font-semibold text-blue-500 underline cursor-pointer'>Instructions</span>
            </div>
          <div className=' border border-b-[1px] border-black border-opacity-25 w-44 max-sm:w-40 mt-1 mx-auto'></div>
        </div>
        <div className=' ml-1 mt-[2px]'>
          <h1 className=' underline font-bold text-sm max-sm:text-[12px]'>Threats</h1>
            <div className='flex justify-between text-[8px]  w-44 items-center ml-2 px-1 relative'>
              <div className=' h-1 w-1 rounded-full bg-black -ml-1 p-[2px] absolute top-1 left-[1px]'></div>
              <span className='font-semibold'>Sabotage</span>
             
            </div>
            <div className='flex justify-between text-[8px]  w-44 items-center ml-2 px-1 relative mt-1'>
              <div className=' h-1 w-1 rounded-full bg-black -ml-1 p-[2px] absolute top-1 left-[1px]'></div>
              <span className='font-semibold'>Espionage</span>
           
            </div>
            <div className='flex justify-between text-[8px]  w-44 items-center ml-2 px-1 relative mt-1'>
              <div className=' h-1 w-1 rounded-full bg-black -ml-1 p-[2px] absolute top-1 left-[1px]'></div>
              <span className='font-semibold'>IP Theft</span>
           
            </div>
          <div className=' border border-b-[1px] border-black border-opacity-25 w-44 max-sm:w-40 mt-1 mx-auto'></div>
        </div>
        <div className=' ml-1 mt-[2px]'>
          <h1 className=' underline font-bold text-sm max-sm:text-[12px]'>Vulnerabilities</h1>
            <div className='flex justify-between text-[8px]  w-44 items-center ml-2 px-1 relative'>
              <div className=' h-1 w-1 rounded-full bg-black -ml-1 p-[2px] absolute top-1 left-[1px]'></div>
              <span className='font-semibold'>Weak Authentications</span>
             
            </div>
            <div className='flex justify-between text-[8px]  w-44 items-center ml-2 px-1 relative mt-1'>
              <div className=' h-1 w-1 rounded-full bg-black -ml-1 p-[2px] absolute top-1 left-[1px]'></div>
              <span className='font-semibold'>Unathorized Access to Crital Assets</span>
           
            </div>
           
          <div className=' border border-b-[1px] border-black border-opacity-25 w-44 max-sm:w-40 mt-1 mx-auto'></div>
        </div>
        <div className=' ml-1 mt-[2px]'>
          <h1 className=' underline font-bold text-sm max-sm:text-[12px]'>Regulatory Risks</h1>
            <div className='flex justify-between text-[8px]  w-44 items-center ml-2 px-1 relative'>
              <div className=' h-1 w-1 rounded-full bg-black -ml-1 p-[2px] absolute top-1 left-[1px]'></div>
              <span className='font-semibold'>ISO27001 : A. 9.4.2 : Secure log on procedures</span>
             
            </div>
            <div className='flex justify-between text-[8px]  w-44 items-center ml-2 px-1 relative mt-1'>
              <div className=' h-1 w-1 rounded-full bg-black -ml-1 p-[2px] absolute top-1 left-[1px]'></div>
              <span className='font-semibold'>SOC2 : CC6.1 : Implement logical access security</span>
           
            </div>
            <div className='flex justify-between text-[8px]  w-44 items-center ml-2 px-1 relative mt-1'>
              <div className=' h-1 w-1 rounded-full bg-black -ml-1 p-[2px] absolute top-1 left-[1px]'></div>
              <span className='font-semibold'>PCI-DSS : 8.3.2 : MFA for Network Access</span>
           
            </div>
           
          <div className=' border border-b-[1px] border-black border-opacity-25 w-44 max-sm:w-40 mt-1 mx-auto'></div>
        </div>
        <div className=' ml-1 mt-[2px]'>
          <h1 className=' underline font-bold text-sm max-sm:text-[12px]'>Monetary Risk</h1>
            <div className='flex justify-between text-[8px]  w-44 items-center ml-2 px-1 relative'>
              <div className=' h-1 w-1 rounded-full bg-black -ml-1 p-[2px] absolute top-1 left-[1px]'></div>
              <span className='font-semibold'>Penalities : upto USD 1,200,000</span>
             
            </div>
            <div className='flex justify-between text-[8px]  w-44 items-center ml-2 px-1 relative mt-1'>
              <div className=' h-1 w-1 rounded-full bg-black -ml-1 p-[2px] absolute top-1 left-[1px]'></div>
              <span className='font-semibold'>Sabotage : upto USD 100,000,000</span>
           
            </div>
           
         
        </div>
        </div>
        </div>
        </div>
     
    </div>
  )
}

export default RiskMap