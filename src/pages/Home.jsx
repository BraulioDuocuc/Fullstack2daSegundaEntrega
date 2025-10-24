import { useState, useEffect, useRef } from 'react';
import ObraCard from '../components/ObraCard';
import obrasData from '../data/obras.json';

function Home() {
  const [obras, setObras] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Limitar el slider a las 12 obras actuales (no aumenta al agregar nuevas)
    setObras(obrasData.slice(0, 12));
  }, []);

  const scrollByCards = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const card = container.querySelector('.slide');
    const gap = 16;
    const step = (card?.offsetWidth || 300) + gap;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (direction > 0) {
      if (container.scrollLeft >= maxScrollLeft - 2) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
        return;
      }
      container.scrollTo({
        left: Math.min(maxScrollLeft, container.scrollLeft + step),
        behavior: 'smooth',
      });
    } else {
      if (container.scrollLeft <= 2) {
        container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
        return;
      }
      container.scrollTo({
        left: Math.max(0, container.scrollLeft - step),
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Hero principal */}
      <header
        className="text-white text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('https://www.muyinteresante.com/wp-content/uploads/sites/5/2023/12/14/657ae2d72fd2f.jpeg?resize=1920,871')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '70vh',
          padding: '60px 20px',
        }}
      >
        <h1
          className="display-4 fw-bold mb-3"
          style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.8)' }}
          aria-label="Bienvenido a nuestra Tienda de Arte"
        >
          Aisthētikê
        </h1>
        <p
          className="lead mb-4"
          style={{
            maxWidth: '700px',
            textShadow: '1px 1px 6px rgba(0,0,0,0.7)',
          }}
        >
          Donde el arte y la emoción se encuentran. Explora una colección única
          de obras digitales y contemporáneas.
        </p>
        <a
          href="#galeria"
          className="btn btn-outline-light px-4 py-2 rounded-pill"
          style={{
            borderWidth: '2px',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#fff')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          Explorar Galería
        </a>
      </header>

      {/* Introducción a la galería */}
      <section id="galeria" className="text-center mt-5 mb-3">
        <h2 className="fw-bold">Galería Destacada</h2>
        <p className="text-muted">
          Obras seleccionadas que inspiran, conmueven y conectan.
        </p>
      </section>

      {/* Carrusel */}
      <div className="slider-container">
        <button
          className="slider-btn left"
          onClick={() => scrollByCards(-1)}
          aria-label="Anterior"
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <div className="slider-track" ref={sliderRef}>
          {obras.map((obra) => (
            <div className="slide" key={obra.id}>
              <ObraCard obra={obra} />
            </div>
          ))}
        </div>
        <button
          className="slider-btn right"
          onClick={() => scrollByCards(1)}
          aria-label="Siguiente"
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>

      {/* Footer */}
      <footer
        className="mt-5"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          color: '#ccc',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        © 2025 <strong>Aisthētikê</strong> — Donde el arte cobra vida.
      </footer>
    </>
  );
}

export default Home;
