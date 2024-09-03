import React, { useState } from 'react';
import './App.css';
import Barra from './components/barra';
import { motion } from "framer-motion";
import Telefonos from './components/Telefonos';

function App() {
  const [activeTab, setActiveTab] = useState("null");
  const [isVisible, setIsVisible] = useState(false);
  const [isNight, setIsNight] = useState("day");
  const [page, setPage] = useState("Telefonos"); // Estado para la página actual

  const handleMouseEnter = (tab) => {
    setActiveTab(tab);
    setIsVisible(false);
  };

  const handleMouseLeave = (tab) => {
    setActiveTab(tab);
    setIsVisible(true);
  };

  const handleIsNight = () => {
    setIsNight(isNight === "night" ? "day" : "night");
  };

  const handlePageChange = (tab) => {
    setPage(tab);
  };

  return (
    <div className={`h-screen w-full ${isNight === "day" ? "bg-white" : "bg-black"}`}>
      {/* Header */}
      <motion.header className={`overflow-hidden relative ${isNight === "day" ? "bg-gray-200" : "bg-gray-700"} flex justify-between items-center p-4`} onMouseLeave={() => handleMouseLeave("null")}>
        <motion.button className='z-30' whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }} onMouseEnter={() => handleMouseEnter("menu")} >
          <img src='barra-de-menus.png' width={50} alt='Menu' />
        </motion.button>
        {activeTab === "menu" && <motion.div className='w-full z-20 flex items-center justify-between absolute'><Barra onPageChange={handlePageChange} /></motion.div>}
        <motion.h1 whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }} className={`${isVisible ? 'opacity-100' : 'opacity-0'} text-4xl`}>
          RGP Store
        </motion.h1>
        <motion.button className={` ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} `} whileHover={{ scale: 1.3 }} onClick={handleIsNight}>
          <img className='h-10' src='luna.png' alt='Modo noche' />
        </motion.button>
      </motion.header>

      {/* Body */}
      <main>
        {page === "Telefonos" && <Telefonos />}
        {/* Aquí puedes agregar otros componentes según el valor de `page` */}
      </main>
    </div>
  );
}

export default App;
