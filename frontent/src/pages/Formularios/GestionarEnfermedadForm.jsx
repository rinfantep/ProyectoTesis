import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  updateEnfermedad,
  createEnfermedad,
  deleteEnfermedad,
  getEnfermedad,
} from "../../api/enfermedades.api";
import Navigation from "../../components/Navigation";

export default function GestionarEnfermedadForm() {
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
      await updateEnfermedad(params.id, data);
    } else {
      await createEnfermedad(data);
    }
    navigate("/gestionarEnfermedades");
  });

  useEffect(() => {
    async function loadEspecie() {
      if (params.id) {
        const { data } = await getEnfermedad(params.id);
        setValue("enfermedad", data.enfermedad);
        setValue("idenfermedad", data.idenfermedad);
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
              <label htmlFor="enfermedad" className="mb-2">
                Enfermedad
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-96"
                type="text"
                id="enfermedad"
                {...register("enfermedad", { required: true })}
              />
              {errors.enfermedad && <span>Introduzca una enfermedad</span>}
            </div>

            <div className="text-gray-700 grid">
              <label htmlFor="idenfermedad" className="mb-2">
                Id Enfermedad
              </label>
              <input
                className="form-control border-gray-300 rounded-lg sm:w-96"
                type="text"
                id="idenfermedad"
                {...register("idenfermedad", { required: true })}
              />
              {errors.idenfermedad && <span>Introduzca un identificador</span>}
            </div>

            <div className="flex justify-between mt-4 ">
              <button className="bg-sky-600 text-white w-20 rounded-sm hover:bg-sky-700 h-7">
                {params.id ? "Actualizar" : "Añadir"}
              </button>
              {params.id && (
                <button
                  className="bg-red-600 text-white w-16 rounded-sm hover:bg-red-700 h-7"
                  onClick={async () => {
                    await deleteEnfermedad(params.id);

                    navigate("/gestionarEnfermedades");
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
