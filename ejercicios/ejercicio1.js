/*Crear una web con un script en el que se declare un array que contenga los meses del año (['enero','febrero',...]).
Utiliza este array y el objeto Date para escribir en la página la fecha actual, por ejemplo: "Estamos a 13 de noviembre de 2024, faltan ?? días fin de año".*/
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

//Fecha actual
let fechaActual = new Date();
let dia = fechaActual.getDate();
let mes = fechaActual.getMonth();  //obtiene el mes en formato número
let mesNombre = meses[mes];
let año = fechaActual.getFullYear();

//Calculo para fin de año
let finAño = new Date(año, 11, 31);
let diasFin = Math.ceil((finAño - fechaActual) / (1000 * 60 * 60 * 24));

const mensaje = "Estamos a " + dia + " de " + mesNombre + " de " + año + ", faltan " + diasFin + " días para fin de año.";

document.getElementById('mensaje').textContent = mensaje;
