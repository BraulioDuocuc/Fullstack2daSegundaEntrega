import React, { useEffect, useMemo, useState } from 'react';
import ObraCard from '../components/ObraCard';
import obrasData from '../data/obras.json';
import { useSearchParams } from 'react-router-dom';

const Categorias = () => {
  const [obras, setObras] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedEstilo, setSelectedEstilo] = useState(searchParams.get('estilo') || 'Todos');

  useEffect(() => {
    setObras(obrasData);
  }, []);

  useEffect(() => {
    const estiloParam = searchParams.get('estilo');
    setSelectedEstilo(estiloParam || 'Todos');
  }, [searchParams]);

  const estilos = useMemo(() => {
    const set = new Set();
    obrasData.forEach((o) => {
      if (o.estilo && typeof o.estilo === 'string') {
        set.add(o.estilo);
      }
    });
    return Array.from(set).sort();
  }, []);

  const obrasFiltradas = useMemo(() => {
    if (selectedEstilo === 'Todos') return obras;
    return obras.filter((o) => o.estilo === selectedEstilo);
  }, [selectedEstilo, obras]);

  const handleSelect = (estilo) => {
    setSelectedEstilo(estilo);
    if (estilo === 'Todos') {
      setSearchParams({});
    } else {
      setSearchParams({ estilo });
    }
  };

  return (
    <div className="container py-4 text-center">
      <h1 className="mb-3 fw-bold">Categorías por estilo</h1>
      <p className="text-muted mb-4">Selecciona un estilo para ver las obras.</p>

      {/* 🔹 Botones de categorías estilizados */}
      <div className="d-flex flex-wrap gap-2 mb-4 justify-content-center categorias-botones">
        {['Todos', ...estilos].map((estilo) => (
          <button
            key={estilo}
            type="button"
            className={`categoria-btn ${selectedEstilo === estilo ? 'active' : ''}`}
            onClick={() => handleSelect(estilo)}
          >
            {estilo}
          </button>
        ))}
      </div>

      {selectedEstilo !== 'Todos' && (
        <p className="text-muted">Filtrando por: {selectedEstilo}</p>
      )}

      <div className="row">
        {obrasFiltradas.map((obra) => (
          <div key={obra.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <ObraCard obra={obra} />
          </div>
        ))}
        {obrasFiltradas.length === 0 && (
          <div className="col-12">
            <div className="alert alert-info">No hay obras para el estilo seleccionado.</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categorias;
