import React from "react";
import { motion } from "framer-motion";
import Botones from "./botones";
const Barra = ()=>(
    <div className="flex justify-around w-full">
        <Botones text={"Telefonos"}/>
        <Botones text ={"Ordenadores"}/>
        <Botones text ={"Tablets"}/>
        <Botones text={"Cascos"}/>
    </div>
)
export default Barra