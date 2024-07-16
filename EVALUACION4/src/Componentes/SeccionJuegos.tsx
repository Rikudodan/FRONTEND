import '../index.css'

export const SeccionJuegos = () => {
  return (
    <div>
      <section id="juegos" className="py-5">
        <div className="container">
          <h2 className="custom-h2 text-center text-white">Nuestros Juegos</h2>
          <div className="row">
            <div className="btn col-md-3">
              <img src="imagenes/slotmachine.jpg" alt="tragamonedas" className="img-fluid" />
              <h3 className="text-center text-white">Tragamonedas</h3>
            </div>
            <div className="btn col-md-3">
              <img src="imagenes/ruleta.jpg" alt="Ruleta" className="img-fluid" />
              <h3 className="text-center text-white">Ruleta</h3>
            </div>
            <div className="btn col-md-3">
              <img src="imagenes/blackjack6.jpg" alt="Blackjack" className="img-fluid" />
              <h3 className="text-center text-white">Blackjack</h3>
            </div>
            <div className="btn col-md-3">
              <img src="imagenes/poker.jpg" alt="Poker" className="img-fluid" />
              <h3 className="text-center text-white">Póker</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeccionJuegos;
