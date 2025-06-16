import CartillaActor from '../componentes/CartillaActor';

const actores = [
  {
    nombre: "Juan Carlos Valdivia",
    imagen: "https://via.placeholder.com/150?text=Valdivia",
    pelicula: "Zona Sur"
  },
  {
    nombre: "Paz Padilla",
    imagen: "https://via.placeholder.com/150?text=Padilla",
    pelicula: "El Cementerio de los Elefantes"
  },
  {
    nombre: "Milton Cortez",
    imagen: "https://via.placeholder.com/150?text=Cortez",
    pelicula: "Los Andes no creen en Dios"
  }
];

export default function Principal() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Actores Bolivianos Destacados</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {actores.map((actor, index) => (
          <CartillaActor key={index} {...actor} />
        ))}
      </div>
    </div>
  );
}