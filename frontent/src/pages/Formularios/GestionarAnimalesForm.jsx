import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  updateAnimal,
  createAnimal,
  deleteAnimal,
  getAnimal,
} from "../../api/animales.api";
import Navigation from "../../components/Navigation";

export default function GestionarAnimalesForm() {
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
      await updateAnimal(params.id, data);
    } else {
      await createAnimal(data);
    }
    navigate("/gestionarAnimales");
  });

  useEffect(() => {
    async function loadAnimales() {
      if (params.id) {
        const { data } = await getAnimal(params.id);
        setValue("nombre", data.nombre);
        setValue("especie", data.especie);
        setValue("cantidad", data.cantidad);
        setValue("sector", data.sector);
        setValue("tipoSector", data.tipoSector);
        setValue("municipio", data.municipio);
        setValue("propietario", data.propietario);
        setValue("provincia", data.provincia);
      }
    }
    loadAnimales();
  }, []);

  return (
    <>
      <Navigation />

      <div className="sm:ml-44 mt-16 sm:mt-16 ">
        <div className="flex justify-center items-center h-screen -mt-16 w-full">
          <form
            onSubmit={onSubmit}
            className="py-4 px-6 bg-white rounded-xl grid grid-cols-2 "
          >
            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="nombre" className="mb-2">
                Animales
              </label>
              <input
                className="form-control border-gray-300 rounded-lg w-32 sm:w-60"
                type="text"
                id="nombre"
                {...register("nombre", { required: true })}
              />
              {errors.nombre && <span>Introduzca un nombre de animal</span>}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="especie" className="mb-2">
                Especie
              </label>
              <input
                className="form-control border-gray-300 rounded-lg w-32 sm:w-60"
                type="text"
                id="especie"
                {...register("especie", { required: true })}
              />
              {errors.especies && <span>Introduzca una especie</span>}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="cantidad" className="mb-2">
                Cantidad
              </label>
              <input
                className="form-control border-gray-300 rounded-lg w-32 sm:w-60"
                type="text"
                id="cantidad"
                {...register("cantidad", { required: true })}
              />
              {errors.especies && <span>Introduzca una especie</span>}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="sector" className="mb-2">
                Sector
              </label>
              <input
                className="form-control border-gray-300 rounded-lg w-32 sm:w-60"
                type="text"
                id="sector"
                {...register("sector", { required: true })}
              />
              {errors.sector && <span>Introduzca un sector</span>}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="tipoSector" className="mb-2">
                Tipo Sector
              </label>
              <input
                className="form-control border-gray-300 rounded-lg w-32 sm:w-60"
                type="text"
                id="tipoSector"
                {...register("tipoSector", { required: true })}
              />
              {errors.tipoSector && <span>Introduzca un tipo sector</span>}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="municipio" className="mb-2">
                Municipio
              </label>
              <input
                className="form-control border-gray-300 rounded-lg w-32 sm:w-60"
                type="text"
                id="municipio"
                {...register("municipio", { required: true })}
              />
              {errors.municipio && <span>Introduzca un municipio</span>}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="propietario" className="mb-2">
                Propietario
              </label>
              <input
                className="form-control border-gray-300 rounded-lg w-32 sm:w-60"
                type="text"
                id="propietario"
                {...register("propietario", { required: true })}
              />
              {errors.especies && <span>Introduzca una especie</span>}
            </div>

            <div className="text-gray-700 grid sm:mr-10">
              <label htmlFor="provincia" className="mb-2">
                Provincia
              </label>
              <input
                className="form-control border-gray-300 rounded-lg w-32 sm:w-60"
                type="text"
                id="provincia"
                {...register("provincia", { required: true })}
              />
              {errors.provincia && <span>Introduzca una provincia</span>}
            </div>

            <div className="flex justify-between mt-4 ">
              <button className="bg-sky-600 text-white w-20 rounded-sm hover:bg-sky-700 h-7">
                {params.id ? "Actualizar" : "Añadir"}
              </button>
              {params.id && (
                <button
                  className="bg-red-600 text-white w-16 rounded-sm hover:bg-red-700 h-7"
                  onClick={async () => {
                    await deleteAnimal(params.id);

                    navigate("/gestionarAnimales");
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
