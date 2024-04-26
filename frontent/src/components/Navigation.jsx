import {
  Bars3Icon,
  SunIcon,
  HomeIcon,
  DocumentIcon,
  ChartBarIcon,
  ChartPieIcon,
  ChartBarSquareIcon,
} from "@heroicons/react/24/solid";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(true);
  return (
    <>
      <nav className="bg-white px-6 shadow-md fixed right-0 left-0 top-0">
        <div className="flex h-16 items-center justify-between max-w-7xl mx-auto">
          <div className="sm:hidden">
            <button
              onClick={() => {
                setExpanded((curr) => !curr);
              }}
              className="rounded p-1 text-slate-500 transition-colors hover:bg-sky-600 hover:text-slate-100 focus:ring-2 focus:ring-slate-200"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex items-center md:flex">
            <div className="cursor-pointer" onClick={() => navigate("/home")}>
              <img src="/image/logo.png" alt="Logo" className="w-8 h-auto" />
            </div>
            <div onClick={() => navigate("/home")}>
              <h3 className="ml-5 font-sans hidden sm:block hover:text-sky-600 hover:shadow-sm text-neutral-700 cursor-pointer font-neutral-700 font-bold text-xl">
                Departamento de Sanidad Animal
              </h3>
            </div>
          </div>

          <div className="flex mr-5 ">
            <button className="text-slate-500 focus:ring-slate-200 focus:ring-2 hover:text-sky-600 rounded-full transition-colors focus:ring-offset-2 mr-5">
              <SunIcon className="h-6 w-6" />
            </button>
            <button className="text-slate-500 focus:ring-slate-200 focus:ring-2 hover:text-sky-600 rounded transition-colors focus:ring-offset-2">
              Login
            </button>
          </div>
        </div>
      </nav>

      <aside
        className={`fixed top-16 bottom-0 left-0 right-auto  ${expanded ? "hidden" : "sm:flex"} sm:flex`}
      >
        <nav className="h-screen flex flex-col bg-neutral-100 border-r shadow-sm w-44 gap-0.5">
          <div className="mt-3">
            <div
              className="pl-6  flex py-2 transition-colors hover:bg-sky-600 text-neutral-700 hover:text-neutral-100 items-center justify-start cursor-pointer"
              onClick={() => navigate("/home")}
            >
              <HomeIcon className="h-6 w-6" />
              <span className="ml-4 ">Home</span>
            </div>

            <hr className="text-solid-100 mt-2 w-40 mx-auto" />

            <div
              className="pl-6 mt-2 flex hover:bg-sky-600 text-neutral-700  py-2 transition-colors hover:text-neutral-100  items-center justify-start cursor-pointer"
              onClick={() => navigate("/gestionar")}
            >
              <DocumentIcon className="h-6 w-6 " />
              <span className="ml-4  ">Gestion</span>
            </div>

            <span className="flex justify-center text-base text-black p-2">
              Modelos
            </span>

            <div
              className="pl-6 flex hover:bg-sky-600 text-neutral-700  py-2 transition-colors hover:text-neutral-100  items-center justify-start cursor-pointer"
              onClick={() => navigate("/parteDiario")}
            >
              <DocumentIcon className="h-6 w-6 " />
              <span className="ml-4  ">Parte Diario</span>
            </div>

            <div
              className="pl-6 mt-2 flex hover:bg-sky-600 text-neutral-700  py-2 transition-colors hover:text-neutral-100  items-center justify-start cursor-pointer"
              onClick={() => navigate("/seguimientos")}
            >
              <DocumentIcon className="h-6 w-6 " />
              <span className="ml-4  ">Seguimientos</span>
            </div>

            <div
              className="pl-6 mt-2 flex hover:bg-sky-600 text-neutral-700  py-2 transition-colors hover:text-neutral-100  items-center justify-start cursor-pointer"
              onClick={() => navigate("/modeloClinica")}
            >
              <DocumentIcon className="h-6 w-6 " />
              <span className="ml-4  ">Modelo clínica</span>
            </div>

            <div
              className="pl-6 mt-2 flex hover:bg-sky-600 text-neutral-700  py-2 transition-colors hover:text-neutral-100  items-center justify-start cursor-pointer"
              onClick={() => navigate("/traslado")}
            >
              <DocumentIcon className="h-6 w-6 " />
              <span className="ml-4  ">Traslado</span>
            </div>

            <span className="flex justify-center text-base text-black p-2">
              Estadística
            </span>

            <div
              className="pl-6 flex hover:bg-sky-600 text-neutral-700  py-2 transition-colors hover:text-neutral-100  items-center justify-start cursor-pointer"
              onClick={() => navigate("/datosAnimales")}
            >
              <DocumentIcon className="h-6 w-6 " />
              <span className="ml-4  ">Datos</span>
            </div>

            <div
              className="pl-6 mt-2 flex hover:bg-sky-600 text-neutral-700  py-2 transition-colors hover:text-neutral-100  items-center justify-start cursor-pointer"
              onClick={() => navigate("/estadisticas")}
            >
              <ChartBarIcon className="h-6 w-6 " />
              <span className="ml-4  ">Estadisticas</span>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}
