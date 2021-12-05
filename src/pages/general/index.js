import React from "react";
import { convertRoutesToComponents } from "../../helpers";
import { publicRoutes } from "./routes";


const GENERAL = () => {
console.log("GENERAL", publicRoutes);
  return convertRoutesToComponents(publicRoutes);
    };

export default GENERAL;
