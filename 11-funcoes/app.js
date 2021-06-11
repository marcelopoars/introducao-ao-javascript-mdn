function p(content) {
  console.log(content);
}

// Funções
// Junto com objetos, funções são os componentes principais para o entendimento do JavaScript

// Função básica
function sum(number1, number2) {
  return number1 + number2
}

p(sum(5, 4))

// Você pode chamar a função sem passar o parâmetro esperado, nesse caso eles receberão o valor 'undefined'
p(sum()) // NaN

// O terceiro parâmetro foi ignorado
p(sum(2,3,10))


// Se nenhuma instrução de retorno for usada o JavaScript retorna 'undefined'
function teste() {
  p(arguments)
  return 
}
p(teste())


p('no corpo da função você tem acesso a uma variável adicional chamada arguments')
function sumNumbers() {
  let sum = 0
  for (let i = 0, args = arguments.length; i < args; i++) {
    sum += arguments[i]
  }
  return `TOTAL: ${sum}`
}
p(sumNumbers(2,2,4))


p("Vamos criar uma função para calcular média:")
function avg() {
  let sum = 0
  for (let i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i]
  }
  return sum / arguments.length
}
p(avg(2, 5, 5, 3))


p('Vamos calcular a média de um vetor')
function avgArray(array) {
  let sum = 0
  for (let i = 0, j = array.length; i < j; i++) {
    sum += array[i]
  }
  return sum / array.length
}
p(avgArray([55, 2, 10]))
p(avgArray([55, 2, 10]).toFixed(2))

p(avg.apply(null, [2,3,4,5]))