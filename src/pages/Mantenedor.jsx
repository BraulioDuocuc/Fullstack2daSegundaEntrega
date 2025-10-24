import { useState, useEffect } from 'react';
import obrasData from '../data/obras.json';

function Mantenedor() {
  const [obras, setObras] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    titulo: '',
    autor: '',
    tecnica: '',
    anio: '',
    precio: '',
    imagen: '',
    url: ''
  });
  const [editMode, setEditMode] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    setObras(obrasData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'precio' ? Number(value) : value
    });
  };

  const resetForm = () => {
    setFormData({
      id: '',
      titulo: '',
      autor: '',
      tecnica: '',
      anio: '',
      precio: '',
      imagen: '',
      url: ''
    });
    setEditMode(false);
  };

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.titulo || !formData.autor || !formData.precio) {
      showMessage('Por favor complete los campos obligatorios', 'danger');
      return;
    }

    if (editMode) {
      // Actualizar obra existente (simulado)
      const updatedObras = obras.map(obra => 
        obra.id === formData.id ? formData : obra
      );
      setObras(updatedObras);
      showMessage('Obra actualizada con éxito', 'success');
    } else {
      // Agregar nueva obra (simulado)
      const newId = Math.max(...obras.map(obra => obra.id), 0) + 1;
      const newObra = { ...formData, id: newId };
      setObras([...obras, newObra]);
      showMessage('Obra agregada con éxito', 'success');
    }
    
    resetForm();
  };

  const handleEdit = (obra) => {
    setFormData(obra);
    setEditMode(true);
  };

  const handleDelete = (id) => {
    // Eliminar obra (simulado)
    const filteredObras = obras.filter(obra => obra.id !== id);
    setObras(filteredObras);
    showMessage('Obra eliminada con éxito', 'success');
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Mantenedor de Obras</h1>
      
      {message.text && (
        <div className={`alert alert-${message.type} alert-dismissible fade show`} role="alert">
          {message.text}
          <button type="button" className="btn-close" onClick={() => setMessage({ text: '', type: '' })}></button>
        </div>
      )}
      
      <div className="row">
        <div className="col-md-4">
          <div className="card bg-dark text-light">
            <div className="card-header">
              <h5>{editMode ? 'Editar Obra' : 'Agregar Nueva Obra'}</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Título *</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="titulo" 
                    value={formData.titulo} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Autor *</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="autor" 
                    value={formData.autor} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Técnica</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="tecnica" 
                    value={formData.tecnica} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Año</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="anio" 
                    value={formData.anio} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Precio *</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    name="precio" 
                    value={formData.precio} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">URL de Imagen</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="imagen" 
                    value={formData.imagen} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">URL de Referencia</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="url" 
                    value={formData.url} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary">
                    {editMode ? 'Actualizar' : 'Agregar'}
                  </button>
                  {editMode && (
                    <button type="button" className="btn btn-secondary" onClick={resetForm}>
                      Cancelar
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-md-8">
          <div className="table-responsive">
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Título</th>
                  <th>Autor</th>
                  <th>Técnica</th>
                  <th>Año</th>
                  <th>Precio</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {obras.map(obra => (
                  <tr key={obra.id}>
                    <td>{obra.id}</td>
                    <td>{obra.titulo}</td>
                    <td>{obra.autor}</td>
                    <td>{obra.tecnica}</td>
                    <td>{obra.anio}</td>
                    <td>${obra.precio.toLocaleString()}</td>
                    <td>
                      <button 
                        className="btn btn-sm btn-warning me-1" 
                        onClick={() => handleEdit(obra)}
                      >
                        Editar
                      </button>
                      <button 
                        className="btn btn-sm btn-danger" 
                        onClick={() => handleDelete(obra.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mantenedor;