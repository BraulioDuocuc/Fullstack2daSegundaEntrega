function QuienesSomos() {
  return (
    <section id="quienes-somos" className="container my-5 py-4">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Quiénes Somos</h2>
        <p className="text-muted">La esencia detrás de Aisthētikê</p>
      </div>

      <div className="mx-auto" style={{ maxWidth: "850px", lineHeight: "1.8" }}>
        <p>
          En <strong>Aisthētikê</strong>, transformamos la experiencia de contemplar arte en algo cercano,
          digital y profundamente humano. Somos una galería online dedicada a difundir obras originales de
          artistas emergentes y consolidados, creando un espacio donde la sensibilidad estética y la tecnología se encuentran.
        </p>

        <h4 className="mt-4 text-primary">Nuestra Misión</h4>
        <p>
          Nuestra misión es <strong>acercar el arte a todos</strong>, brindando una plataforma que celebre la creatividad
          y facilite el acceso a obras auténticas. Buscamos conectar a artistas con personas que valoran la expresión visual
          como una forma de identidad, emoción y cultura.
        </p>

        <h4 className="mt-4 text-primary">Nuestra Visión</h4>
        <p>
          Aspiramos a convertirnos en una <strong>referencia latinoamericana en arte contemporáneo digital</strong>,
          un punto de encuentro donde la inspiración, la belleza y la diversidad artística sean parte de la vida cotidiana.
          Creemos en un futuro donde cada hogar y espacio refleje una historia a través del arte.
        </p>

        <h4 className="mt-4 text-primary">Nuestros Valores</h4>
        <ul>
          <li><strong>Autenticidad:</strong> cada obra cuenta una historia única y original.</li>
          <li><strong>Accesibilidad:</strong> el arte debe estar al alcance de todos.</li>
          <li><strong>Creatividad:</strong> impulsamos la innovación en cada forma de expresión.</li>
          <li><strong>Respeto:</strong> valoramos la visión y trabajo de cada artista.</li>
          <li><strong>Excelencia:</strong> cuidamos cada detalle, desde la curaduría hasta la experiencia del cliente.</li>
        </ul>

        <h4 className="mt-4 text-primary">Nuestra Historia</h4>
        <p>
          <strong>Aisthētikê</strong> nació del amor por lo bello y el deseo de crear un puente entre artistas y público.
          Inspirados en la palabra griega que significa “percepción sensible”, creamos una plataforma donde cada trazo, textura
          y color se convierte en una invitación a sentir. Comenzamos con un pequeño grupo de creadores apasionados y hoy somos
          una comunidad que crece con cada nueva obra compartida.
        </p>

        <div className="mt-5 text-center">
          <p className="fw-semibold fs-5">
            Explora, descubre y deja que el arte hable por ti.
          </p>
        </div>
      </div>
    </section>
  );
}

export default QuienesSomos;
