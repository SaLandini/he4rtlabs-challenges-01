var botao = document.querySelector('button')
var valorProjeto = document.querySelector('#valor_do_projeto')
var horasTrabalhadas = document.querySelector('#horas_trabalhadas')
var diasEfetivos = document.querySelector('#dias_efetivos')
var ferias = document.querySelector('#ferias')
var total = document.querySelector('.resultado h2')

function calcular() {
    var valorHora = (valorProjeto.value / (diasEfetivos.value * 4 * horasTrabalhadas.value)) + (ferias.value * diasEfetivos.value * horasTrabalhadas.value)

    if (!isNaN(valorHora)){
        total.innerHTML = `Valor por Hora = R$ {valorHora.toFixed(2)}`
    }
    else {
        total.innerHTML = ''
    }

    valorProjeto = ''
    diasEfetivos.value = ''
    horasTrabalhadas.value = ''
    ferias.value = ''
}
