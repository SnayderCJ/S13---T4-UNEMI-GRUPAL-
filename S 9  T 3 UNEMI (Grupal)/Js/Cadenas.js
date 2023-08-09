class Cadenas {
    vocalesYConsonantes() {
        let frase = document.getElementById("datos").value;
        let resp = document.getElementById("resp");

        let cv = 0
        let cc = 0

        for (let i = 0; i < frase.length; i++) {
            if (frase[i] == 'a' || frase[i] == 'e' || frase[i] == 'i' || frase[i] == 'o' || frase[i] == 'u') {
                cv = cv + 1;
            }
            if (frase[i] >= 'a' && frase[i] <= 'z') {
                cc = cc + 1;
            }
        }

        // console.table({ cv, cc });


        resp.textContent = `cantidad de vocales:= ${cv} cantidad de consonantes:= ${cc}`;
    }

    palabrasDeUnaFrase() {
        let frase = document.getElementById("datos").value;

        // Dividir la frase en palabras utilizando el espacio como separador
        let palabras = frase.trim().split(/\s+/);

        // Contar el número de palabras
        let cantidadPalabras = palabras.length;

        document.getElementById("resp").textContent = "Cantidad de palabras: " + cantidadPalabras;
    }

    caracteresEspeciales() {
        let frase = document.getElementById("datos").value;

        let contadorComas = 0;
        let contadorPuntos = 0;
        let contadorPuntoComa = 0;
        let contadorDosPuntos = 0;

        for (let i = 0; i < frase.length; i++) {
            let caracter = frase.charAt(i);
            if (caracter === ",") {
                contadorComas++;
            } else if (caracter === ".") {
                contadorPuntos++;
            } else if (caracter === ";") {
                contadorPuntoComa++;
            } else if (caracter === ":") {
                contadorDosPuntos++;
            }
        }

        document.getElementById("resp").textContent = `Comas: ${contadorComas}, Puntos: ${contadorPuntos}, Punto y Coma: ${contadorPuntoComa}, Dos Puntos: ${contadorDosPuntos}`;

    }

    fraseIgualAlLeer() {
        let frase = document.getElementById("num1").value;

        let frase2 = frase.replace(/ /g, "").toLowerCase();

        let alReves = frase2.split("").reverse().join("");

        let resp = document.getElementById("resp");

        if (frase2 == alReves) {
            resp.innerHTML = `Se lee igual`;
        } else {
            resp.innerHTML = `No se lee igual`;
        }
    }

    copiarFraseInvertida() {
        let frase = document.getElementById("num1").value;

        let salida = "";

        for (let i = frase.length - 1; i >= 0; i--) {
            salida += frase[i];
        }

        let resp = document.getElementById("resp");

        resp.innerHTML = `La frase invertida es: ${salida}`;
    }

    concatenarFrase() {
        let frase = document.getElementById("num1").value;

        let frase2 = document.getElementById("num2").value;

        let salida = frase + " " + frase2;

        let resp = document.getElementById("resp");

        resp.innerHTML = salida;
    }

    buscarUnCaracter() {
        let frase = document.getElementById("num1").value;

        let caractBuscar = document.getElementById("num2").value;

        let resp = document.getElementById("resp");

        let posicion = frase.indexOf(caractBuscar);

        resp.innerHTML = `La posición del caracter es: ${posicion}`;
    }

    buscarSubcadena() {
        let frase = document.getElementById("num1").value;

        let subCadenBuscar = document.getElementById("num2").value;

        let resp = document.getElementById("resp");

        let posicion = frase.indexOf(subCadenBuscar);

        resp.innerHTML = `La posición de la subcadena es: ${posicion}`;
    }

    insertarUnaSubcadena() {
        let frase = document.getElementById("num1").value;

        let subCadenBuscar = document.getElementById("num2").value;

        let posicion = document.getElementById("num3").value;

        let resp = document.getElementById("resp");

        let frase2 = frase.slice(0, posicion);

        let frase3 = frase.slice(posicion, frase.length);

        let salida = frase2 + subCadenBuscar + frase3;

        resp.innerHTML = salida;
    }

    eliminarUnaSubcadena() {
        let frase = document.getElementById("num1").value;

        let subCadenEliminar = document.getElementById("num2").value;

        let resp = document.getElementById("resp");

        let posicion = frase.indexOf(subCadenEliminar);

        let frase2 = frase.slice(0, posicion);

        let frase3 = frase.slice(
            posicion + subCadenEliminar.length,
            frase.length
        );

        let salida = frase2 + frase3;

        resp.innerHTML = salida;
    }

    convertirFraseAArreglo() {
        let frase = document.getElementById("num1").value;

        let caracterSeparador = document.getElementById("num2").value;

        let arreglo = frase.split(caracterSeparador);

        let resp = document.getElementById("resp");

        resp.innerHTML = `[${arreglo}]`;
    }

    sumaDeLosDigitosDeUnaFrase() {
        let frase = document.getElementById("num1").value;

        let resp = document.getElementById("resp");

        let suma = 0;

        for (let i = 0; i < frase.length; i++) {
            suma += Number(frase[i]);
        }

        resp.innerHTML = `La suma de los digitos es: ${suma}`;

    }

}

const cad = new Cadenas()