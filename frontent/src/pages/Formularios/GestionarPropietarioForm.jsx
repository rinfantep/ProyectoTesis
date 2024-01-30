import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  updatePropietario,
  createPropietario,
  getPropietario,
  deletePropietario,
} from "../../api/propietarios.api";
import Navigation from "../../components/Navigation";

export default function GestionarPropietarioForm() {
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
        setValue("sectores", data.sectores);
        setValue("municipio", data.municipio);
        setValue("provincias", data.provincias);
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
                id="provincia"
                {...register("propietarios", { required: true })}
              />
              {errors.propietarios && <span>Introduzca un propietario</span>}
            </div>

            <div className="text-gray-700 grid">
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
