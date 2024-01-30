import React, { useEffect, useState } from "react";
import { getAllNotiDiarias } from "../api/notiDiarias.api";

const people = [
  {
    name: "James",
    age: 31,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "Paul",
    age: 65,
  },
  {
    name: "Ringo",
    age: 49,
  },
  {
    name: "George",
    age: 34,
  },
];

function App() {
  const [myTable, setMyTable] = useState([]);

  useEffect(() => {
    async function fetchTable() {
      const { data } = await getAllNotiDiarias();
      setMyTable(data);
    }
    fetchTable();
  }, []);
  console.log(myTable);

  const total = myTable
    .map((data) => Number(data.valor))
    .reduce((a, b) => a + b, 0);
  console.log(total);
  return (
    <div>
      {people
        .filter((person) => person.name == "Paul")
        .map((filteredPerson) => (
          <li>{filteredPerson.age}</li>
        ))}
      {myTable
        .filter((person) => person.muertos)
        .map((filteredPerson) => (
          <li>{filteredPerson.muertos}</li>
        ))}
    </div>
  );
}

export default App;
