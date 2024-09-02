import React from "react";
import { motion } from "framer-motion";

const Botones = ({text})=>(
    <motion.button className=" text-2xl p-6 " whileHover={{scale: 1.2}}>{text}</motion.button>
    
)

export default Botones;