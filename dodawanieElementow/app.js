const button = document.querySelector('.add-item');
const itemList = document.querySelector('.elements-container');
let counter = 0;

button.addEventListener('click', ()=>{
    const newP = document.createElement('p');
    newP.innerText = `Tekst w akapicie nr ${counter++} (kliknij aby mnie usunąć)`;
    newP.classList.add('p-item');

    const newImg = document.createElement('img');
    newImg.src = `https://picsum.photos/id/${counter}/300/200`;
    newImg.classList.add('img-item');

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item-div');

    itemDiv.appendChild(newP);
    itemDiv.appendChild(newImg);
    itemList.appendChild(itemDiv);

    itemDiv.addEventListener('click', e=>{
        itemDiv.remove();
    })
});
