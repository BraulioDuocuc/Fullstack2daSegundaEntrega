import { useState, useEffect } from 'react';
import ObraCard from '../components/ObraCard';

function Productos() {
  const [obras, setObras] = useState([
    {
      id: 4,
      titulo: "La Gioconda",
      autor: "Leonardo da Vinci",
      tecnica: "Óleo",
      anio: "1503",
      precio: 450000,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
      url: "https://es.wikipedia.org/wiki/Leonardo_da_Vinci"
    },
    {
      id: 5,
      titulo: "Guernica",
      autor: "Pablo Picasso",
      tecnica: "Óleo",
      anio: "1937",
      precio: 380000,
      imagen: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg",
      url: "https://es.wikipedia.org/wiki/Pablo_Picasso"
    },
    {
      id: 6,
      titulo: "La noche estrellada",
      autor: "Vincent van Gogh",
      tecnica: "Óleo",
      anio: "1889",
      precio: 320000,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
      url: "https://es.wikipedia.org/wiki/Vincent_van_Gogh"
    },
    {
      id: 7,
      titulo: "El grito",
      autor: "Edvard Munch",
      tecnica: "Óleo, temple y pastel",
      anio: "1893",
      precio: 290000,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
      url: "https://es.wikipedia.org/wiki/Edvard_Munch"
    },
    {
      id: 8,
      titulo: "La persistencia de la memoria",
      autor: "Salvador Dalí",
      tecnica: "Óleo",
      anio: "1931",
      precio: 275000,
      imagen: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
      url: "https://es.wikipedia.org/wiki/Salvador_Dal%C3%AD"
    },
    {
      id: 9,
      titulo: "Las meninas",
      autor: "Diego Velázquez",
      tecnica: "Óleo",
      anio: "1656",
      precio: 410000,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/1280px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg",
      url: "https://es.wikipedia.org/wiki/Diego_Vel%C3%A1zquez"
    }
  ]);

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