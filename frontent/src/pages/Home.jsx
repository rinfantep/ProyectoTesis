import Card from "../components/Card";
import SideBar from "../components/SideBar";
import { useNavigate } from "react-router-dom";
import Aside from "../components/NavGestion";
import Navigation from "../components/Navigation";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navigation />

      <div className="sm:ml-44 mt-16 sm:mt-16">
        <div className="grid mx-auto gap-6 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 p-4">
          <Card
            imagen="/image/gestion.jpeg"
            nave={() => {
              navigate("/gestionar");
            }}
            nombre="Gestion"
            descripcion="La  medición  de  la  enfermedad  puede  expresarse  en  medidas  absolutas  o relativas: las absolutas pueden ser muy valiosas para conocer la existencia de la patema en una población, pero no para conocer su importancia. Resulta   más   interesante   expresar   estas   cifras   en   términos   relativos, relacionando una cifra absoluta (como puede ser el número de brotes) con otra u otras cifras (como tamaño de la población en la que se han observado dichos sucesos)."
          />
          <Card
            imagen="/image/grafico.jpeg"
            nave={() => {
              navigate("/");
            }}
            nombre="Análisis Epizootiológico"
            descripcion="La  medición  de  la  enfermedad  puede  expresarse  en  medidas  absolutas  o relativas: las absolutas pueden ser muy valiosas para conocer la existencia de la patema en una población, pero no para conocer su importancia. Resulta   más   interesante   expresar   estas   cifras   en   términos   relativos, relacionando una cifra absoluta (como puede ser el número de brotes) con otra u otras cifras (como tamaño de la población en la que se han observado dichos sucesos)."
          />
          <Card
            imagen="/image/mapa.jpeg"
            nave={() => {
              navigate("/mapa");
            }}
            nombre="Mapa"
            descripcion="Los avances en el conocimiento actual han revelado la diversidad y complejidad de los factores que influyen en el desarrollo de enfermedades infecciosas y de transmisión. Para investigar la relación entre estos factores, actualmente se emplean Sistemas de Información Geográfica (SIG), los cuales están ampliando su uso debido a la necesidad de mejorar la eficacia y toma de decisiones en los programas de salud."
          />
        </div>
      </div>
    </>
  );
}
