import React, { useEffect, useState } from "react";
import CardEstadisticas from "../../components/CardEstadisticas";
import { getAllClinicaCanina } from "../../api/clinicaCanina.api";
import { getAllNotiDiarias } from "../../api/notiDiarias.api";

import PieBayamo from "../GraficoEnfermedades/PieBayamo";

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

export default function PrevalenciaBayamo() {
  const [poblacion, setPoblacion] = useState([]);
  const [propietarios, setPropietarios] = useState([]);
  const [especies, setEspecies] = useState([]);
  const [vacunados, setVacunados] = useState([]);

  //Poblacion animal
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllNotiDiarias();
      setPoblacion(data);
    }
    fetchTable();
  }, []);

  const filtroPoblacion = poblacion
    .filter((person) => person.municipio == "Bayamo")
    .map((filterAnimal) => filterAnimal.poblacion);

  const sumaAnimales = filtroPoblacion.reduce((prev, next) => prev + next, 0);
  //fin poblacion animal

  //Animales muertos
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllNotiDiarias();
      setPoblacion(data);
    }
    fetchTable();
  }, []);

  const filtroAnimalesMuertos = poblacion
    .filter((person) => person.municipio == "Bayamo")
    .map((filterAnimal) => filterAnimal.muertos);

  const sumaAnimalesMuertos = filtroAnimalesMuertos.reduce(
    (prev, next) => prev + next,
    0
  );
  //fin Animales muertos

  //Animales enfermos
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllNotiDiarias();
      setPoblacion(data);
    }
    fetchTable();
  }, []);

  const filtroAnimalesEnfermos = poblacion
    .filter((person) => person.municipio == "Bayamo")
    .map((filterAnimal) => filterAnimal.enfermos);

  const sumaAnimalesEnfermos = filtroAnimalesEnfermos.reduce(
    (prev, next) => prev + next,
    0
  );
  //fin Animales enfermos

  //Animales sacrificios
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllNotiDiarias();
      setPoblacion(data);
    }
    fetchTable();
  }, []);

  const filtroAnimalesSacrificados = poblacion
    .filter((person) => person.municipio == "Bayamo")
    .map((filterAnimal) => filterAnimal.sac);

  const sumaAnimalesSacrificados = filtroAnimalesSacrificados.reduce(
    (prev, next) => prev + next,
    0
  );
  //fin Animales sacrificios

  //Mortalidad

  const mortalidad = (sumaAnimalesMuertos / sumaAnimales) * 100;

  //fin Mortalidad

  //Vacunados
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllClinicaCanina();
      setVacunados(data);
    }
    fetchTable();
  }, []);

  const filtroVacunados = vacunados
    .filter((person) => person.municipio == "Bayamo")
    .map((filterAnimal) => filterAnimal.vacunados);

  const sumaVacunados = filtroVacunados.reduce((prev, next) => prev + next, 0);

  //Fin Vacunados

  //Chart
  var data = {
    label: "Cantidad",
    labels: [
      "Rabia",
      "Muertes",
      "Enfermos",
      "Sacrificados",
      "Mortalidad",
      "Vacunados",
    ],
    datasets: [
      {
        label: "Prevalencia",
        data: [
          sumaAnimales,
          sumaAnimalesMuertos,
          sumaAnimalesEnfermos,
          sumaAnimalesSacrificados,
          mortalidad,
          sumaVacunados,
        ],
        backgroundColor: [
          "#ef4444",
          //"rgba(255,99,132,0.9)",
          "#0ea5e9",
          //"rgba(54,162,235,0.9)",
          "#eab308",
          //"rgba(255,206,86,0.9)",
          "#22c55e",
          //"rgba(75,192,192,0.9)",
          "rgba(153,102,255,0.9)",
          //"rgba(255,159,64,0.2)",
          "#065f46",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(75,192,192,1)",
          "rgba(153,102,255,1)",
          "#065f46",
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
      <Bar data={data} height={400} options={options} className="pr-8 pl-8" />
    </>
  );
}
