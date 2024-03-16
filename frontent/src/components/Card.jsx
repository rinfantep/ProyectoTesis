import React from "react";

function Card({ imagen, nave, nombre, descripcion }) {
  return (
    <div
      className="bg-white shadow rounded overflow-hidden hover:shadow-black hover:shadow-2xl hover: cursor-pointer"
      onClick={nave}
    >
      <div className="h-52">
        <img className="h-full w-full " src={imagen} alt="Gestion" />
      </div>
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-semibold text-slate-800">{nombre}</h3>
        <p className="text-slate-600">{descripcion}</p>
      </div>
    </div>
  );
}

export default Card;
