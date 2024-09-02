import { useState } from 'react';
import './App.css';
import Barra from './components/barra';
import { motion } from "framer-motion";

function App() {
  const [activeTab, setActiveTab] = useState("null")
  const [isVisible, setIsVisible] = useState(false);
  const [IsNight, SetNight] = useState("day")

  const handleMouseEnter = (tab) => {
    setActiveTab(tab);
    setIsVisible(false);
  }

  const handleMouseLeave = (tab) => {
    setActiveTab(tab);
    setIsVisible(true)
  }

  const handleIsNight = () => {
    SetNight(IsNight === "night" ? "day" : "night");
    console.log(IsNight)
  }
  return (
    <div className={`h-screen w-full  ${IsNight === "day" ? "bg-white" : "bg-black"}`}>
      {/* Header */}

      <motion.header className={`eoverflow-hidden relative ${IsNight === "day" ? "bg-gray-200" : "bg-gray-700"}  flex justify-between items-center p-4`} onMouseLeave={() => handleMouseLeave("null")}>
        <motion.button className='z-30' whileHover={{ scale: 1.2 }} transition={{duration: 0.2}} onMouseEnter={() => handleMouseEnter("menu")} ><img src='barra-de-menus.png' width={50}></img></motion.button>
        {activeTab === "menu" && <motion.div className=' w-full z-20 flex items-center justify-between absolute'><Barra /></motion.div>}
        <motion.h1 whileHover={{scale: 1.2}} transition={{duration: 0.2}} className={`${isVisible ? 'opacity-100' : 'opacity-0'} text-4xl`}>RGP Store</motion.h1>
        <motion.button className={` ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} `} whileHover={{ scale: 1.3 }} onClick={handleIsNight}><img className='h-10' src='luna.png' alt='Modo noche'></img></motion.button>
      </motion.header>

      {/* Body */}
      <body>
        
      </body>

    </div>
  );
}

export default App;
