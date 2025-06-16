export default function ModalPelicula({ abierto, onCerrar, titulo, resumen }) {
  if (!abierto) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h3 className="text-xl font-bold mb-2">{titulo}</h3>
        <p className="mb-4">{resumen}</p>
        <button
          onClick={onCerrar}
          className="btn btn-primary"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
