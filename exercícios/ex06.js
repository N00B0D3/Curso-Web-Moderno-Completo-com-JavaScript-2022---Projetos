/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/
function JurosSimples (capital, taxa, tempo) {
    return capital + (capital * taxa * tempo)
}

function JurosComposto (capital, taxa, tempo) {
    return capital * (1 + taxa) ** tempo
}

console.log(JurosSimples(1500, 15/100, 12).toFixed(2))
console.log(JurosComposto(1500, 10/100, 6).toFixed(2))
