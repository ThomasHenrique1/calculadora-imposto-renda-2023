"use strict";

window.onload = function() {
    document.getElementById("botao").onclick = function() {
        calcularImposto();
    };

    // Adiciona a formatação de moeda ao campo de salário
    document.getElementById("txtsalario").oninput = function() {
        formatarMoeda(this);
    };
};

function calcularImposto() {
    var salario = parseFloat(document.getElementById("txtsalario").value.replace(/[^0-9,-]+/g,"").replace(",","."));
    var imposto = "";
    if (salario <= 1434) {
        imposto = "0% (isento)";
    } else if (salario > 1434 && salario <= 2150) {
        imposto = (salario * 0.075).toFixed(2);
    } else if (salario > 2150 && salario <= 2866) {
        imposto = (salario * 0.15).toFixed(2);
    } else if (salario > 2866 && salario <= 3582) {
        imposto = (salario * 0.225).toFixed(2);
    } else {
        imposto = (salario * 0.275).toFixed(2);
    }
    document.getElementById("txtimposto").value = "R$ " + imposto.replace(".", ",");
}

// Função para formatar o campo como moeda
function formatarMoeda(campo) {
    var valor = campo.value;

    // Remove caracteres não numéricos, exceto vírgulas e pontos
    valor = valor.replace(/\D/g, "");
    
    // Adiciona a formatação de milhar e decimal
    valor = (valor / 100).toFixed(2).replace(".", ",");
    valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

    // Adiciona o símbolo da moeda
    campo.value = "R$ " + valor;
}
