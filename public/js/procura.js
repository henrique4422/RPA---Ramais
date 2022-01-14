function procurarRamais() { 
    resetaPadrao();

    var busca = document.getElementById('txtBusca');
    var pesquisa = busca.value.toUpperCase();

    var obj = document.querySelector('.' + pesquisa);
    if (obj != null) {    
        obj.scrollIntoView({
        behavior: 'smooth',
            })
        document.getElementById('txtBusca').value='';
        mudaCor(obj);

    } else {
        aviso();
    }   
}

function mudaCor(obj) {
    obj.parentElement.style.backgroundColor = "#fc0002";
    obj.parentElement.style.color= "#fffefa";
    obj.parentElement.style.transitionDuration = "3s";

    window.setTimeout(function () {
    obj.parentElement.style.backgroundColor = "#ffffff";
    obj.parentElement.style.color= "rgba(10,33,74,255)";
    obj.parentElement.style.transitionDuration = "3s";
    },4000)
}

function aviso(){
    document.getElementById('txtBusca').style.borderColor = "red";
    document.getElementById('txtBusca').style.borderWidth = "4px";
    document.getElementById('txtBusca').style.transitionDuration = "1s";
    document.getElementById('txtBusca').placeholder = "Não encontrado, digite novamente";
    document.getElementById('txtBusca').value='';
    
}

function resetaPadrao(){
    document.getElementById('txtBusca').style.borderColor = "black";
    document.getElementById('txtBusca').placeholder = "Digite a sigla da unidade";
    document.getElementById('txtBusca').style.transitionDuration = "1s";
    document.getElementById('txtBusca').style.borderWidth = "2px";
}

document.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        const btn = document.querySelector("#enviarBtn");

        btn.click();
    }
})