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


alert ("Bienvenido al gimnasio GYMFIT");
opcion = parseInt(prompt("Para elegir su clase, indique el nivel de dificultad \n 1- Principiante \n 2- Intermedio \n 3- Avanzado \n" ));

    switch (opcion){

        case 1:
            console.log (muestraNivelPrincipiante);
            alert ('Para nivel principiante tenemos Boxeo');
            break;

        case 2:
            console.log(muestraNivelIntermedio);
            alert ('Para nivel intermedio tenemos \n Funcional \n TRX \n Abdominales');
            break;

        case 3:
            console.log(muestraNivelAvanzado);
            alert ('Para nivel avanzado tenemos Zumba');
            break;

        }