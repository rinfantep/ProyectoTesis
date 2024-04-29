import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  updateUnidad,
  createUnidad,
  getUnidad,
  deleteUnidad,
} from "../../api/unidad.api";

import { getAllProvincia } from "../../api/provincia.api";
import { getAllMunicipio } from "../../api/municipio.api";

import Navigation from "../../components/Navigation";

export default function GestionarUnidadForm() {
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
      await updateUnidad(params.id, data);
    } else {
      await createUnidad(data);
    }
    navigate("/gestionarUnidad");
  });

  useEffect(() => {
    async function loadUnidad() {
      if (params.id) {
        const { data } = await getUnidad(params.id);
        setValue("nombre", data.nombre);
        setValue("provincia_uni", data.provincia_uni);
        setValue("municipio_uni", data.municipio_uni);
      }
    }
    loadUnidad();
  }, []);

  return (
    <>
      <Navigation />

      <div className="sm:ml-44 mt-16 sm:mt-16 ">
        <div className="flex justify-center items-center h-screen -mt-16 w-full">
          <form
            onSubmit={onSubmit}
            className="py-8 px-6 bg-white rounded-xl max-w-sm sm:max-w-xl"
          >
            <div className="text-gray-700 grid">
              <label htmlFor="nombre" className="mb-2">
                Unidad
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-96"
                type="text"
                id="nombre"
                {...register("nombre", { required: true })}
              />
              {errors.nombre && <span>Introduzca una unidad</span>}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="provincia_uni" className="mb-2">
                Provincia
              </label>
              <select
                className="form-control border-gray-300 rounded-lg sm:w-60"
                id="provincia_uni"
                {...register("provincia_uni", { required: true })}
              >
                <option value="">-------</option>
                {provincias.map((prov, i) => (
                  <option key={i} value={prov.provincia_uni}>
                    {prov.provincia}
                  </option>
                ))}
              </select>
              {errors.provincia && <span>Introduzca un provincia</span>}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="municipio_uni" className="mb-2">
                Municipio
              </label>
              <select
                className="form-control border-gray-300 rounded-lg sm:w-60"
                id="municipio_uni"
                {...register("municipio_uni", { required: true })}
              >
                <option value="">-------</option>
                {municipios.map((prov, i) => (
                  <option key={i} value={prov.municipio_uni}>
                    {prov.municipio}
                  </option>
                ))}
              </select>
              {errors.municipio && <span>Introduzca un municipio</span>}
            </div>

            <div className="flex justify-between mt-4 ">
              <button className="bg-sky-600 text-white w-20 rounded-sm hover:bg-sky-700 h-7">
                {params.id ? "Actualizar" : "Añadir"}
              </button>
              {params.id && (
                <button
                  className="bg-red-600 text-white w-16 rounded-sm hover:bg-red-700 h-7"
                  onClick={async () => {
                    await deleteProvincia(params.id);

                    navigate("/gestionarProvincia");
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
