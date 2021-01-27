const submit = document.querySelector('.submit');

let manNames = [];
let womanNames = [];

submit.addEventListener('click', e=>{
    e.preventDefault();
    const preName = document.querySelector('.name');
    const name = preName.value[0].toUpperCase() + preName.value.substr(1);
    const manContainer = document.querySelector('.man_container');
    const womanContainer = document.querySelector('.woman_container');
    
    manContainer.innerHTML = '';
    womanContainer.innerHTML = '';

    if(!isNaN(name[0])){
        alert('Imie nie moze sie zaczynać od cyfry!');
    }else if(name[name.length-1]=='a'){
        if(name == 'Kuba'){
            manNames.push(name);
            manNames.sort();
        }else if(name == 'Barnaba'){
            manNames.push(name);
            manNames.sort();
        }else if(name == 'Kosma'){
            manNames.push(name);
            manNames.sort();
        }else{
            womanNames.push(name);
            womanNames.sort();
        }
    }else{
        manNames.push(name);
        manNames.sort();
    }

    preName.value = '';

    for(let i = 0; i<manNames.length; i++){
        manContainer.innerHTML += `${manNames[i]}<br>`;
    }
    for(let i = 0; i<womanNames.length; i++){
        womanContainer.innerHTML += `${womanNames[i]}<br>`;
    }



})