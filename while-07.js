let num1 = parseInt(prompt("Ingresa un numero"));
let suma = 0;
let contador = 0;
const numeros = [];

while (num1 >0) {
    contador++;
    suma = suma+num1;
    numeros.push(num1);
    num1 = parseInt(prompt("Ingresa un numero"));

}

document.write(`Los numeros ingresados fueron: ${numeros}. El promedio es ${suma/contador}.`);
document.write(` La suma de los numeros fue ${suma}.`);
