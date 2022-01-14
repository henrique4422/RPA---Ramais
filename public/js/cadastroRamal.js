function cadastrarRamal() {
    var ramal = document.getElementById('ramal').value;
    var nome = document.getElementById('nome').value;
    var departamento = document.getElementById('departamento').value;

    var infos = { ramal, nome, departamento };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch("/insert", {
        method: "POST",
        headers: myHeaders,
        cache: "reload",
        body: JSON.stringify(infos)
    }).then((response) => {
        console.log(response)
        return response.json();
    }).then((responseJson) => {
        if (responseJson.resultado) {
            console.log("Certo");
        } else {
            alert('Erro');
        }
    })
    return false;
}