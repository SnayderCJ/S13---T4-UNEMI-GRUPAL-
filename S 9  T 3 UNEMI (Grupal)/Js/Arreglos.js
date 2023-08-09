class Arreglos {
    mayor() {
        console.log(`Funciona`);
        let datos = document.getElementById("datos").value // Se ingresan datos en string = texto/ '3;14;25;40'
        let resp = document.getElementById("resp")

        let numeros = datos.split(";") // ['3', '14', '25', '40']
        // console.log(numeros);
        let mayor = parseInt(numeros[0])


        for (let i = 1; i < numeros.length; i++) {
            if (mayor < parseInt(numeros[i])) {
                mayor = parseInt(numeros[i])
                // console.log(mayor);
            }
        }
        resp.textContent = `El mayor del arreglo es[${numeros}] es = ${mayor}`
        // console.log(`El mayor del arreglo es[${numeros}] es = ${mayor}`);
    }

    menor() {
        let datos = document.getElementById("datos").value
        let resp = document.getElementById("resp")

        let numeros = datos.split(";")
        let menor = parseInt(numeros[0])


        for (let i = 1; i < numeros.length; i++) {
            if (menor > parseInt(numeros[i])) {
                menor = parseInt(numeros[i])
            }
        }
        resp.textContent = `El mayor del arreglo es[${numeros}] es = ${menor}`
    }

    promedio() {
        let datos = document.getElementById("datos").value
        let resp = document.getElementById("resp")

        let numeros = datos.split(";") // ['1','2','3','4','5','6','7','8','9','10'] 
        let total = 0

        for (let i = 0; i < numeros.length; i++) {
            total += parseInt(numeros[i])
        }

        let pro = 0
        pro = total / parseInt(numeros.length)

        resp.textContent = `El promedio de [${numeros}] es: ${pro}`

    }

    nombresAlRevez() {

        let dato = document.getElementById("datos").value // 'Melanie'
        let resp = document.getElementById("resp")


        let nombres = dato.split("") // ['M', 'e', 'l', 'a' , 'n', 'i' , 'e']
        let i = nombres.length - 1
        let reversa = ""

        for (i; i >= 0; i--) {
            reversa = reversa + nombres[i]; // einaleM
        }

        resp.textContent = `Los nombres [${dato}] al revez es: ${reversa}`
    }

    buscar() {
        let array = document.getElementById("array").value  // '20;30;40;50'
        let element = document.getElementById("element").value // '40'
        let resp = document.getElementById("resp")

        let arrays = array.split(";") // ['20', '30', '40', '50']
        let found = false

        for (let i = 0; i < arrays.length; i++) {
            if (arrays[i] == element) {
                resp.textContent = `El elemento se encuentra en la posicion ${i}`
                found = true
                break // Se utiliza para no seguir buscando si ya encontro la posicion
            }


        }

        if (!found) { // ! = negacion
            resp.textContent = `El elemento "${element}" no se encuentra en el arreglo`
        }
    }

    adivinaElNumero() {
        let number = parseInt(document.getElementById("number").value) // '40' = 40
        let resp = document.getElementById("resp")
        let resp2 = document.getElementById("resp2")
        let array = [] 

        for (let i = 0; i < 100; i++) {
            array[i] = Math.floor(Math.random() * 100)
            resp.innerHTML = `Arreglos Generados: <br>` + array.join(", ")

            // array.includes(number) = verifica si esta dentro del arreglo
            if (array.includes(number)) {
                resp2.textContent = `Adivinaste`
            } else {
                resp2.textContent = `Error!, No Adivinaste`
            }
        }
    }

    insertar() {
        let array = document.getElementById("array").value // ['1;2;3;5']
        let number = document.getElementById("number").value // [4]
        let position = document.getElementById("position").value // [2]
        let resp = document.getElementById("resp")

        let arreglo = array.split(";") // [1, 2, 3, 5]
        let posicion = parseInt(position) // 2
        let dato = parseInt(number) // 4

        arreglo.splice(posicion, 0, dato) // Modifica el contenido del arreglo eliminando o reemplazando elementos.

        resp.textContent = `Arreglo insertado: ` + arreglo.join(', ')

    }

    eliminar() {
        let array = document.getElementById("array").value // [10;30;40;50]
        let number = document.getElementById("number").value  // "40"
        let resp = document.getElementById("resp")

        let arreglo = array.split(";").map(Number) //  ['10','30','40','50']
        let numero = parseInt(number) // 2
        let eliminar = arreglo.indexOf(numero) // Devuelve el índice de la primera ocurrencia de un substring en la cadena.
        console.log(eliminar);

        if (eliminar !== -1) { 
            arreglo.splice(eliminar, 1) // Se le agrega 1 porque es para eliminar el indice.
            resp.textContent = `Arreglo Eliminado: ` + arreglo.join(", ") // ['10','30','50']
        } else {
            resp.textContent = `El elemento ${numero} no se encuentra en el arreglo `
        }
    }

    // <!-- Se ingresa un numero en base 2 y se retorna el numero a base 10
    //         ejemplo= numBase2="101"   respBase10="5" -->
    base10Base2() {
        let binary = document.getElementById("array").value
        let resp = document.getElementById("resp")

        let Base10 = parseInt(binary, 2) // ParseInt para convertit el numero binario en base 2 a base 10 - El 2 indica que se esta tratando con un numero binario en base 2 

        resp.textContent = "Resultado en base 10: " + Base10

    }

    // <!-- Se ingresa un numero en base 2 y se retorna el numero a base 10
    //         ejemplo= numBase10="5"   respBase2="101" -->
    base10aBase2() {
        let array = document.getElementById("array").value
        let resp = document.getElementById("resp")

        let Base2 = parseInt(array, 10).toString(2) // Comienza en base 10 Hasta base 2 - convierte el numero en base 10 - el to.string convierte a binario de base 2

        resp.textContent = "Resultado en base 2: " + Base2
    }

    // <!-- dado un arreglo de empleados se pide el promedio de los sueldos
    //         donde el sueldo=valorHora*numeroHoras.
    //         empleados=[
    //            {nombre:"ana",vh:5,nh:40},
    //            {nombre:"ana",vh:10,nh:40},
    //            {nombre:"ana",vh:2,nh:40}
    //         ]
    //         respuesta=(5*40+10*40+2*40)/3 -->
    sueldosEmpleados() {
        let nombre = document.getElementById("nombre").value
        //  let nombre = 'Juan; Martha; Eugenio'
        let vh = document.getElementById("valorHora").value
        //  let vh = '5; 10; 2'
        let nh = document.getElementById("numeroHora").value
        //  let nh = '40; 40; 40'
        let resp = document.getElementById("resp")

        let name = nombre.split(";")
        let valorHora = vh.split(";")
        let numeroHora = nh.split(";") 

        let vt = 0; let vtt = 0; let valorTotal = 0
        for (let i = 0; i < numeroHora.length; i++) {
            vt = parseInt(valorHora[i]) * parseInt(numeroHora[i])
            valorTotal += vt
        }

        vtt = valorTotal / numeroHora.length
        // console.log(vtt);
        resp.textContent = `El promedio de los sueldos de [${name}] es ${vtt}`

        // console.table([name, valorHora, numeroHora, vtt])
    }

    sumaDivisores() {
        //  let array = '6; 18; 30'
        let array = document.getElementById("array").value
        let resp = document.getElementById("resp")

        let num = array.split(";") // [6, 18, 30] = 6, 27, 69
        let suma = 0
        let sumaDivisores = ""

        for (let i = 0; i < num.length; i++) {
            let numero = parseInt(num[i])

            for (let c = 1; c < numero; c++) {
                if (numero % c == 0) {
                    suma = suma + c
                }

            }
            sumaDivisores = sumaDivisores + " | " + suma
        }
        console.log(sumaDivisores);
        resp.textContent = `La suma de los divisores del arreglo [${num}] es: ${sumaDivisores}`
    }

    perfectos() {
        // console.log('Funciona :D');
        // let array = '6; 17'
        let array = document.getElementById("array").value
        let resp = document.getElementById("resp")

        let num = array.split(";")
        let suma = 0
        let sumaarreglo = []
        let sumaarreglo2 = []


        for (let i = 0; i < num.length; i++) {
            let numero = parseInt(num[i])

            for (let c = 1; c < numero; c++) {
                if (numero % c == 0) {
                    suma += c
                }

                // console.log(suma);
            }

            if (suma == numero) {
                sumaarreglo.push(suma)
            } else {
                sumaarreglo2.push(numero)
            }

        }

        resp.innerHTML = `Del arreglo [${num}] <br>
        Estos numeros son perfectos: ${sumaarreglo} <br>
        Estos numeros no son perfectos: ${sumaarreglo2}`

        // console.log(
        //         `Del arreglo [${num}]
        //         Estos numeros son perfectos: ${sumaarreglo} 
        //         Estos numeros no son perfectos: ${sumaarreglo2}`
        //         );

        // console.log(sumaarreglo);
    }

    primos() {
        // console.log('Funcionaaaaaaa :D');
        // let array = '4;17'
        let array = document.getElementById('array').value
        let resp = document.getElementById('resp')

        let num = array.split(";")


        let primo = []
        let noprimo = []

        for (let i = 0; i < num.length; i++) {
            let numero = parseInt(num[i])
            let suma = 0

            for (let c = 1; c <= numero; c++) {
                if (numero % c == 0) {
                    suma = suma + 1


                    // console.log(suma);
                }


            }

            if (suma == 2) {
                primo.push(numero)
            } else {
                noprimo.push(numero)
            }


        }

        resp.innerHTML = `Del arreglo [${num}] <br>
        Estos son primos: ${primo} <br>
        Estos no son primos: ${noprimo}
        `

        console.log(`Del arreglo [${num}]
         Estos son primos: ${primo}
         Estos no son primos: ${noprimo}
         `);
    }

    repeticionDeUnNumeroEnUnArreglo() {
        // console.log("Funciona");
        let num = document.getElementById("num").value;
        let arr = num.split(";")
        let numeroR = document.getElementById("num2").value;
        let c = 0

        for (let i = 0; i < arr.length; i++) {

            if (numeroR === arr[i]) {
                c = c + 1
            }
        }

        document.getElementById("resp").textContent = `El numero ${numeroR} se repite: ${c} veces`
    }

    vueltoCantidadMinimaDeBilletes() {
        // console.log(`Funciona`);
        let cantidad = document.getElementById("datos").value
        cantidad = parseFloat(cantidad);
        let vueltofinal = parseInt(cantidad)
        let cantidaddecimal = Math.round((cantidad % 1) * 100)
        const billetesMonedas = [50, 20, 10, 5, 1, 0.5, 0.25, 0.1, 0.05, 0.01];
        let respuesta = "";
        let respuestaFormatoEspecial = "";

        for (let i = 0; i < billetesMonedas.length; i++) {
            const billeteMoneda = billetesMonedas[i];
            let contador = 0;

            while (vueltofinal >= billeteMoneda) {
                contador++;
                vueltofinal -= billeteMoneda;
            }

            if (contador > 0) {
                if (billeteMoneda >= 1) {
                    respuestaFormatoEspecial += `${contador} billete${contador > 1 ? "s" : ""} de ${billeteMoneda}, `;
                }
            }
        }
        respuestaFormatoEspecial = respuestaFormatoEspecial.slice(0, -2);
        document.getElementById("resp").textContent = `Cambio: ${respuestaFormatoEspecial} y ${cantidaddecimal} centavos`;
    }


}
const arreglos = new Arreglos()