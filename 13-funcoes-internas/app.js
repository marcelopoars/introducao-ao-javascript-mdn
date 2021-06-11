function p(content) {
  console.log(content);
}

// Funções internas

/*
Em JavaScript é permitido declarar uma função dentro de outras funções.

Um detalhe importante sobre funções aninhadas em JavaScript é que elas podem acessar as variáveis do escopo das funções parente:
*/

function calc() {
  let num1 = 3
  function sum() {
    let num2 = 5
    return num1 + num2
  }

  return sum()
}

p(calc())