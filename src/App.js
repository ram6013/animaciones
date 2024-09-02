import { useState } from 'react';
import './App.css';
import Barra from './components/barra';
import { motion } from "framer-motion";

function App() {
  const [activeTab, setActiveTab] = useState("null")
  const [isVisible, setIsVisible] = useState(true);
  const [IsNight, SetNight] = useState("day")

  const handleMouseEnter= (tab) => {
    setActiveTab(tab);
    setIsVisible(false);
  }

  const handleMouseLeave = (tab) =>{
      setActiveTab(tab);
      setIsVisible(true)
  }

  const handleIsNight = ()=>{
    SetNight(IsNight === "night" ? "day" : "night");
    console.log(IsNight)
  }
  return (
    <div className={` h-screen w-full  ${IsNight === "day" ? "bg-white" : "bg-black"}`}>
      <motion.header className={` ${IsNight === "day" ? "bg-gray-200" : "bg-gray-700"}  flex justify-start items-center p-4`} onMouseLeave={()=>handleMouseLeave("null")}>
        <div className='p-4 flex justify-start z-10'>
        <motion.button whileHover={{ scale: 1.5}} onMouseEnter={()=>handleMouseEnter("menu")} ><img src='barra-de-menus.png' width={50}></img></motion.button>
        </div>
        {activeTab === "menu" && <motion.div className='absolute w-full flex items-center justify-around'><Barra/></motion.div>}
        <div className='bg-red-300 absolute w-full flex items-center justify-center'>
        <motion.h1 className={`pointer-events-none ${isVisible ? 'opacity-100' : 'opacity-0'} ${isVisible ? '' : 'pointer-events-none absolute top-0 left-0 right-0 bottom-0'} text-4xl`}>RGP Store</motion.h1>
        </div>
        <div className='flex justify-end w-full'>
        <motion.button className={`z-10 ${isVisible ? 'opacity-100' : 'opacity-0'} `} whileHover={{scale: 1.5}} onClick={handleIsNight}><img className='h-10' src='luna.png' alt='Modo noche'></img></motion.button>
        </div>
      </motion.header>
    </div>
  );
}

export default App;
