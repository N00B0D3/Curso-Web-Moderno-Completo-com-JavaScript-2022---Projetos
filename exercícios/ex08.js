/* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo). */
let pontuacao = "15, 20, 25, 50, 30, 17, 0, 8, 43"

function avaliacao(pontuacao)
let pontuacoes = stringPontuacoes.split(", ")
let QRecords = 0
let piorJ = 1
let MaiorPontuacao = pontuacoes[0]