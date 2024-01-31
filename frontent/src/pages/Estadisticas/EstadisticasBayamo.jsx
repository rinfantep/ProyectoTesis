import React, { useEffect, useState } from "react";
import CardEstadisticas from "../../components/CardEstadisticas";
import { getAllAnimales } from "../../api/animales.api";
import { getAllPropietarios } from "../../api/propietarios.api";
import { getAllEspecies } from "../../api/especies.api";

//import BarChart from "../../Charts/BarChart";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Navigation from "../../components/Navigation";
import NavEstadisticas from "../../components/Nav/NavEstadisticas";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function Bayamo() {
  const [animales, setAnimales] = useState([]);
  const [propietarios, setPropietarios] = useState([]);
  const [especies, setEspecies] = useState([]);

  //Animales
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllAnimales();
      setAnimales(data);
    }
    fetchTable();
  }, []);

  const filtroBayamo = animales
    .filter((person) => person.municipio == "Bayamo")
    .map((filterAnimal) => filterAnimal.cantidad);

  const sumaAnimales = filtroBayamo.reduce((prev, next) => prev + next, 0);

  //Propietarios
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllPropietarios();
      setPropietarios(data);
    }
    fetchTable();
  }, []);

  const filtroPropietario = propietarios
    .filter((person) => person.municipio == "Bayamo")
    .map((filterPropietario) => filterPropietario.propietarios);

  //Especies
  const filtroEspecies = animales
    .filter((person) => person.municipio == "Bayamo")
    .map((filterAnimal) => filterAnimal.especie);

  //Chart
  var data = {
    label: "Cantidad",
    labels: [
      "Animales",
      "Propietarios",
      "Especies",
      "Green",
      "Purple ",
      "Orange",
    ],
    datasets: [
      {
        label: "cant animales",
        data: [
          sumaAnimales,
          filtroPropietario.length,
          filtroEspecies.length,
          5,
          2,
          3,
        ],
        backgroundColor: [
          "rgba(255,99,132,0.2)",
          "rgba(54,162,235,0.2)",
          "rgba(255,206,86,0.2)",
          "rgba(75,192,192,0.2)",
          "rgba(153,102,255,0.2)",
          "rgba(255,159,64,0.2)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(75,192,192,1)",
          "rgba(153,102,255,1)",
          "rgba(255,159,64,1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };

  return (
    <>
      <Navigation />

      <div className="sm:ml-44 mt-16 sm:mt-16">
        <NavEstadisticas />
        <div className="w-full   mr-4">
          <div className="pl-4 mb-4 text-xl font-bold">
            <span>Bayamo</span>
          </div>

          <div className="flex  flex-wrap justify-around gap-2 ">
            <CardEstadisticas
              nombre="Animales"
              cantidad={sumaAnimales}
              color="bg-red-500"
            />
            <CardEstadisticas
              nombre="Propietarios"
              cantidad={filtroPropietario.length}
              color="bg-sky-500"
            />
            <CardEstadisticas
              nombre="Especies"
              cantidad={filtroEspecies.length}
              color="bg-yellow-500"
            />
            <CardEstadisticas nombre="Animales" cantidad="456" />
            <CardEstadisticas nombre="Animales" cantidad="456" />
            <CardEstadisticas nombre="Animales" cantidad="456" />
          </div>
          <div className="w-full h-full flex pl-3  mt-4 mb-4">
            <Bar
              data={data}
              height={400}
              options={options}
              className="pr-8 pl-8"
            />
          </div>
        </div>
      </div>
    </>
  );
}
