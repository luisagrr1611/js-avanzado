const $btnCat = document.querySelector('#btnCat');
const $divCats = document.querySelector('#divCats');

$btnCat.addEventListener ('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json()).then(data => {
        console.log(data);
        const imgCat = document.createElement('img');
        imgCat.src = data[0].url;
        imgCat.width = '300';
        $divCats.appendChild(imgCat);
    });
});

 /* const [cat] = data; */
 /* console.log(cat); */