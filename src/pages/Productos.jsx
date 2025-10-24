import { useState, useEffect } from 'react';
import ObraCard from '../components/ObraCard';
import obrasData from '../data/obras.json';

function Productos() {
  const [obras, setObras] = useState([]);

  useEffect(() => {
    setObras(obrasData);
  }, []);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Catálogo de Obras</h1>
      <div className="galeria">
        {obras.map(obra => (
          <ObraCard key={obra.id} obra={obra} />
        ))}
      </div>
    </div>
  );
}

export default Productos;