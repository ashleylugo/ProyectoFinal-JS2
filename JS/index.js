let muestraNivelPrincipiante;
let muestraNivelIntermedio;
let muestraNivelAvanzado;

const obtenerDatosJson = async () => {
  const url = "./clases.json";
  const response = await fetch(url);
  return await response.json();
};


//Interaccion con el usuario- SWEETALERT//
const welcomeMenu = (clases) => {
  //METODO FIND
  const muestraNivelPrincipiante = clases.find((item) => {
    return item.dificultad === "Principiante";
  });
  const muestraNivelIntermedio = clases.find((item) => {
    return item.dificultad === "Intermedio";
  });
  const muestraNivelAvanzado = clases.find((item) => {
    return item.dificultad === "Avanzado";
  });

  Swal.fire({
    title: "Bienvenido al gimnasio GYMFIT",
    text: "Presione ok para continuar",
    showConfirmButton: true,
    confirmButtonColor: "#9acd32",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  }).then((result) => {
    Swal.fire({
      title: "Para elegir su clase, indique el nivel de dificultad",
      showConfirmButton: true,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Principiante",
      denyButtonText: "Intermedio",
      cancelButtonText: "Avanzado",
    }).then((result) => {
      const cardsContainer = document.getElementById("cardsContainer");
      if (result.isConfirmed) {
        console.log(muestraNivelPrincipiante);
        Swal.fire("Para nivel principiante tenemos Boxeo", "", "success");
        cardsContainer.innerHTML = `
        <div class="card" id=${muestraNivelPrincipiante.id}>
          <div class="card-img">
            <img src="./${muestraNivelPrincipiante.image}" alt="clase2" />
            <div class="card-titulo">
              <h4>${muestraNivelPrincipiante.nombre}</h4>
            </div>
          </div>
          <div class="card-content">
              ${muestraNivelPrincipiante.description}
          </div>
        </div>
        `;
        const boxCard = document.getElementById(muestraNivelPrincipiante.id);
        boxCard.addEventListener("click", (e) => {
          Swal.fire({
            title: `Clase de ${muestraNivelPrincipiante.nombre} con ${muestraNivelPrincipiante.profe} en ${muestraNivelPrincipiante.barrio} a las ${muestraNivelPrincipiante.horario}`,
          });
        });
      } else if (result.isDenied) {
        console.log(muestraNivelIntermedio);
        Swal.fire("Para nivel intermedio tenemos Funcional", "","success");
        cardsContainer.innerHTML = `
        <div class="card" id=${muestraNivelIntermedio.id}>
          <div class="card-img">
            <img src="./${muestraNivelIntermedio.image}" alt="clase2" />
            <div class="card-titulo">
              <h4>${muestraNivelIntermedio.nombre}</h4>
            </div>
          </div>
          <div class="card-content">
              ${muestraNivelIntermedio.description}
          </div>
        </div>
        `;
        const funcionalCard = document.getElementById(muestraNivelIntermedio.id);
        funcionalCard.addEventListener("click", (e) => {
          Swal.fire({
            title: `Clase de ${muestraNivelIntermedio.nombre} con ${muestraNivelIntermedio.profe} en ${muestraNivelIntermedio.barrio} a las ${muestraNivelIntermedio.horario}`,
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log(muestraNivelAvanzado);
        Swal.fire("Para nivel avanzado tenemos Zumba", "", "success");
        cardsContainer.innerHTML = `
        <div class="card" id=${muestraNivelAvanzado.id}>
          <div class="card-img">
            <img src="./${muestraNivelAvanzado.image}" alt="clase2" />
            <div class="card-titulo">
              <h4>${muestraNivelAvanzado.nombre}</h4>
            </div>
          </div>
          <div class="card-content">
              ${muestraNivelAvanzado.description}
          </div>
        </div>
        `;
        const zumbaCard = document.getElementById(muestraNivelAvanzado.id);
        zumbaCard.addEventListener("click", (e) => {
          Swal.fire({
            title: `Clase de ${muestraNivelAvanzado.nombre} con ${muestraNivelAvanzado.profe} en ${muestraNivelAvanzado.barrio} a las ${muestraNivelAvanzado.horario}`,
          });
        });
      }
    });
  });
};

const init = async () => {
  jsonData = await obtenerDatosJson();
  welcomeMenu(jsonData);
};

init();

    

