import BotonPelicula from '../componentes/BotonPelicula';

const peliculas = [
  { titulo: "Zona Sur", resumen: "Drama familiar sobre la clase alta en La Paz" },
  { titulo: "El Cementerio...", resumen: "Historia sobre la corrupción política" },
  { titulo: "Los Andes no creen...", resumen: "Clásico del cine boliviano" },
  { titulo: "Yvy Maraey", resumen: "Exploración de culturas indígenas" },
  { titulo: "Violeta", resumen: "Historia de una mujer en la revolución del 52" }
];

export default function Peliculas() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Películas Bolivianas</h2>
      <div className="flex flex-col items-center gap-2">
        {peliculas.map((pelicula, index) => (
          <BotonPelicula key={index} {...pelicula} />
        ))}
      </div>
    </div>
  );
}