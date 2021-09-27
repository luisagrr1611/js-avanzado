/* Fetch nos permite hacer peticiones htto desde javascript */

const peticion = fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(resp => resp.json()).then(data => {
    console.log(data);
}).catch(e => {
    console.log(e)
});

console.log(peticion);