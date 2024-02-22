import { getAllNotiDiarias } from "../../api/notiDiarias.api";

export function DatosPoblacionNotiDiaria() {
  const [poblacion, setPoblacion] = useState([]);

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

  return <div>sumaAnimales</div>;
}
