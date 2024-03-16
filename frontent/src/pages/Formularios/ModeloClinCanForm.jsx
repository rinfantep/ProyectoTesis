import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  updateClinicaCanina,
  createClinicaCanina,
  getClinicaCanina,
  deleteClinicaCanina,
} from "../../api/clinicaCanina.api";
import { getAllProvincia } from "../../api/provincia.api";
import { getAllSectores } from "../../api/sectores.api";
import { getAllEnfermedades } from "../../api/enfermedades.api";
import { getAllEspecies } from "../../api/especies.api";
import { getAllMunicipio } from "../../api/municipio.api";

import Navigation from "../../components/Navigation";

export default function ModeloClinicaCaninoForm() {
  //select Provincia
  const [provincias, setProvincias] = useState([]);

  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllProvincia();
      setProvincias(data);
    }
    fetchTable();
  }, []);
  //fin select provincia

  //select Sector
  const [sector, setSector] = useState([]);

  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllSectores();
      setSector(data);
    }
    fetchTable();
  }, []);
  //fin select Sector

  //select Enfermedad
  const [enfermedad, setEnfermedad] = useState([]);

  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllEnfermedades();
      setEnfermedad(data);
    }
    fetchTable();
  }, []);
  //fin select Enfermedad

  //select Especie
  const [especies, setEspecies] = useState([]);

  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllEspecies();
      setEspecies(data);
    }
    fetchTable();
  }, []);
  //fin select Especie

  //select Municipio
  const [municipios, setMunicipios] = useState([]);

  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllMunicipio();
      setMunicipios(data);
    }
    fetchTable();
  }, []);
  //fin select Municipio

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateClinicaCanina(params.id, data);
    } else {
      await createClinicaCanina(data);
    }
    navigate("/modeloClinica");
  });

  useEffect(() => {
    async function loadClinica() {
      if (params.id) {
        const { data } = await getClinicaCanina(params.id);
        setValue("nuevosBrotes", data.nuevosBrotes);
        setValue("nuevosEnfermos", data.nuevosEnfermos);
        setValue("muertos", data.muertos);
        setValue("sacrificados", data.sacrificados);
        setValue("tratados", data.tratados);
        setValue("vacunados", data.vacunados);
        setValue("centroInformante", data.centroInformante);

        setValue("enfermedad", data.enfermedad);
        setValue("sector", data.sector);
        setValue("provincia", data.provincia);
        setValue("especie", data.especie);
      }
    }
    loadClinica();
  }, []);

  return (
    <>
      <Navigation />

      <div className="sm:ml-44 mt-16 sm:mt-16 ">
        <div className="flex justify-center items-center h-full sm:mt-24">
          <form
            onSubmit={onSubmit}
            className="py-4 px-6 bg-white rounded-xl  grid grid-cols-2 xl:grid-cols-3"
          >
            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="nuevosBrotes" className="mb-2">
                Nuevos Brotes
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-60"
                type="text"
                id="nuevosBrotes"
                {...register("nuevosBrotes", { required: true })}
              />
              {errors.nuevosBrotes && (
                <span>Introduzca cantidad de brotes</span>
              )}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="nuevosEnfermos" className="mb-2">
                Nuevos Enfermos
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-60"
                type="text"
                id="nuevosEnfermos"
                {...register("nuevosEnfermos", { required: true })}
              />
              {errors.nuevosEnfermos && (
                <span>Introduzca cantidad de animales enfermos</span>
              )}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="muertos" className="mb-2">
                Muertos
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-60"
                type="text"
                id="muertos"
                {...register("muertos", { required: true })}
              />
              {errors.muertos && (
                <span>Introduzca cantidad de animales muertos</span>
              )}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="sacrificados" className="mb-2">
                Sacrificados
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-60"
                type="text"
                id="sacrificados"
                {...register("sacrificados", { required: true })}
              />
              {errors.sacrificados && (
                <span>Introduzca cantidad de animales sacrificados</span>
              )}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="tratados" className="mb-2">
                Tratados
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-60"
                type="text"
                id="tratados"
                {...register("tratados", { required: true })}
              />
              {errors.tratados && (
                <span>Introduzca cantidad de animales tratados</span>
              )}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="vacunados" className="mb-2">
                Vacunados
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-60"
                type="text"
                id="vacunados"
                {...register("vacunados", { required: true })}
              />
              {errors.vacunados && (
                <span>Introduzca cantidad de animales vacunados</span>
              )}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="centroInformante" className="mb-2">
                Centro Informante
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-60"
                type="text"
                id="centroInformante"
                {...register("centroInformante", { required: true })}
              />
              {errors.centroInformante && (
                <span>Introduzca el Centro Informante</span>
              )}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="enfermedad" className="mb-2">
                Enfermedad
              </label>
              <select
                className="form-control border-gray-300 rounded-lg sm:w-60"
                id="enfermedad"
                {...register("enfermedad", { required: true })}
              >
                <option value="">-------</option>
                {enfermedad.map((enfe) => (
                  <option key={enfe.enfermedad} value={enfe.enfermedad}>
                    {enfe.enfermedad}
                  </option>
                ))}
              </select>
              {errors.enfermedad && <span>Introduzca una enfermedad</span>}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="sector" className="mb-2">
                Sector
              </label>
              <select
                className="form-control border-gray-300 rounded-lg sm:w-60"
                id="sector"
                {...register("sector", { required: true })}
              >
                <option value="">-------</option>
                {sector.map((sect) => (
                  <option key={sect.sector} value={sect.sector}>
                    {sect.sector}
                  </option>
                ))}
              </select>
              {errors.sector && <span>Introduzca un sector</span>}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="municipio" className="mb-2">
                Municipio
              </label>
              <select
                className="form-control border-gray-300 rounded-lg sm:w-60"
                id="municipio"
                {...register("municipio", { required: true })}
              >
                <option value="">-------</option>
                {municipios.map((prov, i) => (
                  <option key={i} value={prov.municipio}>
                    {prov.municipio}
                  </option>
                ))}
              </select>
              {errors.municipio && <span>Introduzca un municipio</span>}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="provincia" className="mb-2">
                Provincia
              </label>
              <select
                className="form-control border-gray-300 rounded-lg sm:w-60"
                id="provincia"
                {...register("provincia", { required: true })}
              >
                <option value="">-------</option>
                {provincias.map((prov) => (
                  <option key={prov.provincia} value={prov.provincia}>
                    {prov.provincia}
                  </option>
                ))}
              </select>
              {errors.provincia && <span>Introduzca un provincia</span>}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="especie" className="mb-2">
                Especie
              </label>
              <select
                className="form-control border-gray-300 rounded-lg sm:w-60"
                id="especie"
                {...register("especie", { required: true })}
              >
                <option value="">-------</option>
                {especies.map((esp, i) => (
                  <option key={i} value={esp.especies}>
                    {esp.especies}
                  </option>
                ))}
              </select>
              {errors.especies && <span>Introduzca una especie</span>}
            </div>

            <div className="flex justify-between mt-4 ">
              <button className="bg-sky-600 text-white w-20 rounded-sm hover:bg-sky-700 h-7">
                {params.id ? "Actualizar" : "Añadir"}
              </button>
              {params.id && (
                <button
                  className="bg-red-600 text-white w-16 rounded-sm hover:bg-red-700 h-7"
                  onClick={async () => {
                    await deleteClinicaCanina(params.id);

                    navigate("/modeloClinica");
                  }}
                >
                  Delete
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
