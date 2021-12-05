import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "../pages/general/LandingPage";
import { NOT_FOUND } from "../pages/pagesPath";

export const convertRoutesToComponents = (routes) => {
    return (
      <Routes>
          {/* <Route path="/" element={<Navigate to={LandingPage} />} /> */}
        console.log("kks",routes);	
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
        <Route path="*" element={<Navigate to={NOT_FOUND}/>} /> 
       </Routes>
    );
  };
  