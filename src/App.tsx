import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import RiskDashboard from "./components/Risk-Dashboard"
import RiskManagement from "./components/Risk-Register"
import Home from "./pages/Home"
import RiskMap from "./components/RiskMap"
import NewRisk from "./components/NewRisk"
function App() {
  return (
 <BrowserRouter>
  <Routes>
  <Route path="/" element ={<Home />} />
  <Route path="/Risk/Register" element={<RiskManagement />} />
  <Route path="/Risk/Dashboard" element={<RiskDashboard />} />
  <Route path="/Risk/Map" element={<RiskMap />} />
  <Route path="/Risk/New" element={<NewRisk />} />
  </Routes>
  </BrowserRouter>
  
  )
}

export default App
