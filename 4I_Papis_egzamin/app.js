const select = document.querySelector('#koloryselect');
const prawefoto = document.querySelector('.prawefoto');
const cenaP = document.querySelector('.cena');
const felgi = document.querySelectorAll('.felgi');
const doposazenie = document.querySelectorAll('.doposazenie');
const polewyboru = document.querySelectorAll('.polewyboru');
const prawy = document.querySelector('.prawy');

const krecha = document.createElement('div');
krecha.classList.add('kreska');
krecha.style.display = 'none';
const razem = document.createElement('h1');
razem.classList.add('razem');
prawy.appendChild(krecha);
prawy.appendChild(razem);

polewyboru.forEach(function(wybor){
    wybor.addEventListener('change', function(){
        let cena = 75000;
        tekst = 'Cena bazowa 75000zł';
        prawefoto.setAttribute('src', select.value);
        if(select.value != 'szary.png'){
            tekst += '<br> Lakier : 9000 zł';
            cena += 9000;
        }

        felgi.forEach(function(felga){
            if(felga.value == "aluminiowa" && felga.checked){
                tekst += "<br> Felgi aluminiowe : 7000 zł";
                cena += 7000;
            }
        });

        doposazenie.forEach(function(dop){
            if(dop.value == 'park' && dop.checked){
                tekst += "<br> Czujniki parkowania : 6500 zł";
                cena += 6500;
            }
            if(dop.value == 'clima' && dop.checked){
                tekst += "<br> Climatronic: 8500 zł";
                cena += 8500;
            }
            if(dop.value == 'nawi' && dop.checked){
                tekst += "<br> Nawigacja: 5000 zł";
                cena += 5000;
            }
        });
        cenaP.innerHTML = tekst;

        razem.innerText = `Razem: ${cena}`;
        krecha.style.display = 'block';
    });
});