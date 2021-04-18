const itemList = document.querySelector(".container__list");
const btn = document.querySelector(".container__button");
let counter = 0;

btn.addEventListener("click", () => {
  const p = document.createElement("p");
  p.innerText = `Tekst w akapicie nr ${counter++} (kliknij aby mnie usunąć)`;

  const img = document.createElement("img");
  img.src = `https://picsum.photos/id/${counter}/300/200`;
  img.classList.add("container__img");

  const mainDiv = document.createElement("div");
  mainDiv.classList.add("container__div");

  mainDiv.appendChild(p);
  img;
  mainDiv.appendChild(img);
  itemList.appendChild(mainDiv);

  mainDiv.addEventListener("click", (e) => {
    mainDiv.remove();
  });
});
