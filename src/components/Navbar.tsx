import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
    const location = useLocation()
    const [newRisk,setNewRisk] = useState(false);
  const resizeHandler = ()=>{
      setNewRisk(window.innerWidth < 700);
    }
    useEffect(() => {
      window.addEventListener("resize", resizeHandler);
      return () => {
        window.removeEventListener("resize", resizeHandler);
      };
    }, []);
  return (
    <>
      <div className="h-12 w-[83vw] bg-white flex items-center justify-between rounded-md -mt-6  ">
      <h1 className=" font-medium ml-2 text-2xl max-sm:text-[12px]">Risk Management</h1>
      <div className=" flex items-center mr-4 gap-2 cursor-pointer">
        <img className=" h-[4vh] w-[15%] rounded-full " src="https://freesvg.org/img/abstract-user-flat-4.png" alt="" />
        <select className=" outline-none cursor-pointer border-none  max-sm:text-[11px]">
        <option>Abuzar Gafari</option>
        <option>Logout</option>
        </select>
      </div>
    </div>
    <div className=" w-[83vw] flex flex-row items-center mt-3 max-sm:text-[12px] justify-between max-lg:justify-start max-sm:flex-wrap gap-4">
      <div className="flex items-center gap-4 flex-row max-lg:flex-wrap">
        <div className={`dashboard h-9 w-[8rem] max-sm:w-[7rem] rounded-lg cursor-pointer  ${location.pathname==='/Risk/Register' ? 'bg-black text-white': 'bg-white text-black'} underline flex items-center justify-center`}>
          <Link  className="w-full h-full flex items-center justify-center" to={"/Risk/Register"}>Risk Register</Link>
        </div>
        <div className={`dashboard h-9 cursor-pointer w-[11rem] max-sm:w-[8rem] rounded-lg text-opacity-90 ${location.pathname==='/Risk/Dashboard'? 'bg-black text-white': 'bg-white text-black'} underline flex items-center justify-center`}>
          <Link className="w-full h-full flex items-center justify-center" to={"/Risk/Dashboard"}>Risk Dashboard</Link>
        </div>
        <div className={`dashboard h-9 w-[9rem] rounded-lg cursor-pointer  ${location.pathname==='/Risk/Map'? 'bg-black text-white': 'bg-white text-black'} max-sm:w-[7rem] text-opacity-90 underline flex items-center justify-center`}>
          <Link className="w-full h-full flex items-center justify-center" to={"/Risk/Map"}>Risk Map</Link>
        </div>
        { newRisk && (
        <div className={`h-9 w-[8rem] inline-block rounded-lg ${location.pathname==='/Risk/New'? 'bg-black text-white': 'bg-white text-black'} text-opacity-90 underline  cursor-pointer`}>
        <Link className="w-full h-full flex items-center justify-center " to={"/Risk/New"}>New Risk</Link>
        </div>
        )}
      </div>
     
        <div className={`h-9 w-[8rem] inline-block max-md:hidden rounded-lg ${location.pathname==='/Risk/New'? 'bg-black text-white': 'bg-white text-black'} text-opacity-90 max-sm:w-[7rem] underline  cursor-pointer`}>
        <Link className="w-full h-full flex items-center justify-center " to={"/Risk/New"}>New Risk</Link>
        </div>
        
     
      
    </div>
    </>
  )
}

export default Navbar