class Curso {
    constructor(nombre) {
        this.nombre = nombre;
        this.alumnos = [];
        this.maximo = 10;
    }

    modificarMaximo(numero) {
        if (numero <= 0) {
            alert("El número máximo de alumnos debe ser mayor que 0");
        } else {
            this.maximo = numero;
        }
    }

    agregarAlumno(nombre) {
        if (this.alumnos.length >= this.maximo) {
            alert("El curso está completo. No se pueden agregar más alumnos.");
        } else if (this.alumnos.some(alumno => alumno.nombre === nombre)) {
            alert("El alumno ya está registrado en este curso.");
        } else {
            this.alumnos.push({ nombre: nombre, nota: null });
        }
    }

    agregarNota(nombre, nota) {
        let alumno = this.alumnos.find(alumno => alumno.nombre === nombre);
        if (!alumno) {
            alert("El alumno no está registrado en este curso.");
        } else if (nota < 0 || nota > 10) {
            alert("La nota debe estar comprendida entre 0 y 10.");
        } else {
            alumno.nota = nota;
            alert("Nota asignada: " + alumno.nombre + " -> " + alumno.nota);
        }
    }

    mostrarNota(nombre) {
        let alumno = this.alumnos.find(alumno => alumno.nombre === nombre);
        if (alumno) {
            if (alumno.nota !== null) {
                alert("La nota de " + nombre + " es: " + alumno.nota);
            } else {
                alert(nombre + " no tiene una nota asignada.");
            }
        } else {
            alert("El alumno no se encuentra en el curso.");
        }
    }

    listarAlumnos() {
        if (this.alumnos.length === 0) {
            alert("No hay alumnos registrados en este curso.");
        } else {
            let resultado = "";
            for (let i = 0; i < this.alumnos.length; i++) {
                let alumno = this.alumnos[i];
                resultado += "Nombre: " + alumno.nombre + ", Nota: " + (alumno.nota !== null ? alumno.nota : "No asignada") + "<br>";
            }
            document.getElementById("resultado").innerHTML = resultado;
        }
    }

    eliminarAlumno(nombre) {
        let index = this.alumnos.findIndex(alumno => alumno.nombre === nombre);
        if (index === -1) {
            alert("El alumno no está registrado en este curso.");
            return;
        }
        this.alumnos.splice(index, 1);
        alert("Alumno " + nombre + " eliminado del curso.");
    }

    estadisticas() {
        let notas = [];
        
        for (let i = 0; i < this.alumnos.length; i++) {
            if (this.alumnos[i].nota !== null) {
                notas.push(this.alumnos[i].nota);
            }
        }
        
        if (notas.length === 0) {
            document.getElementById("resultado").innerHTML = "No hay notas registradas en el curso.";
            return;
        }
    
        let sumaNotas = 0;
        let notaMaxima = notas[0];
        for (let i = 0; i < notas.length; i++) {
            sumaNotas += notas[i];
            if (notas[i] > notaMaxima) {
                notaMaxima = notas[i];
            }
        }
    
        //Nota media
        let notaMedia = sumaNotas / notas.length;
    
        //Mostrar resultados
        document.getElementById("resultado").innerHTML = 
            "Estadísticas del curso " + this.nombre + ":<br>" +
            "- Nota media: " + notaMedia.toFixed(2) + "<br>" +
            "- Nota máxima: " + notaMaxima + "<br>";
    }
}

//Banco de pruebas de la clase Curso
let miCurso = new Curso("Programación");
miCurso.agregarAlumno("Juan");
miCurso.agregarAlumno("María");
miCurso.agregarAlumno("Pedro");
miCurso.listarAlumnos();

/*miCurso.agregarNota("Juan", 8);
miCurso.agregarNota("María", 9);
miCurso.agregarNota("Pedro", 7);
miCurso.listarAlumnos();*/

/*miCurso.eliminarAlumno("Pedro");
miCurso.listarAlumnos();*/

//miCurso.estadisticas();
