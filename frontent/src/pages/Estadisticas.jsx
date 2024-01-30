import React from "react";
import Navigation from "../components/Navigation";
import NavGestion from "../components/NavGestion";

import Bayamo from "./Estadisticas/Bayamo";
import Yara from "./Estadisticas/Yara";

export default function Estadisticas() {
  return (
    <>
      <Navigation />

      <div className="sm:ml-44 mt-16 sm:mt-16">
        <Bayamo />
        <Yara />
      </div>
    </>
  );
}
