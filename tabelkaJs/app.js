const table = document.querySelector("table");

const iloscWierszy = document.querySelector(".iloscWierszy");
const iloscKolumn = document.querySelector(".iloscKolumn");
const submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", createTable);

function createTable() {
  for (i = 0; i < parseInt(iloscWierszy.value); i++) {
    const wiersz = document.createElement("tr");
    wiersz.classList.add("wiersz");
    for (k = 0; k < parseInt(iloscKolumn.value); k++) {
      const komorka = document.createElement("td");
      komorka.classList.add("komorka");
      komorka.innerText = `${i + 1}.${k + 1}`;
      wiersz.appendChild(komorka);
    }
    table.appendChild(wiersz);
  }
}
