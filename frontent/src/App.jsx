import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TaskPage from "./components/Task";
import TaskForm from "./components/TaskForm";
import Tabla from "./components/Tabla";
import TablaComp from "./components/TablaComponent";

import DatosAnimales from "./pages/Provincia/DatosAnimales";

//Estadisticas
import Estadisticas from "./pages/Estadistica";
import EstadisticasBayamo from "./pages/Estadisticas/EstadisticasBayamo";
import EstadisticasYara from "./pages/Estadisticas/EstadisticasYara";

import { Toaster } from "react-hot-toast";

//Page Gestion
import Mapa from "./pages/Mapa";
import Home from "./pages/Home";
import Gestionar from "./pages/Gestionar";
import GestionarProvincia from "./pages/Base de Datos/GestionarProvincia";
import GestionarMunicipio from "./pages/Base de Datos/GestionarMunicipio";
import GestionarSector from "./pages/Base de Datos/GestionarSector";
import GestionarTipoSector from "./pages/Base de Datos/GestionarTipoSector";
import GestionarPropietario from "./pages/Base de Datos/GestionarPropietario";
import GestionarEspecie from "./pages/Base de Datos/GestionarEspecie";
import GestionarEnfermedades from "./pages/Base de Datos/GestionarEnfermedades";

import ParteDiario from "./pages/Tablas/ParteDiario";
import Seguimientos from "./pages/Tablas/Seguimientos";
import ModeloClinica from "./pages/ModeloClinica";

//Form
import GestionarProvinciaForm from "./pages/Formularios/GestionarProvinciaForm";
import GestionarPropietarioForm from "./pages/Formularios/GestionarPropietarioForm";
import GestionarMunicipioForm from "./pages/Formularios/GestionarMunicipioForm";
import GestionarSectorForm from "./pages/Formularios/GestionarSectorForm";
import GestionarTipoSectorForm from "./pages/Formularios/GestionarTipoSectorForm";
import GestionarEspecieForm from "./pages/Formularios/GestionarEspecieForm";
import GestionarEnfermedadForm from "./pages/Formularios/GestionarEnfermedadForm";

import ParteDiarioForm from "./pages/Formularios/ParteDiarioForm";
import SeguimientosForm from "./pages/Formularios/SeguimientosForm";
import ModeloClinCanForm from "./pages/Formularios/ModeloClinCanForm";

//Icons
import { SunIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/parteDiario" element={<ParteDiario />} />
          <Route path="/seguimientos" element={<Seguimientos />} />
          <Route path="/modeloClinica" element={<ModeloClinica />} />

          <Route path="/datosAnimales" element={<DatosAnimales />} />

          <Route path="/estadisticas" element={<Estadisticas />} />
          <Route path="/estadisticasBayamo" element={<EstadisticasBayamo />} />
          <Route path="/estadisticasYara" element={<EstadisticasYara />} />

          <Route path="/gestionar" element={<Gestionar />} />
          <Route path="/gestionarProvincia" element={<GestionarProvincia />} />
          <Route path="/gestionarMunicipio" element={<GestionarMunicipio />} />
          <Route path="/gestionarSector" element={<GestionarSector />} />
          <Route
            path="/gestionarTipoSector"
            element={<GestionarTipoSector />}
          />

          <Route
            path="/gestionarPropietario"
            element={<GestionarPropietario />}
          />

          <Route path="/gestionarEspecie" element={<GestionarEspecie />} />

          <Route
            path="/gestionarEnfermedades"
            element={<GestionarEnfermedades />}
          />

          <Route
            path="/gestionarProvinciaForm"
            element={<GestionarProvinciaForm />}
          />
          <Route
            path="/gestionarProvinciaForm/:id"
            element={<GestionarProvinciaForm />}
          />

          <Route
            path="/gestionarMunicipioForm"
            element={<GestionarMunicipioForm />}
          />
          <Route
            path="/gestionarMunicipioForm/:id"
            element={<GestionarMunicipioForm />}
          />

          <Route
            path="/gestionarSectorForm"
            element={<GestionarSectorForm />}
          />
          <Route
            path="/gestionarSectorForm/:id"
            element={<GestionarSectorForm />}
          />

          <Route
            path="/gestionarTipoSectorForm"
            element={<GestionarTipoSectorForm />}
          />
          <Route
            path="/gestionarTipoSectorForm/:id"
            element={<GestionarTipoSectorForm />}
          />

          <Route
            path="/gestionarPropietarioForm"
            element={<GestionarPropietarioForm />}
          />
          <Route
            path="/gestionarPropietarioForm/:id"
            element={<GestionarPropietarioForm />}
          />

          <Route
            path="/gestionarEspecieForm"
            element={<GestionarEspecieForm />}
          />
          <Route
            path="/gestionarEspecieForm/:id"
            element={<GestionarEspecieForm />}
          />

          <Route
            path="/gestionarEnfermedadForm"
            element={<GestionarEnfermedadForm />}
          />
          <Route
            path="/gestionarEnfermedadForm/:id"
            element={<GestionarEnfermedadForm />}
          />

          <Route path="/parteDiarioForm" element={<ParteDiarioForm />} />
          <Route path="/parteDiarioForm/:id" element={<ParteDiarioForm />} />

          <Route path="/seguimientosForm" element={<SeguimientosForm />} />
          <Route path="/seguimientosForm/:id" element={<SeguimientosForm />} />

          <Route path="/modeloClinCanForm" element={<ModeloClinCanForm />} />
          <Route
            path="/modeloClinCanForm/:id"
            element={<ModeloClinCanForm />}
          />

          <Route path="/mapa" element={<Mapa />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/tasks-create" element={<TaskForm />} />
          <Route path="/tasks/:id" element={<TaskForm />} />
          <Route path="/tabla" element={<Tabla />} />
          <Route path="/tablaComp" element={<TablaComp />} />
        </Routes>
        <Toaster />
      </>
    </BrowserRouter>
  );
}

export default App;
