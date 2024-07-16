

let listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

const objUsuario = {
    id: '',
    nombre: '',
    email: '',
    rut: '',
    password: '',
    diasJuego: [],
    notificaciones: ''
};

let editando = false;

document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('registroForm');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const rutInput = document.getElementById('rut');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const diasJuegoCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    const notificacionesRadios = document.querySelectorAll('input[name="notificaciones"]');
    const btnAgregar = document.getElementById('btnAgregar');

    formulario.addEventListener('submit', validarFormulario);
    passwordInput.addEventListener('input', normalizarBorde);
    confirmPasswordInput.addEventListener('input', normalizarBorde);
    nombreInput.addEventListener('input', validarNombre);

    mostrarUsuarios();

    function validarFormulario(e) {
        e.preventDefault();

        if (nombreInput.value === '' || emailInput.value === '' || rutInput.value === '' || passwordInput.value === '' || confirmPasswordInput.value === '') {
            alert('Todos los campos son obligatorios.');
            return;
        }

        if (!/^[a-zA-Z\s]+$/.test(nombreInput.value)) {
            alert('El nombre solo puede contener letras y espacios.');
            nombreInput.style.borderColor = 'red';
            return;
        }

        if (!validarRut(rutInput.value)) {
            alert('El Rut no es válido.');
            rutInput.style.borderColor = 'red';
            return;
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            alert('Las contraseñas no coinciden.');
            passwordInput.style.borderColor = 'red';
            confirmPasswordInput.style.borderColor = 'red';
            return;
        }

        const diasJuegoSeleccionados = Array.from(diasJuegoCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        const notificacionesSeleccionadas = Array.from(notificacionesRadios)
            .find(radio => radio.checked).value;

        if (editando) {
            editarUsuario();
            editando = false;
        } else {
            objUsuario.id = Date.now();
            objUsuario.nombre = nombreInput.value;
            objUsuario.email = emailInput.value;
            objUsuario.rut = formatearRut(rutInput.value);
            objUsuario.password = passwordInput.value;
            objUsuario.diasJuego = diasJuegoSeleccionados;
            objUsuario.notificaciones = notificacionesSeleccionadas;
            agregarUsuario();
        }
    }

    function agregarUsuario() {
        listaUsuarios.push({ ...objUsuario });
        localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));

        mostrarUsuarios();

        formulario.reset();

        limpiarObjeto();
    }

    function mostrarUsuarios() {
        const divUsuarios = document.querySelector('.div-usuarios');

        limpiarHTML();
        listaUsuarios.forEach(usuario => {
            const { id, nombre, email, rut, diasJuego, notificaciones } = usuario;

            const parrafo = document.createElement('p');
            parrafo.textContent = `${nombre} - ${email} - Rut: ${rut} - Días de juego: ${diasJuego.join(', ')} - Notificaciones: ${notificaciones}`;
            parrafo.dataset.id = id;

            const editarBoton = document.createElement('button');
            editarBoton.onclick = () => cargarUsuario(usuario);
            editarBoton.textContent = 'Editar';
            editarBoton.classList.add('btn', 'btn-editar', 'ml-2');
            parrafo.append(editarBoton);

            const eliminarBoton = document.createElement('button');
            eliminarBoton.onclick = () => eliminarUsuario(id);
            eliminarBoton.textContent = 'Eliminar';
            eliminarBoton.classList.add('btn', 'btn-eliminar', 'ml-2');
            parrafo.append(eliminarBoton);

            const hr = document.createElement('hr');

            divUsuarios.appendChild(parrafo);
            divUsuarios.appendChild(hr);
        });
    }

    function limpiarHTML() {
        const divUsuarios = document.querySelector('.div-usuarios');
        while (divUsuarios.firstChild) {
            divUsuarios.removeChild(divUsuarios.firstChild);
        }
    }

    function limpiarObjeto() {
        objUsuario.id = '';
        objUsuario.nombre = '';
        objUsuario.email = '';
        objUsuario.rut = '';
        objUsuario.password = '';
        objUsuario.diasJuego = [];
        objUsuario.notificaciones = '';
    }

    function cargarUsuario(usuario) {
        const { id, nombre, email, rut, diasJuego, notificaciones } = usuario;
        document.getElementById('nombre').value = nombre;
        document.getElementById('email').value = email;
        document.getElementById('rut').value = rut;
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';

        diasJuegoCheckboxes.forEach(checkbox => {
            checkbox.checked = diasJuego.includes(checkbox.value);
        });

        notificacionesRadios.forEach(radio => {
            radio.checked = radio.value === notificaciones;
        });

        objUsuario.id = id;

        editando = true;
    }

    function editarUsuario() {
        objUsuario.nombre = document.getElementById('nombre').value;
        objUsuario.email = document.getElementById('email').value;
        objUsuario.rut = formatearRut(document.getElementById('rut').value);
        objUsuario.password = document.getElementById('password').value;
        objUsuario.diasJuego = Array.from(diasJuegoCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        objUsuario.notificaciones = Array.from(notificacionesRadios)
            .find(radio => radio.checked).value;

        listaUsuarios = listaUsuarios.map(usuario => {
            if (usuario.id === objUsuario.id) {
                return { ...objUsuario };
            }
            return usuario;
        });

        localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));

        mostrarUsuarios();

        formulario.reset();

        limpiarObjeto();
    }

    function eliminarUsuario(id) {
        listaUsuarios = listaUsuarios.filter(usuario => usuario.id !== id);
        localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));
        mostrarUsuarios();
    }

    function normalizarBorde(e) {
        e.target.style.borderColor = '';
    }

    function validarRut(rut) {
        const rutClean = rut.replace(/[^0-9kK]/g, '');
        const cuerpo = rutClean.slice(0, -1);
        const dv = rutClean.slice(-1).toUpperCase();

        if (cuerpo.length < 7) {
            return false;
        }

        let suma = 0;
        let multiplo = 2;

        for (let i = 1; i <= cuerpo.length; i++) {
            const index = multiplo * rutClean.charAt(cuerpo.length - i);
            suma = suma + index;
            multiplo = multiplo < 7 ? multiplo + 1 : 2;
        }

        const dvEsperado = 11 - (suma % 11);
        const dvFinal = dvEsperado === 11 ? '0' : dvEsperado === 10 ? 'K' : dvEsperado.toString();

        return dvFinal === dv;
    }

    function formatearRut(rut) {
        const rutClean = rut.replace(/[^0-9kK]/g, '');
        const cuerpo = rutClean.slice(0, -1);
        const dv = rutClean.slice(-1).toUpperCase();

        let rutFormateado = '';
        for (let i = cuerpo.length - 1, j = 1; i >= 0; i--, j++) {
            rutFormateado = cuerpo.charAt(i) + rutFormateado;
            if (j % 3 === 0 && i > 0) {
                rutFormateado = '.' + rutFormateado;
            }
        }

        return `${rutFormateado}-${dv}`;
    }

    function validarNombre(e) {
        const nombre = e.target.value;
        if (/^[a-zA-Z\s]*$/.test(nombre)) {
            nombreInput.style.borderColor = '';
        } else {
            nombreInput.style.borderColor = 'red';
            e.target.value = nombre.replace(/[^a-zA-Z\s]/g, '');
        }
    }
});





