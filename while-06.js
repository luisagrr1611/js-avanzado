/* Ciclo while
    nos permite repetir de codigo mientras una condicion
    sea verdadera
     */

/* let num1 = parseInt(prompt('Ingresa un numero')); */

/* NaN
    nor a number
 */
  /*   while(isNaN(num1)) {
        num1 = parseInt(prompt('Ingresa un numero'));
    } */

    /* let num1 = parseInt(prompt("Ingresa un numero"));
    const num_secreto = 23;
    let Intentos = 1;

    while(num1 !== 23) {
        console.log("No adivinaste el numero secreto, intenta de nuevo");
        console.log(`Intento: ${intentos}`);
        intentos++;
        num1 = parseInt(prompt("Ingresa un numero"));
    }

    console.log('Felicidades, encontraste el numero secreto'); */


let num1 = parseInt(prompt("Ingresa un numero"));

do {
    document.write(`<p>El numero introducido es: ${num1}</p>`)
    num1 = parseInt(prompt("Ingresa un numero"));
}
while (num1 > 5)

