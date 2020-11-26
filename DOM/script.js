const artykul = document.querySelector('.container main article');
const artykuly = document.querySelectorAll('.container main article');

console.log(artykul);
console.log(artykuly);

artykul.innerHTML = "siema";
artykuly[1].innerHTML = "siemka";
artykuly[2].innerHTML = `dlugosc kolekcji to ${artykuly.length}`;

for(let i = 0; i < artykuly.length; i++){
    artykuly[i].innerHTML = `artykul o indexie ${i}`;
    console.log(artykuly[i]);
}
