import '../index.css'

export const Promociones = () => {
  return (
    <div>
        <section id="promociones" className="py-5 bg-black">
    <div className="container">
      <h2 className="custom-h2 text-center text-white">Promociones</h2>
      <div className="row">
        <div className="promo-card col-md-4">
          <div className="btn btn-outline-primary ">
            <div className="card-body ">
			  <img src="imagenes/bono.jpg" alt="Bono" className="img-fluid"/>
            <h3 className="card-title">Bono de Bienvenida</h3>
              <p className="card-text">¡Regístrate y obtén un bono del 100%!</p>
            </div>
          </div>
        </div>
        <div className="promo-card col-md-4">
          <div className="btn btn-outline-primary">
            <div className="card-body">
			  <img src="imagenes/giros3.jpg" alt="giros" className="img-fluid"/>
              <h3 className="card-title">Giros Gratis</h3>
              <p className="card-text">¡Recibe giros gratis cada semana!</p>
            </div>
          </div>
        </div>
        <div className="promo-card col-md-4">
          <div className="btn btn-outline-primary">
            <div className="card-body">
			  <img src="imagenes/sorteo.jpg" alt="sorteo-semanal" className="img-fluid"/>
              <h3 className="card-title">Sorteos Semanales</h3>
              <p className="card-text">Participa en nuestros sorteos semanales.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
