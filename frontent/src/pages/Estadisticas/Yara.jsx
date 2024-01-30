import React, { useEffect, useState } from "react";
import CardEstadisticas from "../../components/CardEstadisticas";
import { getAllAnimales } from "../../api/animales.api";
import { getAllPropietarios } from "../../api/propietarios.api";

export default function Yara() {
  const [animales, setAnimales] = useState([]);
  const [propietarios, setPropietarios] = useState([]);

  //Propietarios
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllPropietarios();
      setPropietarios(data);
    }
    fetchTable();
  }, []);
  const filtroPropietario = propietarios
    .filter((person) => person.municipio == "Yara")
    .map((filterPropietario) => filterPropietario.propietarios);

  //Animales
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllAnimales();
      setAnimales(data);
    }
    fetchTable();
  }, []);

  const filtroBayamo = animales
    .filter((person) => person.municipio == "Yara")
    .map((filterAnimal) => filterAnimal.cantidad);

  const sumaAnimales = filtroBayamo.reduce((prev, next) => prev + next, 0);
  return (
    <>
      <div className="w-full mt-20  mr-4">
        <div className="pl-4 mb-4 text-xl font-bold">
          <span>Yara</span>
        </div>

        <div className="flex  flex-wrap justify-around gap-2 ">
          <CardEstadisticas nombre="Animales" cantidad={sumaAnimales} />
          <CardEstadisticas
            nombre="Propietarios"
            cantidad={filtroPropietario.length}
          />
          <CardEstadisticas nombre="Animales" cantidad="456" />
          <CardEstadisticas nombre="Animales" cantidad="456" />
          <CardEstadisticas nombre="Animales" cantidad="456" />
          <CardEstadisticas nombre="Animales" cantidad="456" />
        </div>
      </div>
    </>
  );
}
