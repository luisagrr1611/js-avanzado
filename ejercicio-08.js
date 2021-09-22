const num = parseInt(prompt('Ingresa tu numero'));

for(let i = 0; i <= num; i++){
    if(num % i === 0){
        document.write(i + "</br>");
    }
}