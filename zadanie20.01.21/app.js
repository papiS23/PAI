const inputs = document.querySelectorAll('.inputs input');
const button = document.querySelector('.submit');
const result = document.querySelector('.result');

button.addEventListener('click', e=>{
    e.preventDefault();
    let name = inputs[0].value;
    let firstLetter = [...name];
    
    //Name check
    if(!(isNaN(firstLetter[0]))){
        inputs[0].value = '';
        alert('Pierwszy znak imienia nie może być cyfrą!');
    }else if(firstLetter.length<3){
        inputs[0].value = '';
        alert('Imię musi mieć więcej niż 3 znaki!');
    }
    else{
        let joinName = firstLetter.join('');
        const finalName = joinName[0].toUpperCase() + joinName.substr(1);

        //Age
        const age = inputs[1].value;

        //Color
        const color = inputs[2].value.toLowerCase();
        const hex =[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

        for(let i=0; i<color.length; i++){
            if(!(hex.includes(color[i+1]))){
                inputs[2]='';
                alert('Kolor podaj w systemie szesnastkowym');
                break;
            }else if(i===color.length-1){
                if(!(color[0]==="#")){
                    alert('Pamiętaj o # na początku');
                }else if(color.length<7){
                    inputs[2]='';
                    alert('Twój kolor jest za krótki');
                }else{

                }
            }
        }
    }    
})