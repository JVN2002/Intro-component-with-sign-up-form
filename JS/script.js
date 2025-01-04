let Infos = [];

fetch('./JS/dara.json')
    .then(res=> res.json())
    .then(data=>{
        Infos = data;
        Form();
    })
    .catch(error=> console.log('ERRO',error));

function verificaCampo(Campo,Aviso,img,tipo){
    const Text1 = Campo.value;

    if(Text1 === ''){
        Aviso.classList.add('AvisoDePreenchimento');
        img.classList.add('IMGAvisoDePreenchimento');
        Campo.classList.add('BordaDeAviso');
    }
    else if(Text1 !== ''){
        Aviso.classList.remove('AvisoDePreenchimento');
        img.classList.remove('IMGAvisoDePreenchimento');
        Campo.classList.remove('BordaDeAviso');
    }
}

const BOX = document.getElementById('Formulario')

function Form(){
    const button = document.createElement('input');
    for (let i = 0; i < 4; i++) {
        const input = document.createElement('input'); // Cria um novo elemento <input>
        input.id = `elemento-${i}`; // Atribui um ID dinâmico usando o índice
        input.placeholder = `${Infos[i].PlaceHolder}`;
        input.type = `${Infos[i].Type}`;
    
        const p = document.createElement('p');
        p.id = `texto${i}`;
        p.textContent = `${Infos[i].Aviso}`
    
        const image = document.createElement('img');
        image.id = `IMG${i}`;
        image.src = 'images/icon-error.svg';
        image.alt = 'ERRO';
        
        BOX.appendChild(input); // Adiciona o elemento ao BOX
        BOX.appendChild(p);
        BOX.appendChild(image);

  
        button.addEventListener('click', () => {
            verificaCampo(input,p,image);
        });
    }
    
    button.type = 'button';
    button.value = 'CLAIM YOUR FREE TRIAL';
    button.name = 'singIn';
    button.id = 'BTN';
    button.classList.add('btn');
    BOX.appendChild(button);

    const p = document.createElement('p');
    p.classList.add('Termos');
    p.innerHTML = `By clicking the button, you are agreeing to our <a href=""><b>Terms and Services</b>`;
    BOX.appendChild(p);
}
