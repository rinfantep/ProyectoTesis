import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  updateTipoSector,
  createTipoSector,
  getTipoSector,
  deleteTipoSector,
} from "../../api/tipoSector.api";
import Navigation from "../../components/Navigation";

export default function GestionarTipoSectorForm() {
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
      await updateTipoSector(params.id, data);
    } else {
      await createTipoSector(data);
    }
    navigate("/gestionarTipoSector");
  });

  useEffect(() => {
    async function loadTipoSector() {
      if (params.id) {
        const { data } = await getTipoSector(params.id);
        setValue("tipoSector", data.tipoSector);
        setValue("sector", data.sector);
      }
    }
    loadTipoSector();
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
              <label htmlFor="tipoSector" className="mb-2">
                Tipo Sector
              </label>
              <input
                className=" border-gray-300 rounded-lg sm:w-96"
                type="text"
                id="tipoSector"
                {...register("tipoSector", { required: true })}
              />
              {errors.tipoSector && <span>Introduzca un tipo sector</span>}
            </div>

            <div className="text-gray-700 grid">
              <label htmlFor="sector" className="mb-2">
                Sector
              </label>
              <input
                className=" border-gray-300 rounded-lg sm:w-96"
                type="text"
                id="sector"
                {...register("sector", { required: true })}
              />
              {errors.sector && <span>Introduzca un sector</span>}
            </div>

            <div className="flex justify-between mt-4 ">
              <button className="bg-sky-600 text-white w-20 rounded-sm hover:bg-sky-700 h-7">
                {params.id ? "Actualizar" : "Añadir"}
              </button>
              {params.id && (
                <button
                  className="bg-red-600 text-white w-16 rounded-sm hover:bg-red-700 h-7"
                  onClick={async () => {
                    await deleteTipoSector(params.id);

                    navigate("/gestionarTipoSector");
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
