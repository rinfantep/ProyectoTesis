import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavEstadisticas() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-sky-600 shadow  mb-5 mt-24 xl:flex xl:items-center xl:justify-center ">
        <div className="flex pt-3 items-center justify-center md:pb-0 md:gap-3 sm:pb-0 xl:p-3">
          <h3
            onClick={() => navigate("/gestionarProvincia")}
            className="ml-5 text-neutral-100 hover:text-neutral-400 cursor-pointer text-xs md:text-lg sm:ml-0"
          >
            Bayamo
          </h3>

          <h3
            onClick={() => navigate("/gestionarMunicipio")}
            className="ml-5 font-sans text-neutral-100 hover:text-neutral-400 cursor-pointer text-xs md:text-lg"
          >
            Yara
          </h3>
        </div>
      </nav>
    </>
  );
}
