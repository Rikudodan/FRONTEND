import '../index.css';

export const Formulario = () => {

  return (
    <div>
      <div className="container mt-0" id='Formulario'>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Registro de Usuario</div>
              <div className="card-body">
                <form id="registroForm">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Ingresa tu email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rut">RUT:</label>
                    <input type="text" className="form-control" id="rut" placeholder="Ingresa tu RUT" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirma tu contraseña" required />
                  </div>
                  <div className="form-group">
                    <label>¿Qué días juegas frecuentemente?</label><br />
                    <div>
                      <label><input type="checkbox" value="Lunes" /> Lunes</label>
                      <label><input type="checkbox" value="Martes" /> Martes</label>
                      <label><input type="checkbox" value="Miércoles" /> Miércoles</label>
                      <label><input type="checkbox" value="Jueves" /> Jueves</label>
                      <label><input type="checkbox" value="Viernes" /> Viernes</label>
                      <label><input type="checkbox" value="Sábado" /> Sábado</label>
                      <label><input type="checkbox" value="Domingo" /> Domingo</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>¿Quieres recibir notificaciones a tu correo electrónico?</label><br />
                    <div>
                      <label><input type="radio" name="notificaciones" value="Sí" required /> Sí</label>
                      <label><input type="radio" name="notificaciones" value="No" required /> No</label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary" id="btnAgregar">Registrarse</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Registros de Usuarios</div>
              <div className="card-body">
                <div className="div-usuarios"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="Validation.js"></script>
    </div>
  );
};

export default Formulario;