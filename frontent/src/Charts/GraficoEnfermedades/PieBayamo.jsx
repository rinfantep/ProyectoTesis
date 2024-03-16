import React, { useEffect, useState } from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import {Pie} from 'react-chartjs-2'


import { getAllClinicaCanina } from "../../api/clinicaCanina.api"

ChartJS.register(ArcElement,Tooltip,Legend);

export default function Pies() {
  const [rabia, setRabia] = useState([]);

  //************ Rabia **********************************************************************

  //Clinica - letalidad

  //Muertos
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllClinicaCanina();
      setRabia(data);
    }
    fetchTable();
  }, []);
  
  const filtroMuertosRabia = rabia
  .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Rabia")
    .map((filterAnimal) => filterAnimal.muertos);

  const sumaMuertosRabia = filtroMuertosRabia.reduce((prev, next) => prev + next, 0);

  //Enfermos

  const filtroEnfermosRabia = rabia
    .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Rabia")
    .map((filterAnimal) => filterAnimal.nuevosEnfermos);

  const sumaEnfermosRabia = filtroEnfermosRabia.reduce((prev, next) => prev + next, 0);

  //Clinica - letalidad

  //Metodo para hallar la letalidad

  var letalidadRabia = ((sumaMuertosRabia/sumaEnfermosRabia)*100)

  //Fiin metodo letalidad

  //************************ Fin Rabia ********************************************************


  //************ Moquillo **********************************************************************

  //Clinica - letalidad

  const [moquillo, setMoquillo] = useState([]);

  //Muertos
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllClinicaCanina();
      setMoquillo(data);
    }
    fetchTable();
  }, []);
  
  const filtroMuertosMoquillo = moquillo
  .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Moquillo")
    .map((filterAnimal) => filterAnimal.muertos);

  const sumaMuertosMoquillo = filtroMuertosMoquillo.reduce((prev, next) => prev + next, 0);

  //Enfermos

  const filtroEnfermosMoquillo = moquillo
    .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Moquillo")
    .map((filterAnimal) => filterAnimal.nuevosEnfermos);

  const sumaEnfermosMoquillo = filtroEnfermosMoquillo.reduce((prev, next) => prev + next, 0);

  //Clinica - letalidad

  //Metodo para hallar la letalidad

  var letalidadMoquillo = ((sumaMuertosMoquillo/sumaEnfermosMoquillo)*100)

  //Fiin metodo letalidad

  //************************ Fin Moquillo ********************************************************


  //************ Leptospirosis **********************************************************************

  //Clinica - letalidad

  const [leptospirosis, setLeptospirosis] = useState([]);

  //Muertos
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllClinicaCanina();
      setLeptospirosis(data);
    }
    fetchTable();
  }, []);
  
  const filtroMuertosLeptospirosis = leptospirosis
  .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Leptospirosis")
    .map((filterAnimal) => filterAnimal.muertos);

  const sumaMuertosLeptospirosis = filtroMuertosLeptospirosis.reduce((prev, next) => prev + next, 0);

  //Enfermos

  const filtroEnfermosLeptospirosis = leptospirosis
    .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Leptospirosis")
    .map((filterAnimal) => filterAnimal.nuevosEnfermos);

  const sumaEnfermosLeptospirosis= filtroEnfermosLeptospirosis.reduce((prev, next) => prev + next, 0);

  //Clinica - letalidad

  //Metodo para hallar la letalidad

  var letalidadLeptospirosis = ((sumaMuertosLeptospirosis/sumaEnfermosLeptospirosis)*100)

  //Fiin metodo letalidad

  //************************ Fin Leptospirosis ********************************************************



  //************ Parvovirosis **********************************************************************

  //Clinica - letalidad

  const [parvovirosis, setParvovirosis] = useState([]);

  //Muertos
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllClinicaCanina();
      setParvovirosis(data);
    }
    fetchTable();
  }, []);
  
  const filtroMuertosParvovirosis = parvovirosis
  .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Parvovirosis")
    .map((filterAnimal) => filterAnimal.muertos);

  const sumaMuertosParvovirosis = filtroMuertosParvovirosis.reduce((prev, next) => prev + next, 0);

  //Enfermos

  const filtroEnfermosParvovirosis = parvovirosis
    .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Parvovirosis")
    .map((filterAnimal) => filterAnimal.nuevosEnfermos);

  const sumaEnfermosParvovirosis= filtroEnfermosParvovirosis.reduce((prev, next) => prev + next, 0);

  //Clinica - letalidad

  //Metodo para hallar la letalidad

  var letalidadParvovirosis = ((sumaMuertosParvovirosis/sumaEnfermosParvovirosis)*100)

  //Fin metodo letalidad

  //************************ Fin Parvovirosis ********************************************************


  //************ Hepatitis **********************************************************************

  //Clinica - letalidad

  const [hepatitis, setHepatitis] = useState([]);

  //Muertos
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllClinicaCanina();
      setHepatitis(data);
    }
    fetchTable();
  }, []);
  
  const filtroMuertosHepatitis = hepatitis
  .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Parvovirosis")
    .map((filterAnimal) => filterAnimal.muertos);

  const sumaMuertosHepatitis = filtroMuertosParvovirosis.reduce((prev, next) => prev + next, 0);

  //Enfermos

  const filtroEnfermosHepatitis = hepatitis
    .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Parvovirosis")
    .map((filterAnimal) => filterAnimal.nuevosEnfermos);

  const sumaEnfermosHepatitis= filtroEnfermosHepatitis.reduce((prev, next) => prev + next, 0);

  //Clinica - letalidad

  //Metodo para hallar la letalidad

  var letalidadHepatitis = ((sumaMuertosHepatitis/sumaEnfermosHepatitis)*100)

  //Fin metodo letalidad

  //************************ Fin Hepatitis ********************************************************


  //************ Enteritis Hemorragica ************************************************************

  //Clinica - letalidad

  const [enteritis, setEnteritis] = useState([]);

  //Muertos
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllClinicaCanina();
      setEnteritis(data);
    }
    fetchTable();
  }, []);
  
  const filtroMuertosEnteritis = enteritis
  .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Enteritis Hemorragica")
    .map((filterAnimal) => filterAnimal.muertos);

  const sumaMuertosEnteritis = filtroMuertosEnteritis.reduce((prev, next) => prev + next, 0);

  //Enfermos

  const filtroEnfermosEnteritis = enteritis
    .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Enteritis Hemorragica")
    .map((filterAnimal) => filterAnimal.nuevosEnfermos);

  const sumaEnfermosEnteritis = filtroEnfermosEnteritis.reduce((prev, next) => prev + next, 0);

  //Clinica - letalidad

  //Metodo para hallar la letalidad

  var letalidadEnteritis = ((sumaMuertosEnteritis/sumaEnfermosEnteritis)*100)

  //Fin metodo letalidad

  //************************ Fin Enteritis Hemorragica *******************************************

  //************ Pentavalente ************************************************************

  //Clinica - letalidad

  const [pentavalente, setPentavalente] = useState([]);

  //Muertos
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllClinicaCanina();
      setEnteritis(data);
    }
    fetchTable();
  }, []);
  
  const filtroMuertosPentavalente = pentavalente
  .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Pentavalente")
    .map((filterAnimal) => filterAnimal.muertos);

  const sumaMuertosPentavalente = filtroMuertosPentavalente.reduce((prev, next) => prev + next, 0);

  //Enfermos

  const filtroEnfermosPentavalente = pentavalente
    .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Pentavalente")
    .map((filterAnimal) => filterAnimal.nuevosEnfermos);

  const sumaEnfermosPentavalente = filtroEnfermosPentavalente.reduce((prev, next) => prev + next, 0);

  //Clinica - letalidad

  //Metodo para hallar la letalidad

  var letalidadPentavalente = ((sumaMuertosPentavalente/sumaEnfermosPentavalente)*100)

  //Fin metodo letalidad

  //************************ Fin Pentavalente *******************************************


  //************ Babesiosis ************************************************************

  //Clinica - letalidad

  const [babesiosis, setBabesiosis] = useState([]);

  //Muertos
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllClinicaCanina();
      setBabesiosis(data);
    }
    fetchTable();
  }, []);
  
  const filtroMuertosBabesiosis = babesiosis
  .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Babesiosis")
    .map((filterAnimal) => filterAnimal.muertos);

  const sumaMuertosBabesiosis = filtroMuertosBabesiosis.reduce((prev, next) => prev + next, 0);

  //Enfermos

  const filtroEnfermosBabesiosis = babesiosis
    .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Babesiosis")
    .map((filterAnimal) => filterAnimal.nuevosEnfermos);

  const sumaEnfermosBabesiosis = filtroEnfermosBabesiosis.reduce((prev, next) => prev + next, 0);

  //Clinica - letalidad

  //Metodo para hallar la letalidad

  var letalidadBabesiosis = ((sumaMuertosBabesiosis/sumaEnfermosBabesiosis)*100)

  //Fin metodo letalidad

  //************************ Fin Pentavalente *******************************************


  //************ Erlinchosis ************************************************************

  //Clinica - letalidad

  const [erlinchosis, setErlinchosis] = useState([]);

  //Muertos
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllClinicaCanina();
      setErlinchosis(data);
    }
    fetchTable();
  }, []);
  
  const filtroMuertosErlinchosis = erlinchosis
  .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Erlinchosis")
    .map((filterAnimal) => filterAnimal.muertos);

  const sumaMuertosErlinchosis = filtroMuertosErlinchosis.reduce((prev, next) => prev + next, 0);

  //Enfermos

  const filtroEnfermosErlinchosis = erlinchosis
    .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Erlinchosis")
    .map((filterAnimal) => filterAnimal.nuevosEnfermos);

  const sumaEnfermosErlinchosis = filtroEnfermosErlinchosis.reduce((prev, next) => prev + next, 0);
  
  //Clinica - letalidad

  //Metodo para hallar la letalidad

  var letalidadErlinchosis = ((sumaMuertosErlinchosis/sumaEnfermosErlinchosis)*100)

  
  //Fin metodo letalidad

  //************************ Fin Erlinchosis *******************************************



  //************ Parasitismo ************************************************************

  //Clinica - letalidad

  const [parasitismo, setParasitismo] = useState([]);

  //Muertos
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllClinicaCanina();
      setParasitismo(data);
    }
    fetchTable();
  }, []);
  
  const filtroMuertosParasitismo = parasitismo
  .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Parasitismo")
    .map((filterAnimal) => filterAnimal.muertos);

  const sumaMuertosParasitismo = filtroMuertosParasitismo.reduce((prev, next) => prev + next, 0);

  //Enfermos

  const filtroEnfermosParasitismo = parasitismo
    .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Parasitismo")
    .map((filterAnimal) => filterAnimal.nuevosEnfermos);

  const sumaEnfermosParasitismo = filtroEnfermosParasitismo.reduce((prev, next) => prev + next, 0);
  
  //Clinica - letalidad

  //Metodo para hallar la letalidad

  var letalidadParasitismo = ((sumaMuertosParasitismo/sumaEnfermosParasitismo)*100)

  
  //Fin metodo letalidad

  //************************ Fin Parasitismo *******************************************


  //************ T. Respiratorio ************************************************************

  //Clinica - letalidad

  const [respiratorio, setRespiratorio] = useState([]);

  //Muertos
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllClinicaCanina();
      setRespiratorio(data);
    }
    fetchTable();
  }, []);
  
  const filtroMuertosRespiratorio = respiratorio
  .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "T. Respiratorio")
    .map((filterAnimal) => filterAnimal.muertos);

  const sumaMuertosRespiratorio = filtroMuertosRespiratorio.reduce((prev, next) => prev + next, 0);

  //Enfermos

  const filtroEnfermosRespiratorio = respiratorio
    .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "T. Respiratorio")
    .map((filterAnimal) => filterAnimal.nuevosEnfermos);

  const sumaEnfermosRespiratorio = filtroEnfermosRespiratorio.reduce((prev, next) => prev + next, 0);
  
  //Clinica - letalidad

  //Metodo para hallar la letalidad

  var letalidadRespiratorio = ((sumaMuertosRespiratorio/sumaEnfermosRespiratorio)*100)

  //Fin metodo letalidad

  //************************ Fin T. Respiratorio *******************************************

//************ Tetano ************************************************************

  //Clinica - letalidad

  const [tetano, setTetano] = useState([]);

  //Muertos
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllClinicaCanina();
      setTetano(data);
    }
    fetchTable();
  }, []);
  
  const filtroMuertosTetano = tetano
  .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Tetano")
    .map((filterAnimal) => filterAnimal.muertos);

  const sumaMuertosTetano = filtroMuertosTetano.reduce((prev, next) => prev + next, 0);

  //Enfermos

  const filtroEnfermosTetano = tetano
    .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Tetano")
    .map((filterAnimal) => filterAnimal.nuevosEnfermos);

  const sumaEnfermosTetano = filtroEnfermosTetano.reduce((prev, next) => prev + next, 0);
  
  //Clinica - letalidad

  //Metodo para hallar la letalidad

  var letalidadTetano = ((sumaMuertosTetano/sumaEnfermosTetano)*100)

  //Fin metodo letalidad

  //************************ Fin T. Respiratorio *******************************************



//************ Toxoplasmosis ************************************************************

  //Clinica - letalidad

  const [toxoplasmosis, setToxoplasmosis] = useState([]);

  //Muertos
  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllClinicaCanina();
      setToxoplasmosis(data);
    }
    fetchTable();
  }, []);
  
  const filtroMuertosToxoplasmosis = toxoplasmosis
  .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Tetano")
    .map((filterAnimal) => filterAnimal.muertos);

  const sumaMuertosToxoplasmosis = filtroMuertosToxoplasmosis.reduce((prev, next) => prev + next, 0);

  //Enfermos

  const filtroEnfermosToxoplasmosis = toxoplasmosis
    .filter((muni) => muni.municipio == "Bayamo" && muni.enfermedad == "Tetano")
    .map((filterAnimal) => filterAnimal.nuevosEnfermos);

  const sumaEnfermosToxoplasmosis = filtroEnfermosToxoplasmosis.reduce((prev, next) => prev + next, 0);
  
  //Clinica - letalidad

  //Metodo para hallar la letalidad

  var letalidadToxoplasmosis = ((sumaMuertosToxoplasmosis/sumaEnfermosToxoplasmosis)*100)

  //Fin metodo letalidad

  //************************ Fin Toxoplasmosis *******************************************

  var options = {responsive: true, maintainAspectRatio:false,}

  var data = {
    labels: ['Rabia','Moquillo','Leptospirosis','Parvovirosis','Hepatitis','Enteritis Hemorragica','Pentavalente','Babesiosis','Erlinchosis','Parasitismo','T. Respiratorio','Tetano','Toxoplasmosis'],
    datasets: [
        {
            label:'Letalidad',
            data: [parseFloat(letalidadRabia).toFixed(2),
                    parseFloat(letalidadMoquillo).toFixed(2),
                    parseFloat(letalidadLeptospirosis).toFixed(2),
                    parseFloat(letalidadParvovirosis).toFixed(2),
                    parseFloat(letalidadHepatitis).toFixed(2),
                    parseFloat(letalidadEnteritis).toFixed(2),
                    parseFloat(letalidadPentavalente).toFixed(2),
                    parseFloat(letalidadBabesiosis).toFixed(2),    
                    parseFloat(letalidadErlinchosis).toFixed(2),    
                    parseFloat(letalidadParasitismo).toFixed(2),    
                    parseFloat(letalidadRespiratorio).toFixed(2),    
                    parseFloat(letalidadTetano).toFixed(2),    
                    50,              
                  ],
            backgroundColor: [
                '#ef4444',
                'rgba(255,206,86,0.9)',
                'rgba(54,162,235,0.9)',
                '#fb923c',
                'rgba(153,102,255,0.9)',
                '#f97316',
                '#f59e0b',
                '#84cc16',
                '#22c55e',
                '#065f46',
                '#14b8a6',
                '#854d0e',
                '#172554',
            ],
            borderColor: [
              '#ef4444',
              'rgba(255,206,86,0.9)',
              'rgba(54,162,235,0.9)',
              '#fb923c',
              'rgba(153,102,255,0.9)',
              '#f97316',
              '#f59e0b',
              '#84cc16',
              '#22c55e',
              '#065f46',
              '#14b8a6',
              '#854d0e',
              '#172554',
            ],
            borderWidth: 1,
        },
    ],
};


    

  return <Pie data={data} options={options} />
}