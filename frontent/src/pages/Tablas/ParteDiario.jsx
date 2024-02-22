import Navigation from "../../components/Navigation";
import Table from "react-bootstrap/Table";

import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { getAllNotiDiarias } from "../../api/notiDiarias.api";
import {
  PencilSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

export default function ParteDiario() {
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
      title: "ID",
      field: "id",
    },
    {
      title: "Fecha",
      field: "fecha",
    },
    {
      title: "No. Orden",
      field: "No_orden",
    },
    {
      title: "Unidad",
      field: "unidad",
    },
    {
      title: "Cuadrante",
      field: "cuadrante",
    },
    {
      title: "Codigo entidad",
      field: "codigo_entidad",
    },
    {
      title: "Codigo especialista",
      field: "codigo_especialista",
    },
    {
      title: "Poblacion",
      field: "poblacion",
    },
    {
      title: "Enfermos",
      field: "enfermos",
    },
    {
      title: "Muertos",
      field: "muertos",
    },
    {
      title: "Sac",
      field: "sac",
    },
    {
      title: "Fecha envio",
      field: "fecha_envio",
    },
    {
      title: "Fecha confeccion",
      field: "fecha_confeccion",
    },
    {
      title: "Fecha cierre",
      field: "fecha_cierre",
    },
    {
      title: "Parte",
      field: "parte",
    },
    {
      title: "Municipio",
      field: "municipio",
    },
    {
      title: "Propietario",
      field: "propietario",
    },
  ];
  return (
    <>
      <Navigation />

      <div className="sm:ml-44 mt-16 sm:mt-16 pr-4">
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 ml-4  mt-20">
          <div className="flex justify-between items-center">
            <strong className="text-gray-700 from-neutral-900 text-xs md:text-lg">
              Parte diario
            </strong>
            <input
              type="text"
              className="block  text-sm rounded-sm mt-6 mb-6 h-7 w-28 sm:w-48 md:w-72 ml-2"
              placeholder="Buscar parte"
              onKeyUp={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <button
              onClick={() => navigate("/parteDiarioForm")}
              className="bg-sky-600 hover:bg-sky-700 text-white w-20 rounded-sm hover:shadow-black h-7"
            >
              Añadir
            </button>
          </div>

          <div className="mt-3 mr-3">
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th key={`column${column.field}`}>
                      <button
                        onClick={() => {
                          if (sortColumn === column.field) {
                            if (sortOrder === "asc") {
                              setSortOrder("desc");
                            } else {
                              setSortOrder("asc");
                            }
                          } else {
                            setSortColumn(column.field);
                            setSortOrder("asc");
                          }
                        }}
                      >
                        {column.title}
                        {sortColumn === column.field ? (
                          sortOrder === "asc" ? (
                            <ArrowLongDownIcon className="h-4 w-6" />
                          ) : (
                            <ArrowLongUpIcon className="h-4 w-6" />
                          )
                        ) : null}
                      </button>
                    </th>
                  ))}
                  <th>Editar</th>
                </tr>
              </thead>
              <tbody className=" text-center">
                {results.map((dataRow, index) => (
                  <tr key={`data${index}`}>
                    {columns.map((column) => (
                      <td key={column.field} className="pt-2 pb-2 pl-6">
                        {dataRow[column.field]}
                      </td>
                    ))}
                    <td className="">
                      <button
                        onClick={() =>
                          navigate(`/parteDiarioForm/${dataRow.id}`)
                        }
                      >
                        <PencilSquareIcon className="h-6 w-6 hover:text-sky-500" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="flex items-center justify-between mt-3 mb-2">
              <div>
                <select
                  className="rounded-md"
                  onChange={(e) => {
                    setRowsPerPage(e.target.value);
                  }}
                >
                  {Array(30)
                    .fill(0)
                    .map((_, n) => (
                      <option key={n} value={n + 5}>
                        {n + 5}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <button
                  onClick={() => {
                    if (currentPage > 1) {
                      setCurrentPage(currentPage - 1);
                    }
                  }}
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button
                  onClick={() => {
                    if (currentPage < totalPages) {
                      setCurrentPage(currentPage + 1);
                    }
                  }}
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
