var num1 = parseInt(prompt("Pon un numero:"));
var num2 = parseInt(prompt("Pon otro numero:"));

document.write("Los números impares que existen entre " + num1 + " y " + num2 + " son: ");
 
 
for (var i = num1; i < num2; i++) {
 
    document.write("<br>" + i +"<br>");
 
    if (i % 2 != 0) {
 
         i++;
    }
}