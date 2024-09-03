import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const Botones = forwardRef(({text, onClick}, ref) =>(
    <motion.button ref={ref} onClick={onClick} className=" text-3xl p-6 " whileHover={{scale: 1.2}}>{text}</motion.button>
    
));

export default Botones;