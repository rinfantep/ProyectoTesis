import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import NavGestion from "../../components/NavGestion";
import { useNavigate, useParams } from "react-router-dom";
import { getAllAnimales } from "../../api/animales.api";
import {
  PencilSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

import Table from "react-bootstrap/Table";
import { getAllNotiDiarias } from "../../api/notiDiarias.api";

export default function GestionarAnimales() {
  const [myTable, setMyTable] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllNotiDiarias();
      setMyTable(data);
    }
    fetchTable();
  }, []);

  //Bayamo ********************************************************************
  //Suma poblacion animales en bayamo

  const filtroPoblacionBayamo = myTable
    .filter((person) => person.municipio == "Bayamo")
    .map((filterAnimal) => filterAnimal.poblacion);

  const sumaAnimalesBayamo = filtroPoblacionBayamo.reduce(
    (prev, next) => prev + next,
    0
  );
  //fin suma poblacion de animales en bayamo

  //Suma animales muertos en bayamo

  const filtroMuertosBayamo = myTable
    .filter((person) => person.municipio == "Bayamo")
    .map((filterAnimal) => filterAnimal.muertos);

  const sumaMuertosBayamo = filtroMuertosBayamo.reduce(
    (prev, next) => prev + next,
    0
  );
  //fin Suma animales muertos en bayamo

  //Suma animales muertos en bayamo

  const filtroEnfermosBayamo = myTable
    .filter((person) => person.municipio == "Bayamo")
    .map((filterAnimal) => filterAnimal.enfermos);

  const sumaEnfermosBayamo = filtroEnfermosBayamo.reduce(
    (prev, next) => prev + next,
    0
  );
  //fin Suma animales muertos en bayamo

  //Suma animales sacrificados en bayamo

  const filtroSacBayamo = myTable
    .filter((person) => person.municipio == "Bayamo")
    .map((filterAnimal) => filterAnimal.sac);

  const sumaSacBayamo = filtroSacBayamo.reduce((prev, next) => prev + next, 0);
  //fin Suma animales sacrificados en bayamo
  //fin Bayamo ****************************************************************************

  //Yara ********************************************************************
  //Suma poblacion animales en yara

  const filtroPoblacionYara = myTable
    .filter((person) => person.municipio == "Yara")
    .map((filterAnimal) => filterAnimal.poblacion);

  const sumaAnimalesYara = filtroPoblacionYara.reduce(
    (prev, next) => prev + next,
    0
  );
  //fin suma poblacion de animales en yara

  //Suma animales muertos en yara

  const filtroMuertosYara = myTable
    .filter((person) => person.municipio == "Bayamo")
    .map((filterAnimal) => filterAnimal.muertos);

  const sumaMuertosYara = filtroMuertosYara.reduce(
    (prev, next) => prev + next,
    0
  );
  //fin Suma animales muertos en yara

  //Suma animales muertos en yara

  const filtroEnfermosYara = myTable
    .filter((person) => person.municipio == "Bayamo")
    .map((filterAnimal) => filterAnimal.enfermos);

  const sumaEnfermosYara = filtroEnfermosYara.reduce(
    (prev, next) => prev + next,
    0
  );
  //fin Suma animales muertos en yara

  //Suma animales sacrificados en yara

  const filtroSacYara = myTable
    .filter((person) => person.municipio == "Bayamo")
    .map((filterAnimal) => filterAnimal.sac);

  const sumaSacYara = filtroSacYara.reduce((prev, next) => prev + next, 0);
  //fin Suma animales sacrificados en yara
  //fin Yara ****************************************************************************

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const [searchTerm, setSearchTerm] = useState("");

  let results = myTable;

  if (searchTerm !== "") {
    results = results.filter((dataRow) => {
      return Object.values(dataRow).some((value) =>
        value
          .toString()
          .toLowerCase()
          .includes(searchTerm.toString().toLowerCase())
      );
    });
  }

  if (sortColumn !== "") {
    results = results.sort((firstRow, otherRow) => {
      return firstRow[sortColumn]
        .toString()
        .localeCompare(otherRow[sortColumn].toString());
    });
    if (sortOrder === "desc") {
      results = results.reverse();
    }
  }

  const startPoint = (currentPage - 1) * rowsPerPage;
  const endPoint = currentPage * rowsPerPage;
  const totalPages = Math.ceil(results.length / rowsPerPage);
  results = results.slice(startPoint, endPoint);

  const columns = [
    {
      title: "Municipio",
    },
    {
      title: "Poblacion",
    },
    {
      title: "Muertos",
    },
    {
      title: "Enfermos",
    },
    {
      title: "Sacrificados",
    },
  ];

  return (
    <>
      <Navigation />

      <div className="sm:ml-44 mt-16 sm:mt-16">
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 ml-4 mr-4 mt-20">
          <div className="flex justify-between items-center">
            <strong className="text-gray-700 from-neutral-900 text-xs md:text-lg">
              Animales
            </strong>
          </div>

          <div className="mt-3">
            <Table responsive striped bordered>
              <thead className="text-center">
                <tr>
                  {columns.map((column) => (
                    <th key={column.title}>{column.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody className=" text-center">
                <tr>
                  <td>Bayamo</td>
                  <td>{sumaAnimalesBayamo}</td>
                  <td>{sumaMuertosBayamo}</td>
                  <td>{sumaEnfermosBayamo}</td>
                  <td>{sumaSacBayamo}</td>
                </tr>
                <tr>
                  <td>Manzanillo</td>
                </tr>
                <tr>
                  <td>Rio Cauto</td>
                </tr>
                <tr>
                  <td>Cauto Cristo</td>
                </tr>
                <tr>
                  <td>Guisa</td>
                </tr>
                <tr>
                  <td>Jiguani</td>
                </tr>
                <tr>
                  <td>Campechuela</td>
                </tr>
                <tr>
                  <td>Niquero</td>
                </tr>
                <tr>
                  <td>Pilon</td>
                </tr>
                <tr>
                  <td>Yara</td>
                  <td>{sumaAnimalesYara}</td>
                  <td>{sumaMuertosYara}</td>
                  <td>{sumaEnfermosYara}</td>
                  <td>{sumaSacYara}</td>
                </tr>
                <tr>
                  <td>Bartolome Maso</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
