const inputs = document.querySelectorAll('.inputs input');
const button = document.querySelector('.submit');
const result = document.querySelector('.result');

button.addEventListener('click', e=>{
    e.preventDefault();
    let name = inputs[0].value;
    let firstLetter = [...name];
    let sex;

    //Sex check
    if(name[name.length-1]=='a'){
        sex = 'pełnoletnia';
    }else{
        sex = 'pełnoletni';
    }

    //Age
    const age = inputs[1].value;
    
    //Year
    let year;
    if(age-18==1 || 18-age==1){
        year = 'roku';
    }else{
        year = 'lat';
    }
    
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

        //Color
        const color = inputs[2].value.toLowerCase();
        const hex =['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','#'];


        for(let i=0; i<color.length; i++){
            if(!hex.includes(color[i])){
                console.log(color[i]);
                inputs[2]='';
                alert('Kolor podaj w systemie szesnastkowym!');
                break;
            }else if(i===color.length-1){
                if(!(color[0]==="#")){
                    alert('Pamiętaj o # na początku.');
                }else if(color.length<7 || color.length>7){
                    inputs[2]='';
                    alert('Ilość znaków twojego koloru jest niepoprawna!');
                }else{
                    switch(true){
                        case age>18:
                            result.innerHTML = `Cześć ${finalName}, jesteś ${sex} od ${age-18} ${year}.`
                            result.style.border = `solid 1px ${color}`;
                            break;
                        case age==18:
                            result.innerHTML = `Cześć ${finalName}, jesteś ${sex}.`
                            result.style.border = `solid 1px ${color}`;
                            break;
                        case age<18:
                            result.innerHTML = `Cześć ${finalName}, do pełnoletniości brakuje ci ${18-age} ${year}.`;
                            result.style.border = `solid 1px ${color}`;
                            break;
                    }

                }
            }
        }
    }    
})