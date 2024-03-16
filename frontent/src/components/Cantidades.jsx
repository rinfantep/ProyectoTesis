import { getAllNotiDiarias } from "../api/notiDiarias.api";

export function Cantidades() {
    const [poblacion, setPoblacion] = useState([]);
    const [propietarios, setPropietarios] = useState([]);
    const [especies, setEspecies] = useState([]);
  
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
}

export const sumaAnimales = () => {
    const [poblacion, setPoblacion] = useState([]);
    const [propietarios, setPropietarios] = useState([]);
    const [especies, setEspecies] = useState([]);
  
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
    return sumaAnimales
};

