        var num1, num2;
        num1 = parseInt(prompt('Ingrese un número:'));
        num2 = parseInt(prompt('Ingrese otro número:'));
        if (num1 > num2) {
            var suma, diferencia;
            suma = num1 + num2;
            diferencia = num1 - num2;
            document.write('La suma es: ' + suma + ' La diferencia es: ' + diferencia);
            
        } else {
            var producto, division;
            producto = num1 * num2;
            division = num1 / num2;
            document.write('El producto es ' + producto  + ' La división es: ' + division);
        }
