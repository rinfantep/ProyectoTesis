import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  updateProvincia,
  createProvincia,
  getProvincia,
  deleteProvincia,
} from "../../api/provincia.api";
import Navigation from "../../components/Navigation";

export default function GestionarProvinciaForm() {
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
      await updateProvincia(params.id, data);
    } else {
      await createProvincia(data);
    }
    navigate("/gestionarProvincia");
  });

  useEffect(() => {
    async function loadProvincia() {
      if (params.id) {
        const { data } = await getProvincia(params.id);
        setValue("provincias", data.provincias);
      }
    }
    loadProvincia();
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
