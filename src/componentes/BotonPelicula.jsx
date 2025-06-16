import { useState } from 'react';
import ModalPelicula from './ModalPelicula';

export default function BotonPelicula({ titulo, resumen }) {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <>
      <button 
        onClick={() => setModalAbierto(true)}
        className="btn btn-primary w-64"
      >
        {titulo}
      </button>
      
      <ModalPelicula 
        abierto={modalAbierto}
        onCerrar={() => setModalAbierto(false)}
        titulo={titulo}
        resumen={resumen}
      />
    </>
  );
}