import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
    const location = useLocation()
  return (
    <>
      <div className="h-12 w-[1100px] bg-white flex items-center justify-between rounded-md">
      <h1 className=" font-medium ml-2 text-2xl">Risk Management</h1>
      <div className=" flex items-center mr-4 gap-2">
        <img className=" h-8 w-8 rounded-full" src="https://freesvg.org/img/abstract-user-flat-4.png" alt="" />
        <span>Abuzar Gafari</span>
      </div>
    </div>
    <div className=" h-12 w-[1100px] flex items-center justify-between mt-2">
      <div className="flex items-center gap-4">
        <div className={`dashboard h-9 w-[8rem] rounded-lg cursor-pointer ${location.pathname==='/Risk/Register'? 'bg-black text-white': 'bg-white text-black'} underline flex items-center justify-center`}>
          <Link  className="w-full h-full flex items-center justify-center" to={"/Risk/Register"}>Risk Register</Link>
        </div>
        <div className={`dashboard h-9 cursor-pointer w-[11rem] rounded-lg   text-opacity-90 ${location.pathname==='/Risk/Dashboard'? 'bg-black text-white': 'bg-white text-black'} underline flex items-center justify-center`}>
          <Link className="w-full h-full flex items-center justify-center" to={"/Risk/Dashboard"}>Risk Dashboard</Link>
        </div>
        <div className={`dashboard h-9 w-[9rem] rounded-lg cursor-pointer  ${location.pathname==='/Risk/Map'? 'bg-black text-white': 'bg-white text-black'}  text-opacity-90 underline flex items-center justify-center`}>
          <Link className="w-full h-full flex items-center justify-center" to={"/Risk/Map"}>Risk Map</Link>
        </div>
      </div>
      <div>
        <div className={`h-9 w-[8rem] rounded-lg ${location.pathname==='/Risk/New'? 'bg-black text-white': 'bg-white text-black'} text-opacity-90 underline  cursor-pointer`}>
        <Link className="w-full h-full flex items-center justify-center" to={"/Risk/New"}>New Risk</Link>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Navbar