import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  updatePropietario,
  createPropietario,
  getPropietario,
  deletePropietario,
} from "../../api/propietarios.api";
import { getAllSectores } from "../../api/sectores.api";
import { getAllMunicipio } from "../../api/municipio.api";
import { getAllProvincia } from "../../api/provincia.api";
import Navigation from "../../components/Navigation";

export default function GestionarPropietarioForm() {
  //select sectores
  const [sector, setSector] = useState([]);

  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllSectores();
      setSector(data);
    }
    fetchTable();
  }, []);

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

  //select Provincia
  const [provincia, setProvincia] = useState([]);

  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllProvincia();
      setProvincia(data);
    }
    fetchTable();
  }, []);

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
      await updatePropietario(params.id, data);
    } else {
      await createPropietario(data);
    }
    navigate("/gestionarPropietario");
  });

  useEffect(() => {
    async function loadPropietario() {
      if (params.id) {
        const { data } = await getPropietario(params.id);
        setValue("propietarios", data.propietarios);
        setValue("sector", data.sector);
        setValue("municipio", data.municipio);
        setValue("provincia", data.provincia);
      }
    }
    loadPropietario();
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
              <label htmlFor="propietario" className="mb-2">
                Propietario
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-96"
                type="text"
                id="propietario"
                {...register("propietario", { required: true })}
              />
              {errors.propietarios && <span>Introduzca un propietario</span>}
            </div>

            <div className="text-gray-700 grid">
              <label htmlFor="sector" className="mb-2">
                Sector
              </label>
              <select
                className="form-control border-gray-300 rounded-lg sm:w-96"
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

            <div className="text-gray-700 grid">
              <label htmlFor="municipio" className="mb-2">
                Municipio
              </label>
              <select
                className="form-control border-gray-300 rounded-lg sm:w-96"
                id="municipio"
                {...register("municipio", { required: true })}
              >
                <option value="">-------</option>
                {municipio.map((muni) => (
                  <option key={muni.municipio} value={muni.municipio}>
                    {muni.municipio}
                  </option>
                ))}
              </select>
              {errors.municipio && <span>Introduzca un municipio</span>}
            </div>

            <div className="text-gray-700 grid">
              <label htmlFor="provincia" className="mb-2">
                Provincia
              </label>
              <select
                className="form-control border-gray-300 rounded-lg sm:w-96"
                id="provincia"
                {...register("provincia", { required: true })}
              >
                <option value="">-------</option>
                {provincia.map((prov) => (
                  <option key={prov.provincia} value={prov.provincia}>
                    {prov.provincia}
                  </option>
                ))}
              </select>
              {errors.provincia && <span>Introduzca un provincia</span>}
            </div>

            <div className="flex justify-between mt-4 ">
              <button className="bg-sky-600 text-white w-20 rounded-sm hover:bg-sky-700 h-7">
                {params.id ? "Actualizar" : "Añadir"}
              </button>
              {params.id && (
                <button
                  className="bg-red-600 text-white w-16 rounded-sm hover:bg-red-700 h-7"
                  onClick={async () => {
                    await deletePropietario(params.id);

                    navigate("/gestionarPropietario");
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

/*<div className="text-gray-700 grid">
    <label htmlFor="sectores" className="mb-2">
      Sector
    </label>
    <input
      className="form-control border-gray-300 rounded-lg sm:w-96"
      type="text"
      id="sectores"
      {...register("sectores", { required: true })}
    />
    {errors.sectores && <span>Introduzca un sector</span>}
  </div>

  <div className="text-gray-700 grid">
              <label htmlFor="municipio" className="mb-2">
                Municipio
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-96"
                type="text"
                id="municipio"
                {...register("municipio", { required: true })}
              />
              {errors.municipio && <span>Introduzca un municipio</span>}
            </div>
  */
