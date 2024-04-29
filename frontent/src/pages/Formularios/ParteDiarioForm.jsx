import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  updateNotiDiarias,
  createNotiDiarias,
  deleteNotiDiarias,
  getNotiDiarias,
  getAllNotiDiarias,
} from "../../api/notiDiarias.api";
import Navigation from "../../components/Navigation";
import { getAllMunicipio } from "../../api/municipio.api";
import { getAllPropietarios } from "../../api/propietarios.api";
import { getAllUnidad } from "../../api/unidad.api";

export default function MunicipioForm() {
  //select Municipio
  const [municipio, setMunicipio] = useState([]);

  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllMunicipio();
      setMunicipio(data);
    }
    fetchTable();
  }, []);
  //fin select municipio

  //select Propietario
  const [propietario, setPropietario] = useState([]);

  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllPropietarios();
      setPropietario(data);
    }
    fetchTable();
  }, []);
  //fin select propietario

  //select Unidad
  const [unidad, setUnidad] = useState([]);

  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllUnidad();
      setUnidad(data);
    }
    fetchTable();
  }, []);
  //fin select unidad

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
      await updateNotiDiarias(params.id, data);
    } else {
      await createNotiDiarias(data);
    }
    navigate("/parteDiario");
  });

  useEffect(() => {
    async function loadNoti() {
      if (params.id) {
        const { data } = await getNotiDiarias(params.id);
        setValue("no_orden", data.no_orden);
        setValue("unidad", data.unidad);
        setValue("codigo_entidad", data.codigo_entidad);
        setValue("codigo_especialista", data.codigo_especialista);
        setValue("poblacion", data.poblacion);
        setValue("enfermos", data.enfermos);
        setValue("muertos", data.muertos);
        setValue("sacrificados", data.sacrificados);
        setValue("fecha_confeccion", data.fecha_confeccion);
        setValue("fecha_confirmacion", data.fecha_confirmacion);
        setValue("fecha_cierre", data.fecha_cierre);
        setValue("descripcion", data.parte);
        setValue("municipio", data.municipio);
        setValue("propietario", data.propietario);
        setValue("propietario", data.latitud);
        setValue("propietario", data.longitud);
      }
    }
    loadNoti();
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
            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="No_orden" className="mb-2">
                No. orden
              </label>
              <input
                className=" border-gray-300 rounded-lg w-32 sm:w-60"
                type="number"
                id="no_orden"
                {...register("no_orden", { required: true })}
              />
              {errors.No_orden && <span>Introduzca un numero de orden</span>}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="unidad" className="mb-2">
                Unidad
              </label>
              <select
                className="form-control border-gray-300 rounded-lg sm:w-60"
                id="unidad"
                {...register("unidad", { required: true })}
              >
                <option value="">-------</option>
                {unidad.map((prov, i) => (
                  <option key={i} value={prov.unidad}>
                    {prov.id}
                  </option>
                ))}
              </select>
              {errors.unidad && <span>Introduzca una unidad</span>}
            </div>

            <div className="text-gray-700 grid">
              <label htmlFor="cuadrante" className="mb-2">
                Cuadrante
              </label>
              <input
                className=" border-gray-300 rounded-lg w-32 sm:w-60"
                type="number"
                id="cuadrante"
                {...register("cuadrante", { required: true })}
              />
              {errors.cuadrante && <span>Introduzca un cuadrante</span>}
            </div>

            <div className="text-gray-700 grid">
              <label htmlFor="codigo_entidad" className="mb-2">
                Codigo entidad
              </label>
              <input
                className=" border-gray-300 rounded-lg w-32 sm:w-60"
                type="number"
                id="codigo_entidad"
                {...register("codigo_entidad", { required: true })}
              />
              {errors.codigo_entidad && (
                <span>Introduzca el codigo de la entidad</span>
              )}
            </div>

            <div className="text-gray-700 grid">
              <label htmlFor="codigo_especialista" className="mb-2">
                Codigo especialista
              </label>
              <input
                className=" border-gray-300 rounded-lg w-32 sm:w-60"
                type="number"
                id="codigo_especialista"
                {...register("codigo_especialista", { required: true })}
              />
              {errors.codigo_especialista && (
                <span>Introduzca el codigo del especialista</span>
              )}
            </div>

            <div className="text-gray-700 grid">
              <label htmlFor="poblacion" className="mb-2">
                Poblacion
              </label>
              <input
                className=" border-gray-300 rounded-lg w-32 sm:w-60"
                type="number"
                id="poblacion"
                {...register("poblacion", { required: true })}
              />
              {errors.poblacion && <span>Introduzca la poblacion</span>}
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
              {errors.enfermos && <span>Introduzca los animales muertos</span>}
            </div>

            <div className="text-gray-700 grid mr-6">
              <label htmlFor="sac" className="mb-2">
                Sac
              </label>
              <input
                className=" border-gray-300 rounded-lg w-32 sm:w-60"
                type="number"
                id="sac"
                {...register("sac", { required: true })}
              />{" "}
              {errors.sac && <span>Introduzca los sac</span>}
            </div>

            <div className="text-gray-700 grid">
              <label htmlFor="fecha_envio" className="mb-2">
                Fecha de envio
              </label>
              <input
                className=" border-gray-300 rounded-lg w-32 sm:w-60"
                type="date"
                id="fecha_envio"
                {...register("fecha_envio", { required: true })}
              />
              {errors.fecha_envio && <span>Introduzca la fecha de envio</span>}
            </div>

            <div className="text-gray-700 grid">
              <label htmlFor="fecha_confeccion" className="mb-2">
                Fecha de confeccion
              </label>
              <input
                className=" border-gray-300 rounded-lg w-32 sm:w-60"
                type="date"
                id="fecha_confeccion"
                {...register("fecha_confeccion", { required: true })}
              />
              {errors.fecha_confeccion && (
                <span>Introduzca la fecha de confeccion</span>
              )}
            </div>

            <div className="text-gray-700 grid">
              <label htmlFor="fecha_cierre" className="mb-2">
                Fecha de cierre
              </label>
              <input
                className=" border-gray-300 rounded-lg w-32 sm:w-60"
                type="date"
                id="fecha_cierre"
                {...register("fecha_cierre", { required: true })}
              />
              {errors.fecha_cierre && (
                <span>Introduzca la fecha de cierre</span>
              )}
            </div>

            <div className="text-gray-700 grid">
              <label htmlFor="parte" className="mb-2">
                Parte
              </label>
              <input
                className=" border-gray-300 rounded-lg w-32 sm:w-60"
                type="text"
                id="parte"
                {...register("parte", { required: true })}
              />
              {errors.parte && <span>Introduzca el parte</span>}
            </div>

            <div className="text-gray-700 grid">
              <label htmlFor="municipio" className="mb-2">
                Municipio
              </label>
              <select
                className=" border-gray-300 rounded-lg sm:w-60"
                id="municipio"
                {...register("municipio", { required: true })}
              >
                <option value="">-------</option>
                {municipio.map((muni, i) => (
                  <option key={i} value={muni.municipio}>
                    {muni.municipio}
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

            <div className="flex justify-between mt-4 ">
              <button className="bg-sky-600 text-white w-20 rounded-sm hover:bg-sky-700 h-7">
                {params.id ? "Actualizar" : "Añadir"}
              </button>
              {params.id && (
                <button
                  className="bg-red-600 text-white w-16 rounded-sm hover:bg-red-700 h-7"
                  onClick={async () => {
                    await deleteNotiDiarias(params.id);

                    navigate("/parteDiario");
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
