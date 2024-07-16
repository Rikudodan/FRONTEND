import { Importaciones } from "./Importaciones";
import '../index.css';

export const BarNav = () => {
  return (
    <>
    <Importaciones/>
        <header className="bg-dark text-white py-2">
            <div className="container">
            <h1 className="custom-titulo text-center">Casino Virtual Lo Miranda</h1>
            <nav className="text-center">
                <a href="#juegos" className="text-white">Juegos</a> |
                <a href="#promociones" className="text-white">Promociones</a> |
                <a href="#contacto" className="text-white">Contacto</a>
            </nav>
            <div className="float-right">
              <br/>
                <a href='' className="btn btn-outline-light mr-2">Iniciar Sesión</a>
                <a href='#Formulario' className="btn btn-outline-light mr-2">Regístrate</a>
            </div>
            </div>
        </header>
    </>
  )
}

export default BarNav;