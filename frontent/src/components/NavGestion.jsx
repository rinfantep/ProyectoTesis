import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavGestion() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-sky-600 shadow  mb-5 mt-24 xl:flex xl:items-center xl:justify-center ">
        <div className="flex pt-3 items-center justify-center md:pb-0 md:gap-3 sm:pb-0 xl:p-3">
          <h3
            onClick={() => navigate("/gestionarProvincia")}
            className="ml-5 text-neutral-100 hover:text-neutral-400 cursor-pointer text-xs md:text-lg sm:ml-0"
          >
            Provincia
          </h3>

          <h3
            onClick={() => navigate("/gestionarMunicipio")}
            className="ml-5 font-sans text-neutral-100 hover:text-neutral-400 cursor-pointer text-xs md:text-lg"
          >
            Municipio
          </h3>

          <h3
            onClick={() => navigate("/gestionarSector")}
            className="ml-5 font-sans text-neutral-100 hover:text-neutral-400 cursor-pointer text-xs md:text-lg"
          >
            Sectores
          </h3>

          <h3
            onClick={() => navigate("/gestionarTipoSector")}
            className="ml-5 font-sans text-neutral-100 hover:text-neutral-400 cursor-pointer text-xs md:text-lg"
          >
            Tipo Sector
          </h3>
        </div>
        <div className="flex gap-4 items-center justify-center pt-3 pb-2 sm:pt-0 sm:gap-3 md:pt-0 xl:pb-0 xl:ml-4">
          <h3
            onClick={() => navigate("/gestionarPropietario")}
            className="ml-5 font-sans text-neutral-100 hover:text-neutral-400 cursor-pointer sm:ml-0 text-xs md:text-lg"
          >
            Propietarios
          </h3>

          <h3
            onClick={() => navigate("/gestionarEspecie")}
            className="ml-5 font-sans text-neutral-100 hover:text-neutral-400 cursor-pointer text-xs md:text-lg"
          >
            Especie
          </h3>

          <h3
            onClick={() => navigate("/gestionarEnfermedades")}
            className="ml-5 font-sans text-neutral-100 hover:text-neutral-400 cursor-pointer text-xs md:text-lg "
          >
            Enfermedades
          </h3>

          <h3
            onClick={() => navigate("/gestionarAnimales")}
            className="ml-5 font-sans text-neutral-100 hover:text-neutral-400 cursor-pointer text-xs md:text-lg "
          >
            Animales
          </h3>
        </div>
      </nav>
    </>
  );
}
