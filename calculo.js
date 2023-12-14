let mediaAnual;
let mediaDiaria;
let demandaPrevista;

function media(){
    //obtendo os dados do form
    const jan = parseInt(document.getElementById("janeiro").value);
    const fev = parseInt(document.getElementById("fevereiro").value);
    const mar = parseInt(document.getElementById("marco").value);
    const abr = parseInt(document.getElementById("abril").value);
    const mai = parseInt(document.getElementById("maio").value);
    const jun = parseInt(document.getElementById("junho").value);
    const jul = parseInt(document.getElementById("julho").value);
    const ago = parseInt(document.getElementById("agosto").value);
    const set = parseInt(document.getElementById("setembro").value);
    const out = parseInt(document.getElementById("outubro").value);
    const nov = parseInt(document.getElementById("novembro").value);
    const dez = parseInt(document.getElementById("dezembro").value);

    //média anual
    mediaAnual = (jan + fev + mar + mai + abr + jun + jul + ago + set + out + nov + dez) / 12;

    console.log(mediaAnual);

    // Exibindo o resultado
    document.getElementById("resultadoMedia").innerHTML = "Média Anual: " + mediaAnual.toFixed(2) + " KWh";
    resultadoMedia.style.opacity = 1;
}

function handleRadioClick(radio) {
    var resultadoElement = document.getElementById("resultado");

    // Lógica para calcular e exibir o resultado
    if (radio.id === "value-1") {
        mediaDiaria = ((mediaAnual - 30) / 30).toFixed(2);
        console.log(mediaDiaria);
        resultadoElement.textContent = "Média diária: " + mediaDiaria + " KWh";
    } else if (radio.id === "value-2") {
        mediaDiaria = ((mediaAnual - 50) / 30).toFixed(2);
        console.log(mediaDiaria);
        resultadoElement.textContent = "Média diária: " + mediaDiaria + " KWh";
    } else if (radio.id === "value-3") {
        mediaDiaria = ((mediaAnual - 100) / 30).toFixed(2);
        console.log(mediaDiaria);
        resultadoElement.textContent = "Média diária: " + mediaDiaria + " KWh";
    }
}

function atualizarCidades() {
    var estadoSelecionado = document.getElementById('estado').value;
    
    // Requisição para obter cidades do servidor
    fetch(`http://127.0.0.1:5000/cidades/${estadoSelecionado}`)
        .then(response => response.json())
        .then(data => {
            var selectCidades = document.getElementById('cidade');
            selectCidades.innerHTML = "";
            data.forEach(cidade => {
                var option = document.createElement('option');
                option.text = cidade;
                selectCidades.add(option);
            });
        });
}

function atualizarIrradiacao() {
    var cidadeSelecionada = document.getElementById('cidade').value;

    // Requisição para obter a menor irradiação solar do servidor
    fetch(`http://127.0.0.1:5000/irradiacao/${cidadeSelecionada}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            irradiacaoKwh = (data['menor irradiação'] / 1000).toFixed(2)
            var nivelIrradiacaoElement = document.getElementById('nivelIrradiacao');
            nivelIrradiacaoElement.value = `${irradiacaoKwh} KWh`;

            demandaPrevista = (mediaDiaria / irradiacaoKwh).toFixed(2);
            console.log(demandaPrevista);
            var demandaPrevistaElement = document.getElementById('demandaPrevista');
            demandaPrevistaElement.value = `${demandaPrevista} KW`

            
        })
}

function atualizarNumPaineis() {
    var potenciaSelecionada = document.getElementById('potenciaSaida').value;
    var numPaineis = (demandaPrevista * 1000) / parseInt(potenciaSelecionada);
    var numPaineisElement = document.getElementById('numPaineis');
    numPaineisElement.value = `${parseInt(numPaineis)}`

}