import { useState, useEffect } from 'react';
import ObraCard from '../components/ObraCard';

function Home() {
  const [obras, setObras] = useState([
    {
      id: 1,
      titulo: "Impresión, sol naciente",
      autor: "Claude Monet",
      tecnica: "Óleo",
      anio: "1872",
      precio: 120000,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/5/59/Monet_-_Impression%2C_Sunrise.jpg",
      url: "https://es.wikipedia.org/wiki/Impresionismo"
    },
    {
      id: 2,
      titulo: "El nacimiento de Venus",
      autor: "Sandro Botticelli",
      tecnica: "Témpera",
      anio: "1485",
      precio: 250000,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1920px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
      url: "https://es.wikipedia.org/wiki/El_nacimiento_de_Venus_(Botticelli)"
    },
    {
      id: 3,
      titulo: "Saturno devorando a su hijo",
      autor: "Francisco de Goya",
      tecnica: "Óleo",
      anio: "1820",
      precio: 300000,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg/800px-Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg",
      url: "https://es.wikipedia.org/wiki/Francisco_de_Goya"
    }
  ]);

  return (
    <>
      <header className="bg-image text-center text-white p-5" style={{backgroundImage: "url('https://www.muyinteresante.com/wp-content/uploads/sites/5/2023/12/14/657ae2d72fd2f.jpeg?resize=1920,871')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <h1 className="display-4 fw-bold">Bienvenido a nuestra Tienda de Arte</h1>
        <p className="lead">Compra las mejores obras desde la comodidad de tu hogar</p>
      </header>

      <div className="galeria">
        {obras.map(obra => (
          <ObraCard key={obra.id} obra={obra} />
        ))}
      </div>
    </>
  );
}

export default Home;