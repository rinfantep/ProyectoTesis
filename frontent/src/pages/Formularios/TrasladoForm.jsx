import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  updateTraslado,
  createTraslado,
  getTraslado,
  deleteTraslado,
} from "../../api/traslado.api";
import { getAllProvincia } from "../../api/provincia.api";
import { getAllMunicipio } from "../../api/municipio.api";
import { getAllPropietarios } from "../../api/propietarios.api";

import Navigation from "../../components/Navigation";

export default function TrasladoForm() {
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

  //select Propietario
  const [propietario, setPropietario] = useState([]);

  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllPropietarios();
      setPropietario(data);
    }
    fetchTable();
  }, []);
  //fin select Propietario

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
      await updateTraslado(params.id, data);
    } else {
      await createTraslado(data);
    }
    navigate("/traslado");
  });

  useEffect(() => {
    async function loadTraslado() {
      if (params.id) {
        const { data } = await getTraslado(params.id);
        setValue("provincia", data.provincia);
        setValue("municipio", data.municipio);
        setValue("propietario", data.propietario);
        setValue("tipoAnimal", data.tipoAnimal);
        setValue("investigaciones", data.investigaciones);
        setValue("provinciaDestino", data.provinciaDestino);
        setValue("municipioDestino", data.municipioDestino);
        setValue("propietarioDestino", data.propietarioDestino);
        setValue("solicita", data.solicita);
        setValue("tramita", data.tramita);
        setValue("autoriza", data.autoriza);
        setValue("nacion", data.nacion);
      }
    }
    loadTraslado();
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

            <div className="text-gray-700 grid">
              <label htmlFor="propietario" className="mb-2">
                Propietario
              </label>
              <select
                className=" border-gray-300 rounded-lg sm:w-60"
                id="propietario"
                {...register("propietario", { required: true })}
              >
                <option value="">-------</option>
                {propietario.map((prop, i) => (
                  <option key={i} value={prop.propietario}>
                    {prop.propietario}
                  </option>
                ))}
              </select>
              {errors.propietario && <span>Introduzca un propietario</span>}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="tipoAnimal" className="mb-2">
                Tipo Animal
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-60"
                type="text"
                id="tipoAnimal"
                {...register("tipoAnimal", { required: true })}
              />
              {errors.tipoAnimal && <span>Introduzca el tipo de animal</span>}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="investigaciones" className="mb-2">
                Investigaciones
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-60"
                type="text"
                id="investigaciones"
                {...register("investigaciones", { required: true })}
              />
              {errors.investigaciones && (
                <span>Introduzca las investigaciones</span>
              )}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="provinciaDestino" className="mb-2">
                Provincia de destino
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-60"
                type="text"
                id="provinciaDestino"
                {...register("provinciaDestino", { required: true })}
              />
              {errors.provinciaDestino && (
                <span>Introduzca la provincia de destino</span>
              )}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="municipioDestino" className="mb-2">
                Municipio de destino
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-60"
                type="text"
                id="municipioDestino"
                {...register("municipioDestino", { required: true })}
              />
              {errors.municipioDestino && (
                <span>Introduzca el municipio de destino</span>
              )}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="propietarioDestino" className="mb-2">
                Propietario destino
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-60"
                type="text"
                id="propietarioDestino"
                {...register("propietarioDestino", { required: true })}
              />
              {errors.propietarioDestino && (
                <span>Introduzca el propietario de destino</span>
              )}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="solicita" className="mb-2">
                Solicita
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-60"
                type="text"
                id="solicita"
                {...register("solicita", { required: true })}
              />
              {errors.solicita && (
                <span>Introduzca quien solicita el traslado</span>
              )}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="tramita" className="mb-2">
                Tramita
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-60"
                type="text"
                id="tramita"
                {...register("tramita", { required: true })}
              />
              {errors.tramita && (
                <span>Introduzca quien tramita el traslado</span>
              )}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="autoriza" className="mb-2">
                Autoriza
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-60"
                type="text"
                id="autoriza"
                {...register("autoriza", { required: true })}
              />
              {errors.autoriza && (
                <span>Introduzca quien autoriza el traslado</span>
              )}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="nacion" className="mb-2">
                Nacion
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-60"
                type="text"
                id="nacion"
                {...register("nacion", { required: true })}
              />
              {errors.nacion && <span>Introduzca la nacion</span>}
            </div>

            <div className="flex justify-between mt-4 ">
              <button className="bg-sky-600 text-white w-20 rounded-sm hover:bg-sky-700 h-7">
                {params.id ? "Actualizar" : "Añadir"}
              </button>
              {params.id && (
                <button
                  className="bg-red-600 text-white w-16 rounded-sm hover:bg-red-700 h-7"
                  onClick={async () => {
                    await deleteTraslado(params.id);

                    navigate("/traslado");
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
