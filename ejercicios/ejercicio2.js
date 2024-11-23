/*Crear una web con un script que obtenga una lista de palabras tecleadas por el usuario y los almacene en un array
hasta que el usuario introduzca la palabra FIN. 
Validaremos utilizando una expresión regular que las palabras introducidas comiencen por mayúscula y tengan al menos 5 caracteres,
informando del error en caso contrario. Escribe en la página la siguiente información:
    a.   La primera palabra introducida por el usuario.
    b.   La última palabra introducida por el usuario.
    c.   La palabra de mayor longitud introducida por el usuario.
    d.   La media aritmética de las longitudes de la palabras, redondeada al entero menor...*/

//Datos almacenados
let palabras = [];
const patron = /^[A-ZÁÉÍÓÚ][a-záéíóúA-ZÁÉÍÓÚ]{4,}$/;
let palabraLarga = "";

//Referencias a elementos
const palabraInt = document.getElementById("palabraInt");
const añadir = document.getElementById("añadir");
let resultados = document.getElementById("resultados");


//Comprobación de palabra introducida
añadir.onclick = function comprobarPalabra(){
    let palabra = palabraInt.value.trim();  //almacenamos la palabra introducida
    
    //Reinicio de la pantalla tras haber mostrado resultados previos. Basta con empezar a introducir palabras de nuevo.
    if (palabras.length === 0 && resultados.innerHTML !== "") {
        resultados.innerHTML = ""; // Borrar los resultados en pantalla
        palabraLarga = ""; // Reiniciar la palabra más larga
    }

    if (palabra.toLowerCase() === "fin"){  //Es la última palabra?
        resultado();
        return;
    }
    if (!patron.test(palabra)){  //Cumple el patrón?
        alert("La palabra introducida debe empezar por mayúscula y tener al menos 5 letras");
        return;
    }
    else{  //Añadimos la palabra al Array
        añadirPalabra(palabra);  
    }
}

//Función añadir palabra
function añadirPalabra(palabra){
    palabras.push(palabra);
    if(palabra.length>palabraLarga.length){
        palabraLarga=palabra;
    }
    palabraInt.value="";
}

//Función mostrar resultado
function resultado(){
    if (palabras.length === 0) {
        resultados.innerHTML = "<p>No se introdujo ninguna palabra.</p>";
        return;
    }
    let respuestas = `
        <p>Primera palabra: ${palabras[0]}</p>
        <p>Última palabra: ${palabras[palabras.length - 1]}</p>
        <p>Palabra más larga: ${palabraLarga}</p>
    `;
    respuestas += "<p>Palabras introducidas:</p><ul>";
    palabras.forEach(palabra => {respuestas += `<li>${palabra}</li>`;});
    respuestas += "</ul>";

    resultados.innerHTML = respuestas;
    palabras=[];  //Borramos el Array para poder empezar de nuevo
}
