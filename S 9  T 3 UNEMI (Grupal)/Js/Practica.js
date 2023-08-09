class Practica {

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
        let vh = document.getElementById("valorhora").value
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
        // resp.textContent = `El promedio de los sueldos de [${name}] es ${vtt}`

        console.table([name, valorHora, numeroHora, vtt])
    }

    sumaDivisores() {
        console.log("Funciono capo :D");
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
            sumaDivisores = sumaDivisores + suma + "|"
        }
        // console.log(sumaDivisores);
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
        console.log('Funcionaaaaaaa :D');
        let array = '17; 6; 25'

        let num = array.split(";")

        let suma = 0
        let primo = []
        let noprimo = []
        for (let i = 0; i < num.length; i++) {
            let numero = parseInt(num[i])

            for (let c = 1; c <= numero; c++) {
                if (numero % c == 0) {
                    suma++
                }
            }

            if(suma == 2){
                primo.push(numero)
            } else{
               noprimo.push(numero)
            }
        }

        console.log(`Del arreglo [${num}] <br>
        Estos son primos: ${primo}
        Estos no son primos: ${noprimo}
        `);
    }

    repeticionDeUnNumeroEnUnArreglo() {
    }

    vueltoCantidadMinimaDeBilletes() {

    }
    
    empleados(){
        const empleados = parseInt(document.getElementById("Nempleados").value);
        const resp = document.getElementById("resp");
      
        const empleadosARR = [];
      
        for (let i = 0; i < empleados; i++) {
          const nombreEmpleado = prompt(`Ingrese el nombre del empleado ${i + 1}:`);
          const valorHora = parseInt(prompt(`Ingrese el valor por hora para ${nombreEmpleado}:`));
          const numeroHoras = parseInt(prompt(`Ingrese el número de horas trabajadas por ${nombreEmpleado}:`));
          const salario = valorHora * numeroHoras;
          empleadosARR.push({ nombre: nombreEmpleado, vh: valorHora, nh: numeroHoras, salario });
        }
      
        let totalSalarios = 0;
        for (const empleado of empleadosARR) {
          totalSalarios += empleado.salario;
        }
        const salarioPromedio = totalSalarios / empleados;
      
        resp.textContent = `El salario promedio es: ${salarioPromedio.toFixed(2)}`;
    }
}

const practice = new Practica();
// practice.sueldosEmpleados()
// practice.sumaDivisores()
practice.perfectos()