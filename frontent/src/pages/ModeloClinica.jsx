import React from "react";
import Navigation from "../components/Navigation";

import { ModeloClinicaCanino } from "./Tablas/ModeloClinicaCanino";

export default function ModeloClinica() {
  return (
    <>
      <Navigation />

      <div className="sm:ml-44 mt-16 sm:mt-16">
        <ModeloClinicaCanino />
      </div>
    </>
  );
}
