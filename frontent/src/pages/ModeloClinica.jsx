import React from "react";
import Navigation from "../components/Navigation";
import { ModeloClinicaCanino } from "./Tablas/ModeloClinicaCanino";


export default function ModeloClinica() {
  return (
    <>
      <Navigation />

      <div className="sm:ml-44 mt-20 sm:mt-20">        
        <ModeloClinicaCanino />
      </div>
    </>
  );
}
