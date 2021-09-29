const $btnCat = document.querySelector('#btnCat');
const $divCats = document.querySelector('#divCats');

$btnCat.addEventListener ('click', async() => {
    const resp = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await resp.json();

    const imgCat = document.createElement('img');
        imgCat.src = data[0].url;
        imgCat.width = '300';
        $divCats.appendChild(imgCat);
});






    /* fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json()).then(data => {
        console.log(data);
        const imgCat = document.createElement('img');
        imgCat.src = data[0].url;
        imgCat.width = '300';
        $divCats.appendChild(imgCat);
    });
 */