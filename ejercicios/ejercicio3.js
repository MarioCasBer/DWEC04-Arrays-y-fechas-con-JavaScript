/*Implementa una función "cuenta atrás" a la que le pasemos 2 parámetros, un número y un carácter (S, M)
que indica si el número introducido son segundos o minutos.
Utilizando document.write la función escribirá en la página una cuenta atrás, siempre en segundos.
Por ejemplo, una llamada a la función con un 2 y una 'M', escribirá en pantalla:

Faltan 120 segundos
(Trascurrido un segundo escribirá)...
Faltan 119 segundos.
Faltan 118 segundos.
            ...
Al llegar a 0, la cuenta atrás se para.*/

window.onload = () =>{
    //Patrón para comprobar la letra introducida (insensible a mayúsculas)
    const patron = /^[sm]{1}$/i; 

    //Captura de datos introducidos por el usuario
    let numero = prompt("Introduce un número para el tiempo");
    let letra = prompt("Introduce S o M (segundos/minutos)");

    //Función para la cuenta atrás
    function cuentaAtras(numero, letra){
        if (isNaN(numero)||numero<=0){
            alert("Introduce un número válido");
            return;
        }
        if(!patron.test(letra)){
            alert("Introduce S o M como carácter");
            return;
        }

        //Tiempo solicitado en segundos
        let segundos = numero;
        if(letra.toLowerCase()==="m"){
            segundos = numero * 60;
        }

        //Mensaje en pantalla
        let cuenta = document.getElementById("cuenta");

        let intervalId = setInterval(() => {
            if (segundos > 0) {
                cuenta.innerHTML="Faltan " + segundos + " segundos";
                segundos--;  //Reducimos los segundos
            } else {
                cuenta.innerHTML="¡Tiempo terminado!";
                clearInterval(intervalId);
            }
        }, 1000);
    }


    cuentaAtras(numero, letra);
}
