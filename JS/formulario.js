const miFormulario= document.getElementById('form-registrar');

// localStorage.clear()

miFormulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    registrar();
})

function registrar() {
    let nombre = document.getElementById('nombre').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    let sede = document.getElementById('sede').value;
    let mensaje = document.getElementById('mensaje').value;

//Objeto para almacenar los datos del usuario
    const usuario = {
        nombre: nombre, 
        telefono: telefono,
        email: email,
        sede: sede,
        mensaje: mensaje
    };

//Guardo el objeto de usuario en el localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));

//limpio los campos del formulario
    miFormulario.reset();
}

//SWEETALERT EN EL BOTON DE ENVIAR

const botonEnviar = document.getElementById('boton1');

botonEnviar.addEventListener('click', () => {

    Swal.fire({
        title: 'Mensaje enviado exitosamente',
        icon: 'success',
        text: 'En breve nos contactaremos con vos',
        confirmButtonColor: '#9acd32',
    })
})

//SWEETALERT EN EL BOTON CANCELAR

const botonCancelar = document.getElementById('boton2');

botonCancelar.addEventListener('click', () => {
    Swal.fire({
        confirmButtonText: 'Eliminar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        title: '¿Desea eliminar los campos?',
        icon: 'warning',
        cancelButtonColor: '#9acd32',
        confirmButtonColor: '#9acd32',
    })
})

//GET en archivo local-Guardo los usuarios con FETCH (me parece que no se puede)

// fetch('./json/usuarios.json')
//     .then((response) =>{
//         if (response.ok){
//             return response.json();
//         } else{
//             console.log ('Fallo el registro');
//         }
//     })
//     .then((usuarios) => {
//         console.log(usuarios);
//     })

//INTENTO GUARDAR LOS USUARIOS CON FETCH Y LA API json-server

// URL base de la API local
const URL = 'http://localhost:3000';

//AGREGAR USUARIOS AL ARCHIVO db.json

// const usuarioNuevo = {
//     nombre: nombre, 
//     telefono: telefono,
//     email: email,
//     sede: sede,
//     mensaje: mensaje
// };

// fetch(`${URL}/usuarios`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(usuarioNuevo),
//   })
//     .then((response) =>{
//         if (response.ok){
//             return response.json();   
//         } else{
//             throw new Error('Error al agregar usuario');
//         }
//     })

function cargarUsuarios() {
    fetch(`${URL}/usuarios`)
      .then((response) => {
        if (!response.ok) {
          return response.json();
        } else {
          throw new Error('Error al cargar usuarios');
        }
        
      })
      .then((usuarios) => {
        mostrarUsuarios(usuarios);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function mostrarUsuarios(usuarios) {
    let listaUsuarios = document.getElementById('lista');
    listaUsuarios.innerHTML = '';
  
    usuarios.forEach(function(usuario) {
      let itemUsuario = document.createElement('li');
      itemUsuario.textContent = `Nombre: ${usuario.nombre}, Email: ${usuario.email}, Número: ${usuario.telefono}`;
      listaUsuarios.appendChild(itemUsuario);
    });
  }

    cargarUsuarios();