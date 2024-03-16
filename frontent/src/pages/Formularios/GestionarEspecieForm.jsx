import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  updateEspecie,
  createEspecie,
  getAllEspecies,
  deleteEspecie,
  getEspecie,
} from "../../api/especies.api";
import Navigation from "../../components/Navigation";

export default function GestionarEspecieForm() {
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
      await updateEspecie(params.id, data);
    } else {
      await createEspecie(data);
    }
    navigate("/gestionarEspecie");
  });

  useEffect(() => {
    async function loadEspecie() {
      if (params.id) {
        const { data } = await getEspecie(params.id);
        setValue("especies", data.especies);
        setValue("codigo", data.codigo);
      }
    }
    loadEspecie();
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
              <label htmlFor="especie" className="mb-2">
                Especie
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-96"
                type="text"
                id="especie"
                {...register("especies", { required: true })}
              />
              {errors.especies && <span>Introduzca una especie</span>}
            </div>

            <div className="text-gray-700 grid">
              <label htmlFor="codigo" className="mb-2">
                Codigo
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-96"
                type="text"
                id="codigo"
                {...register("codigo", { required: true })}
              />
              {errors.codigo && <span>Introduzca un codigo</span>}
            </div>

            <div className="flex justify-between mt-4 ">
              <button className="bg-sky-600 text-white w-20 rounded-sm hover:bg-sky-700 h-7">
                {params.id ? "Actualizar" : "Añadir"}
              </button>
              {params.id && (
                <button
                  className="bg-red-600 text-white w-16 rounded-sm hover:bg-red-700 h-7"
                  onClick={async () => {
                    await deleteEspecie(params.id);

                    navigate("/gestionarEspecie");
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
