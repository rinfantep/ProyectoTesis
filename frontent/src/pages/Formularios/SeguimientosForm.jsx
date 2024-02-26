import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import Navigation from "../../components/Navigation";
import { getAllProvincia } from "../../api/provincia.api";
import {
  updateSeguimiento,
  createSeguimiento,
  deleteSeguimiento,
  getSeguimiento,
} from "../../api/seguimientos.api";

export default function SeguimientosForm() {
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
      await updateSeguimiento(params.id, data);
    } else {
      await createSeguimiento(data);
    }
    navigate("/seguimientos");
  });

  useEffect(() => {
    async function loadSegui() {
      if (params.id) {
        const { data } = await getSeguimiento(params.id);
        setValue("provincia", data.provincia);
        setValue("numOrden", data.numOrden);
        setValue("enfermos", data.enfermos);
        setValue("muertos", data.muertos);
        setValue("sacrificados", data.sacrificados);
        setValue("recuperados", data.recuperados);
        setValue("observaciones", data.observaciones);
      }
    }
    loadSegui();
  }, []);

  return (
    <>
      <Navigation />

      <div className="sm:ml-44 mt-16 sm:mt-16 ">
        <div className="flex justify-center items-center h-full sm:mt-24">
          <form
            onSubmit={onSubmit}
            className="py-4 px-6 bg-white rounded-xl  grid grid-cols-2 xl:grid-cols-3 "
          >
            <div className="text-gray-700 grid">
              <label htmlFor="provincia" className="mb-2">
                Provincia
              </label>
              <select
                className=" border-gray-300 rounded-lg sm:w-60"
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
              <label htmlFor="numOrden" className="mb-2">
                No. orden
              </label>
              <input
                className=" border-gray-300 rounded-lg w-32 sm:w-60"
                type="number"
                id="numOrden"
                {...register("numOrden", { required: true })}
              />
              {errors.numOrden && <span>Introduzca un numero de orden</span>}
            </div>

            <div className="text-gray-700 grid">
              <label htmlFor="enfermos" className="mb-2">
                Enfermos
              </label>
              <input
                className=" border-gray-300 rounded-lg w-32 sm:w-60"
                type="number"
                id="enfermos"
                {...register("enfermos", { required: true })}
              />
              {errors.enfermos && <span>Introduzca los animales enfermos</span>}
            </div>

            <div className="text-gray-700 grid">
              <label htmlFor="muertos" className="mb-2">
                Muertos
              </label>
              <input
                className=" border-gray-300 rounded-lg w-32 sm:w-60"
                type="number"
                id="muertos"
                {...register("muertos", { required: true })}
              />
              {errors.muertos && <span>Introduzca los animales muertos</span>}
            </div>

            <div className="text-gray-700 grid mr-6">
              <label htmlFor="sacrificados" className="mb-2">
                Sacrificados
              </label>
              <input
                className=" border-gray-300 rounded-lg w-32 sm:w-60"
                type="number"
                id="sacrificados"
                {...register("sacrificados", { required: true })}
              />{" "}
              {errors.sacrificados && <span>Introduzca los sacrificados</span>}
            </div>

            <div className="text-gray-700 grid mr-6">
              <label htmlFor="recuperados" className="mb-2">
                Recuperados
              </label>
              <input
                className=" border-gray-300 rounded-lg w-32 sm:w-60"
                type="number"
                id="recuperados"
                {...register("recuperados", { required: true })}
              />{" "}
              {errors.recuperados && <span>Introduzca los recuperados</span>}
            </div>

            <div className="text-gray-700 grid">
              <label htmlFor="observaciones" className="mb-2">
                Observaciones
              </label>
              <input
                className=" border-gray-300 rounded-lg w-32 sm:w-60"
                type="text"
                id="observaciones"
                {...register("observaciones", { required: true })}
              />
              {errors.observaciones && (
                <span>Introduzca las observaciones</span>
              )}
            </div>

            <div className="flex justify-between mt-4 ">
              <button className="bg-sky-600 text-white w-20 rounded-sm hover:bg-sky-700 h-7">
                {params.id ? "Actualizar" : "Añadir"}
              </button>
              {params.id && (
                <button
                  className="bg-red-600 text-white w-16 rounded-sm hover:bg-red-700 h-7"
                  onClick={async () => {
                    await deleteSeguimiento(params.id);

                    navigate("/seguimientos");
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
