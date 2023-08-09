class Numeros {
  vuelto() {
    let cantidad = document.getElementById("cantidad").value
    let precio = document.getElementById("precio").value
    let pago = document.getElementById("pago").value
    let resp = document.getElementById("resp")
    let resp2 = document.getElementById("resp2")

    let costo = 0


    cantidad = parseInt(cantidad)
    precio = parseInt(precio)
    pago = parseInt(pago)

    // Proceso:
    costo = cantidad * precio
    resp2.textContent = `Costo: $${costo}`
    let vuelto = pago - costo


    if (vuelto >= 0) {
      resp.textContent = `Su vuelto es de $${vuelto}`
    } else {
      resp.textContent = `Pague el restante`
    }

  }

  multiplo() {
    let num = document.getElementById("num").value
    let mul = document.getElementById("multi").value
    let resp = document.getElementById("resp")

    // Proceso: 
    num = parseInt(num)
    mul = parseInt(mul)

    if (num % mul == 0) {
      resp.textContent = `${mul} Es multiplo de ${num}`
    } else {
      resp.textContent = `${mul} No es multiplo de ${num}`
    }
  }
  divisores() {
    let div = document.getElementById("div").value
    let resp = document.getElementById("resp")
    div = parseInt(div)
    let c = 1
    let divisores = ""

    // Proceso: 
    while (c < div) {
      if (div % c == 0) {
        divisores = divisores + " " + c.toString()
      }
      c = c + 1
    }
    resp.textContent = divisores

  }
  sumaDivisores() {
    let num = document.getElementById("num").value
    let resp = document.getElementById("resp")
    num = parseInt(num)
    let suma = 0

    for (let div = 1; div < num; div++) {
      if (num % div == 0) {
        suma = suma + div
      }
    }

    resp.textContent = `La suma de los divisores de ${num} es ${suma}`
  }
  cantidadDivisores() {
    let num = document.getElementById("num").value
    let resp = document.getElementById("resp")
    num = parseInt(num)
    let c = 0


    // Proceso: 

    for (let div = 1; div < num; div++) {
      if (num % div == 0) {
        c = c + 1
      }
    }

    resp.textContent = `El numero ${num} tiene ${c} divisores`
  }
  perfecto() {
    let num = document.getElementById("num").value
    let resp = document.getElementById("resp")
    num = parseInt(num)
    let sdiv = 0

    for (let div = 1; div < num; div++) {
      if (num % div == 0) {
        sdiv = sdiv + div
      }
    }

    if (sdiv == num) {
      resp.textContent = `El numero ${num} es perfecto`
    } else {
      resp.textContent = `El numero ${num} no es perfecto`
    }
  }
  amigos() {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let resp = document.getElementById("resp")
    num1 = parseInt(num1)
    num2 = parseInt(num2)

    let sd1 = 0
    let sd2 = 0

    // Proceso: 

    for (let div = 1; div < num1; div++) {
      if (num1 % div == 0) {
        sd1 = sd1 + div
      }
    }

    for (let div = 1; div < num2; div++) {
      if (num2 % div == 0) {
        sd2 = sd2 + div
      }
    }

    if (sd1 == num2 && sd2 == num1) {
      resp.textContent = `Los numeros ${num1} y ${num2} son amigos`
    } else {
      resp.textContent = `Los numeros ${num1} y ${num2} no son amigos`
    }

  }
  primo() {
    let num = document.getElementById("num").value
    let resp = document.getElementById("resp")
    num = parseInt(num)
    let c = 0

    // Proceso: 

    for (let i = 1; i <= num; i++) {
      if (num % i == 0) {
        c = c + 1
      }
    }

    if (c == 2) {
      // console.log("Es primo");
      resp.textContent = `${num} es Primo`
    } else {
      //  console.log("No es primo");
      resp.textContent = `${num} no es Primo`
    }

  }
  primosGemelos() {

    let num = document.getElementById("num").value
    let num2 = document.getElementById("num2").value
    let pg = document.getElementById("resp")

    let c = 0
    let c2 = 0
    let i = 1
    let i2 = 1

    while (i <= num) {
      if (num % i == 0) {
        c = c + 1
      }
      i = i + 1


    }
    while (i2 <= num2) {
      if (num2 % i2 == 0) {
        c2 = c2 + 1
      }
      i2 = i2 + 1


    }
    if (c == 2 && c2 == 2) {
      if ((num > num2 || num2 > num) && (num - num2 == 2 || num2 - num == 2)) {
        pg.textContent = `Los numero ${num} y ${num2} son primos gemelos`
      } else {
        pg.textContent = `Los numero ${num} y ${num2} no son primos gemelos`

      }
    } else {
      pg.textContent = `Los numeros ${num} y ${num2} no son primos`
    }
  }

  numeroInvertido() {
    let num = document.getElementById("num").value
    let inv = document.getElementById("resp")
    let r = 0
    let invertir = ""
    while (num > 0) {
      r = num % 10
      invertir = invertir + r.toString()
      num = parseInt(num / 10)

    }

    inv.textContent = invertir

  }
  cantidadDigitos() {
    let num = document.getElementById("num").value
    let dig = document.getElementById("resp")
    num = parseInt(num)
    let c = 0

    // Proceso: 

    while (num > 0) {
      num = parseInt(num / 10)
      c = c + 1

    }

    dig.textContent = `La cantidad de digitos son ${c}`

  }
  factorial() {
    let num = document.getElementById("num").value
    num = parseInt(num)
    let resp = document.getElementById("resp")
    let factorial = 1

    // Proceso:

    for (let i = 1; i <= num; i++) {
      factorial *= i
    }
    resp.textContent = `El factorial de ${num} es: ${factorial}`

  }
  exponente() {
    let base = document.getElementById("base").value
    base = parseInt(base)
    let exponente = document.getElementById("exponente").value
    exponente = parseInt(exponente)
    let resp = document.getElementById("resp")
    let resultado = 1;

    // Proceso:

    for (let i = 1; i <= exponente; i++) {
      resultado *= base;
    }
    resp.textContent = `${base} elevado a la ${exponente} es: ${resultado}`;

  }
  tablaMultiplicar() {
    let num = document.getElementById("num").value
    let resp = document.getElementById("resp")
    num = parseInt(num)
    let tablaM = ""

    let r = 0
    let c = 1

    // Proceso: 

    while (c <= 12) {
      r = num * c

      // console.log(num, "x", c, "=", r);
      tablaM = tablaM + " " + `${num} x ${c} = ${r}  <br>  `
      c++
    }

    resp.innerHTML = tablaM
  }
  fibonacci() {
    let num = document.getElementById("num").value
    num = parseInt(num)
    let resp = document.getElementById("resp")
    let serie = ""
    let a = 0
    let b = 1
    let c = 0

    // Proceso:

    for (let i = 0; i < num; i++) {
      if (i === num - 1) {
        serie += a;
      } else {
        serie += `${a}, `
      }
      c = a + b
      a = b
      b = c
    }
    resp.textContent = serie;

  }

}
const numero = new Numeros();