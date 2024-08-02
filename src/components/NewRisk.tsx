import Sidebar from '../pages/Sidebar'
import Navbar from './Navbar'

const NewRisk = () => {
  return (
    <div className=" h-[900px] w-full bg-gray-300 pt-8 pl-8 pb-4">
    
    <div className="h-[640px] flex gap-6">
    <Sidebar />
        <div className=' -ml-3'>
      <Navbar />
        </div>
      </div>
    </div>
  )
}

export default NewRisk