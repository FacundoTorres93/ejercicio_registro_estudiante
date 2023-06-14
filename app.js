const readlineSync = require("readline-sync"); // libreria npm
const {
  mostrarListaEstudiantes
} = require('./listaEstudiantes'); // obtener el module exportado 

const registrarEstudiantes = () => {
  const cantidadEstudiantes = readlineSync.question(
    "Ingrese la cantidad de estudiantes a registrar:"
  );
  const estudiantes = [];

  for (let i = 0; i < cantidadEstudiantes; i++) {
    const nombre = readlineSync.question(
      `ingrese el nombre del estudiante ${i}: `
    ); // question para consultar
    const edad = readlineSync.question(
      `ingrese la edad del estudiante ${nombre}: `
    );

    const estudiante = {
      nombre,
      edad,
    };

    estudiantes.push(estudiante);

    mostrarListaEstudiantes(estudiantes);
  }
};



//Inciar registro dee estudiantes
registrarEstudiantes();