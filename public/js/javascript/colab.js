function procurarColaborador() { 
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
    obj.parentElement.style.borderColor= "green";
    obj.parentElement.style.backgroundColor = "#fc0002";
    obj.parentElement.style.transitionDuration = "3s";

   window.setTimeout(function () {
    obj.parentElement.style.backgroundColor = "#0a214a";
   }, 3000)
}

function aviso1(){
    obj.parentElement.style.backgroundColor = "#fc0002";
    obj.parentElement.style.color= "#fffefa";
    obj.parentElement.style.transitionDuration = "3s";
    obj.parentElement.style.marginTop = "50px";

    window.setTimeout(function () {
    obj.parentElement.style.backgroundColor = "#ffffff";
    obj.parentElement.style.color= "rgba(10,33,74,255)";
    obj.parentElement.style.transitionDuration = "3s";
    }, 3000)
}

function aviso(){
    document.getElementById('txtBusca').style.borderColor = "red";
    document.getElementById('txtBusca').style.borderWidth = "4px";
    document.getElementById('txtBusca').style.transitionDuration = "1s";
    document.getElementById('txtBusca').placeholder = "Não encontrado, digite novamente";
    document.getElementById('txtBusca').value='';
    
    window.setTimeout(function () {
        obj.parentElement.style.backgroundColor = "#ffffff";
        obj.parentElement.style.color= "rgba(10,33,74,255)";
        obj.parentElement.style.transitionDuration = "3s";
        }, 3000)
}

function resetaPadrao(){
    document.getElementById('txtBusca').style.borderColor = "black";
    document.getElementById('txtBusca').placeholder = "Digite o nome do colaborador";
    document.getElementById('txtBusca').style.transitionDuration = "1s";
    document.getElementById('txtBusca').style.borderWidth = "2px";
}


var funcionarios = {};
function inicializaRamal(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
          funcionarios = JSON.parse(xhttp.responseText);
          adicionaLinha();
        }
    };
    
        xhttp.open("GET", "json/ramais.json",  true);
        xhttp.send();
        }
    
    if (!String.prototype.format) {
      String.prototype.format = function() {
          var args = arguments;
          return this.replace(/{(\d+)}/g, function(match, number) { 
              return typeof args[number] != 'undefined'
                  ? args[number]
                  : match
              ;
          });
      };
    }

    function adicionaLinha() {
        var output = '';
        for(var i = 0; i < depart.length; i++){
         colaborador = funcionarios.colaboradores[i];
         output += '<tr class="listaRamais"><span class="nome">{0}</span></div>'.format(depart.atendimento.nome);
        }
        
        document.getElementById('atend').innerHTML = output; 
        
        }
        
        document.addEventListener("keypress", function(e) {
            if(e.key === "Enter") {
                const btn = document.querySelector("#btnBusca");
        
                btn.click();
            }
        })