import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  updateMunicipio,
  createMunicipio,
  getMunicipio,
  deleteMunicipio,
} from "../../api/municipio.api";
import Navigation from "../../components/Navigation";

export default function GestionarMunicipioForm() {
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
      await updateMunicipio(params.id, data);
    } else {
      await createMunicipio(data);
    }
    navigate("/gestionarMunicipio");
  });

  useEffect(() => {
    async function loadMunicipio() {
      if (params.id) {
        const { data } = await getMunicipio(params.id);
        setValue("municipios", data.municipios);
        setValue("provincias", data.provincias);
      }
    }
    loadMunicipio();
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
              <label htmlFor="municipio" className="mb-2">
                Municipio
              </label>
              <input
                className=" border-gray-300 rounded-lg sm:w-96"
                type="text"
                id="municipio"
                {...register("municipios", { required: true })}
              />
              {errors.municipios && <span>Introduzca un municipio</span>}
            </div>

            <div className="text-gray-700 grid">
              <label htmlFor="provincia" className="mb-2">
                Provincia
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-96"
                type="text"
                id="provincia"
                {...register("provincias", { required: true })}
              />
              {errors.provincias && <span>Introduzca una provincia</span>}
            </div>

            <div className="flex justify-between mt-4 ">
              <button className="bg-sky-600 text-white w-20 rounded-sm hover:bg-sky-700 h-7">
                {params.id ? "Actualizar" : "Añadir"}
              </button>
              {params.id && (
                <button
                  className="bg-red-600 text-white w-16 rounded-sm hover:bg-red-700 h-7"
                  onClick={async () => {
                    await deleteMunicipio(params.id);

                    navigate("/gestionarMunicipio");
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
