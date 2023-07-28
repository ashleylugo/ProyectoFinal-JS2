const PRINCIPIANTE = 1;
const INTERMEDIO = 2;
const AVANZADO = 3;

const clases = [];

clases.push( new Clase ('Funcional', 'Daniel', 'Intermedio', 'Caballito', '17hs'));
clases.push( new Clase ('Boxeo', 'Manuel', 'Principiante', 'Belgrano', '19hs'));
clases.push( new Clase ('Zumba', 'Maria', 'Avanzado', 'Caballito', '14hs'));
clases.push( new Clase ('TRX', 'Carolina', 'Intermedio', 'Belgrano', '10hs'));
clases.push( new Clase ('Abdominales', 'Carlos', 'Intermedio', 'Belgrano', '20hs'));

//METODO FILTER

const muestraNivelPrincipiante = clases.filter((item) => { return item.dificultad === 'Principiante'});

const muestraNivelIntermedio = clases.filter((item) => { return item.dificultad === 'Intermedio'});

const muestraNivelAvanzado = clases.filter((item) => { return item.dificultad === 'Avanzado'});


//Interaccion con el usuario- SWEETALERT//

const bienvenida = Swal.fire({
    title: 'Bienvenido al gimnasio GYMFIT',
    text: 'Presione ok para continuar',
    showConfirmButton: true,
    confirmButtonColor: '#9acd32',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }  
  }).then ((result) => {
    Swal.fire({
        title: 'Para elegir su clase, indique el nivel de dificultad',
        showConfirmButton: true,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Principiante',
        denyButtonText: 'Intermedio',
        cancelButtonText: 'Avanzado',
    }).then ((result) =>{
        if (result.isConfirmed) {
            console.log (muestraNivelPrincipiante);  
            Swal.fire('Para nivel principiante tenemos Boxeo', '', 'success')
        } else if (result.isDenied) {
            console.log(muestraNivelIntermedio);  
            Swal.fire('Para nivel intermedio tenemos Funcional, TRX, y Abdominales', '', 'success')
        } else if (result.dismiss === Swal.DismissReason.cancel){
            console.log(muestraNivelAvanzado);
            Swal.fire('Para nivel avanzado tenemos Zumba', '', 'success')
        }
    })
  })
    

//ANTES, todo lo que esta arriba con sweetlert era este pedazo de codigo, pero lo saqué porque no podia usar Prompt ni alerts//

// opcion = parseInt(prompt("Para elegir su clase, indique el nivel de dificultad \n 1- Principiante \n 2- Intermedio \n 3- Avanzado \n" ));

//     switch (opcion){

//         case 1:
//             console.log (muestraNivelPrincipiante);
//             alert ('Para nivel principiante tenemos Boxeo');
//             break;

//         case 2:
//             console.log(muestraNivelIntermedio);
//             alert ('Para nivel intermedio tenemos \n Funcional \n TRX \n Abdominales');
//             break;

//         case 3:
//             console.log(muestraNivelAvanzado);
//             alert ('Para nivel avanzado tenemos Zumba');
//             break;

//         }