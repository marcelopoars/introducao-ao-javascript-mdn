function p(content) {
  console.log(content);
}

// Vetores
// Vetores em JavaScript são, de fato, um tipo especial de objeto.

// A forma tradicional de se criar um vetor em JavaScript é a seguinte:
var list = new Array();
list[0] = "Pão";
list[1] = "Leite";
list[2] = "Café";

p(list);
p(list.length); // O tamanho do vetor é seu "maior índice + 1"

// Existe uma notação mais conveniente usando um vetor literal:
var list2 = ["Presunto", "Queijo", "Café", "Pão"];
p(list2);
p(list2.length);

// Deixar uma vírgula à direita no final de um vetor literal gerará inconsistência entre os navegadores, portanto evite isso.

// ########################################
// Atenção ao tamanho do vetor
// ########################################

// Considere o caso abaixo:
var alunos = ["Maria", "João", "Ana"];
p(alunos.length); // retorna 3

alunos[100] = 'Pedro'

// O tamanho do vetor é seu "maior índice + 1"
p(alunos.length); // retorna 101

// Se você fizer referência a um índice de vetor inexistente, obterá um undefined:
p(alunos[50])


// Iterando um array
for (var i = 0; i < alunos.length; i++){
  p(alunos[i])
}

// Isso é um pouco ineficaz visto que você está procurando a propriedade length uma vez a cada iteração. Uma melhoria poderia ser:
for (var i = 0, len = alunos.length; i < len; i++){
  p(alunos[i])
}

//Uma forma mais elegante ainda poderia ser:
for (var i = 0, item; item = alunos[i++];) {
  p(item)
  p(`i: ${i} - Nome: ${alunos[i]}`)
}


alunos.push('Fulano')

p('for (let aluno in alunos)')
for (let aluno in alunos) {
  p(alunos[aluno])
} 