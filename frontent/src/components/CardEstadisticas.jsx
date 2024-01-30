import React from "react";

export default function CardEstadisticas({ nombre, cantidad, color }) {
  return (
    <>
      <div className="flex flex-col w-60 sm:w-40 bg-white rounded">
        <div className={`pt-2 pb-2 ${color} rounded-sm text-center text-white`}>
          <span>{nombre}</span>
        </div>
        <div className="pb-2 text-center">
          <span>{cantidad}</span>
        </div>
      </div>
    </>
  );
}
