export default function CartillaActor({ nombre, imagen, pelicula }) {
  return (
    <div className="card w-64 bg-base-100 shadow-xl">
      <figure><img src={imagen} alt={nombre} /></figure>
      <div className="card-body">
        <h3 className="card-title">{nombre}</h3>
        <p>Conocido por: {pelicula}</p>
      </div>
    </div>
  );
}