const Nome = document.getElementById('FName');
const SobreNome = document.getElementById('FName');
const btn = document.getElementById('BTN');

btn.addEventListener('click', () => {
    verificaCampo(Nome);
    verificaCampo(SobreNome);
});

function verificaCampo(id){
    const Text1 = id.value;

    if(Text1 === ''){
        console.log('Preencha o campo');
    }
}
