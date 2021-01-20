const inputs = document.querySelectorAll('.inputs input');
const button = document.querySelector('button');
const result = document.querySelector('.result');

button.addEventListener('click', ()=>{
    let name = inputs[0].value;
    const firstLetter = [...name];
    
    //Name check
    if(!(isNaN(firstLetter[0]))){
        result.innerHTML = 'imiona nie zawieraja liczb';
    }else{
        console.log('pierwszy znak nie jest liczba');
    }
    
})