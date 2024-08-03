import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import Sidebar from "../pages/Sidebar";
import { PieChart, Pie, Cell } from 'recharts';
import Navbar from "./Navbar";
interface DataItem {
  name: string;
  value: number;
  color: string;
}

interface LegendItemProps {
  item: DataItem;
}
const RiskDashboard = () => {
  const data = [
    { name: 'Accepted', value: 6, color: '#8884d8' },
    { name: 'Avoided', value: 2, color: '#82ca9d' },
    { name: 'Mitigate', value: 9, color: '#ffc658' },
    { name: 'Transferred', value: 4, color: '#ff8042' },
  ];

  const LegendItem: React.FC<LegendItemProps> = ({ item }) => (
    <div className="flex items-center p-2">
      <div className={`w-1 h-1 rounded-full mr-1`} style={{ backgroundColor: item.color }}></div>
      <span className="text-xs">{item.name}</span>
      <span className="text-xs ml-1">{item.value}</span>
    </div>
  );
  return (
    <div className=" h-[900px] w-full bg-gray-300 pt-8 pl-8 pb-4 overflow-x-auto overflow-hidden">
    
    <div className="h-[640px] flex gap-6">
    <Sidebar />
        <div className=" -ml-3">
      <Navbar />
      <div className="flex items-center gap-8 -mt-2">
        <select className=" h-7 w-44 text-sm font-normal rounded-md px-2 text-gray-700 cursor-pointer mt-4 outline-none">
            <option>Risk Categories</option>
            <option>Category-1</option>
            <option>Category-2</option>
          
        </select>
        <select className=" h-7 w-44 text-sm font-normal rounded-md px-2 text-gray-700 cursor-pointer mt-4 outline-none">
            <option>Risk Owner</option>
            <option>Owner-1</option>
            <option>Owner-2</option>
          
        </select>
         
          
        </div>
        <div className="h-16 w-[1094px] bg-white mt-3 rounded-lg">
            <h4 className=" text-[12px] ml-2 font-semibold pt-1">Risk posture</h4>
            <div className="flex gap-1 items-center">
              <div className="flex flex-col justify-center ml-2">
                <div className=" h-7 w-[360px] bg-custom-green"></div>
                <span className=" text-[9px] text-blue-500 text-center">15</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className=" h-7 w-[250px] bg-yellow-400"></div>
                <span className=" text-[9px] text-blue-500 text-center">9</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className=" h-7 w-[170px] bg-orange-400"></div>
                <span className=" text-[9px] text-blue-500 text-center">7</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className=" h-7 w-[280px] bg-red-600"></div>
                <span className=" text-[9px] text-blue-500 text-center">12</span>
              </div>
              
            </div>
        </div>
        <div className="flex gap-3">
        <div>
        <div className=" h-[380px] w-72 bg-white mt-3 rounded-lg">
          <h3 className=" pt-2 pl-4 text-sm font-semibold">Risk heatmap</h3>
         <div className="flex mt-8 items-center gap-1 ml-6">
            <span className="px-3 text-[10px]">5</span>
         <div className="flex items-center gap-[2px]">
           <div className=" h-10 w-10 bg-yellow-400 rounded flex items-center justify-center font-semibold">2</div>
           <div className=" h-10 w-10 bg-orange-400 rounded flex items-center justify-center font-semibold">1</div>
           <div className=" h-10 w-10 bg-orange-400 rounded flex items-center justify-center font-semibold">1</div>
           <div className=" h-10 w-10 bg-red-600 rounded flex items-center justify-center font-semibold">2</div>
           <div className=" h-10 w-10 bg-red-600 rounded flex items-center justify-center font-semibold">8</div>
          </div>
         </div>
         <div className="flex  mt-[2px] items-center gap-1 ml-6">
            <span className="px-3 text-[10px]">4</span>
         <div className="flex items-center gap-[2px]">
           <div className=" h-10 w-10 bg-custom-green rounded flex items-center justify-center font-semibold">3</div>
           <div className=" h-10 w-10 bg-yellow-400 rounded flex items-center justify-center font-semibold">1</div>
           <div className=" h-10 w-10 bg-orange-400 rounded flex items-center justify-center font-semibold">1</div>
           <div className=" h-10 w-10 bg-orange-400 rounded flex items-center justify-center font-semibold">2</div>
           <div className=" h-10 w-10 bg-red-600 rounded flex items-center justify-center font-semibold">2</div>
          </div>
         </div>
         <div className="flex  mt-[2px] items-center gap-1 ml-6">
            <span className="px-3 text-[10px]">3</span>
         <div className="flex items-center gap-[2px]">
           <div className=" h-10 w-10 bg-custom-green rounded flex items-center justify-center font-semibold">2</div>
           <div className=" h-10 w-10 bg-yellow-400 rounded flex items-center justify-center font-semibold"></div>
           <div className=" h-10 w-10 bg-yellow-400 rounded flex items-center justify-center font-semibold">1</div>
           <div className=" h-10 w-10 bg-orange-400 rounded flex items-center justify-center font-semibold">1</div>
           <div className=" h-10 w-10 bg-orange-400 rounded flex items-center justify-center font-semibold">3</div>
          </div>
         </div>
         <div className="flex  mt-[2px] items-center gap-1 ml-6">
            <span className="px-3 text-[10px]">2</span>
         <div className="flex items-center gap-[2px]">
           <div className=" h-10 w-10 bg-custom-green rounded flex items-center justify-center font-semibold">2</div>
           <div className=" h-10 w-10 bg-custom-green rounded flex items-center justify-center font-semibold">3</div>
           <div className=" h-10 w-10 bg-yellow-400 rounded flex items-center justify-center font-semibold">3</div>
           <div className=" h-10 w-10 bg-yellow-400 rounded flex items-center justify-center font-semibold">1</div>
           <div className=" h-10 w-10 bg-orange-400 rounded flex items-center justify-center font-semibold"></div>
          </div>
         </div>
         <div className="flex  mt-[2px] items-center gap-1 ml-6">
            <span className="px-3 text-[10px]">1</span>
         <div className="flex items-center gap-[2px] ml-[2px]">
           <div className=" h-10 w-10 bg-custom-green rounded flex items-center justify-center font-semibold">2</div>
           <div className=" h-10 w-10 bg-custom-green rounded flex items-center justify-center font-semibold">1</div>
           <div className=" h-10 w-10 bg-custom-green rounded flex items-center justify-center font-semibold"></div>
           <div className=" h-10 w-10 bg-custom-green rounded flex items-center justify-center font-semibold">2</div>
           <div className=" h-10 w-10 bg-yellow-400 rounded flex items-center justify-center font-semibold">1</div>
          </div>
         </div>
         <div className="flex  mt-[2px] items-center gap-1 ml-8">
            <span className="px-3 text-[10px]"></span>
         <div className="flex items-center gap-[2px]">
           <div className=" h-10 w-10 flex items-center justify-center text-[10px] -mt-1">1</div>
           <div className=" h-10 w-10 flex items-center justify-center text-[10px] -mt-1">2</div>
           <div className=" h-10 w-10 flex items-center justify-center text-[10px] -mt-1">3</div>
           <div className=" h-10 w-10 flex items-center justify-center text-[10px] -mt-1">4</div>
           <div className=" h-10 w-10 flex items-center justify-center text-[10px] -mt-1">5</div>
          </div>
         </div>
        </div>
        </div>
        <div className="h-[240px] w-[795px] bg-white mt-3 rounded-lg">
          <h3 className="font-semibold text-[12px] ml-2 -mb-1">Category Breakdown</h3>
          <div className=" ml-2">
            <span className=" text-[10px] font-semibold text-blue-500">Governance - Compliance/Legal</span>
            <div className="flex gap-1">
            <div className="relative">
              <div className=" h-3 w-[320px] bg-yellow-400"></div>
              <span className="text-[8px] text-blue-500 absolute top-3 left-32">2</span>
            </div>
            <div className="relative">
              <div className=" h-3 w-[442px] bg-red-600"></div>
              <span className="text-[8px] text-blue-500 absolute top-3 left-[222px]">3</span>
            </div>
            </div>
          </div>
          <div className=" ml-2 mt-1">
            <span className=" text-[10px] font-semibold text-blue-500">Asset Management</span>
            <div className="flex gap-1">
            <div className="relative">
              <div className=" h-3 w-[270px] bg-custom-green"></div>
              <span className="text-[8px] text-blue-500 absolute top-3 left-32">2</span>
            </div>
            <div className="relative">
              <div className=" h-3 w-[130px] bg-yellow-400"></div>
              <span className="text-[8px] text-blue-500 absolute top-3 left-16">1</span>
            </div>
            <div className="relative">
              <div className=" h-3 w-[358px] bg-red-600"></div>
              <span className="text-[8px] text-blue-500 absolute top-3 left-[222px]">3</span>
            </div>
            </div>
          </div>
          <div className=" ml-2 mt-1">
            <span className=" text-[10px] font-semibold text-blue-500">Access Control</span>
            <div className="flex gap-1">
            <div className="relative">
              <div className=" h-3 w-[220px] bg-custom-green"></div>
              <span className="text-[8px] text-blue-500 absolute top-3 left-[50%]">3</span>
            </div>
            <div className="relative">
              <div className=" h-3 w-[220px] bg-yellow-400"></div>
              <span className="text-[8px] text-blue-500 absolute top-3 left-[50%]">3</span>
            </div>
            <div className="relative">
              <div className=" h-3 w-[200px] bg-orange-400"></div>
              <span className="text-[8px] text-blue-500 absolute top-3 left-[50%]">3</span>
            </div>
            <div className="relative">
              <div className=" h-3 w-[112px] bg-red-600"></div>
              <span className="text-[8px] text-blue-500 absolute top-3 left-[50%]">1</span>
            </div>
            </div>
          </div>
          <div className=" ml-2 mt-1">
            <span className=" text-[10px] font-semibold text-blue-500">Assessments & Audits</span>
            <div className="flex gap-1">
            <div className="relative">
              <div className=" h-3 w-[180px] bg-custom-green"></div>
              <span className="text-[8px] text-blue-500 absolute top-3 left-[50%]">3</span>
            </div>
            <div className="relative">
              <div className=" h-3 w-[280px] bg-yellow-400"></div>
              <span className="text-[8px] text-blue-500 absolute top-3 left-[50%]">4</span>
            </div>
            <div className="relative">
              <div className=" h-3 w-[190px] bg-orange-400"></div>
              <span className="text-[8px] text-blue-500 absolute top-3 left-[50%]">3</span>
            </div>
            <div className="relative">
              <div className=" h-3 w-[102px] bg-red-600"></div>
              <span className="text-[8px] text-blue-500 absolute top-3 left-[50%]">1</span>
            </div>
            </div>
          </div>
          <div className=" ml-2 mt-1">
            <span className=" text-[10px] font-semibold text-blue-500">Assessments & Audits</span>
            <div className="flex gap-1">
            <div className="relative">
              <div className=" h-3 w-[381px] bg-red-600"></div>
              <span className="text-[8px] text-blue-500 absolute top-3 left-[50%]">3</span>
            </div>
            <div className="relative">
              <div className=" h-3 w-[381px] bg-orange-400"></div>
              <span className="text-[8px] text-blue-500 absolute top-3 left-[50%]">4</span>
            </div>
          
            </div>
          </div>
          <div className="flex justify-center mt-2 items-center gap-[2px]">
            <span className=" text-[7px] text-gray-800 mr-1 mt-[2px]">1-5 of 15</span>
            <div className=" h-[14px] w-[14px] bg-gray-200 rounded-full flex items-center justify-center cursor-pointer">
              <FaLessThan className=" text-[7px] text-gray-400"/>
              <FaLessThan className=" text-[7px] text-gray-400 -ml-[2px]"/>
            </div>
            <div className=" h-[14px] w-[14px] bg-gray-200 rounded-full flex items-center justify-center cursor-pointer">
              <FaLessThan className=" text-[7px] text-gray-400"/>
            </div>
            
            <div className=" h-[14px] w-[14px] bg-gray-200 rounded-full flex items-center justify-center cursor-pointer">
              <FaGreaterThan className=" text-[7px] text-gray-800"/>
            </div>
            <div className=" h-[14px] w-[14px] bg-gray-200 rounded-full flex items-center justify-center cursor-pointer">
              <FaGreaterThan className=" text-[7px] text-gray-800"/>
              <FaGreaterThan className=" text-[7px] text-gray-800 -ml-[2px]"/>
            </div>
          </div>
      <div className="flex items-center gap-3 mt-5">
      <div className=" h-[125px] rounded-md w-[290px] bg-white ">
          <div className="flex justify-between items-center mr-4">
          <h2 className=" font-bold pt-2 pl-4 text-[17px]">Risk assessment</h2>
          <MdOutlineFileDownload className=" text-[18px] text-gray-600 cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300"/>
          </div>
          <div className="flex items-center gap-3 ml-4 mt-2">
            <div>
              <span className=" text-sm font-bold">Scored risks</span>
              <p className=" text-blue-700 text-2xl font-semibold ml-2">43</p>
            </div>
            <div>
              <span className=" text-sm font-bold">Unscored risks</span>
              <p className=" text-blue-700 text-2xl font-semibold ml-2">153</p>
            </div>
          </div>
        </div>
        <div className="h-[125px] rounded-md w-[290px] bg-white ">
    <h2 className="font-bold pt-2 pl-4 text-[17px]">Treatment overview</h2>
    <div className="flex flex-row items-center">
        <div className="flex-shrink-0">
          <PieChart width={90} height={90}>
            <Pie
              data={data}
              cx={45}
              cy={45}
              innerRadius={25}
              outerRadius={35}
              paddingAngle={1}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="ml-4 flex-grow">
          <div className="flex justify-between mb-0.5">
            <LegendItem item={data[0]} />
            <div className="w-0.5" />
            <LegendItem item={data[1]} />
          </div>
          <div className="flex justify-between">
            <LegendItem item={data[2]} />
            <div className="w-0.5" />
            <LegendItem item={data[3]} />
          </div>
        </div>
      </div>
</div>
      </div>
       

        </div>
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default RiskDashboard