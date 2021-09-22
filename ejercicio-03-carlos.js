const num1 = parseInt(prompt("Pon un numero:"));
const num2 = parseInt(prompt("Pon otro numero:"));

if (num1 < num2) {
    for (let i = num1 + 1; i < num2; i++) {
        if (i % 2 != 0) {
            document.write(`<strong>${i}, </strong>`)
        }
    }
} else {
    document.write(`<p>El segundo numero debe ser mayor </p>`)
}