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
