function p(content) {
  console.log(content);
}

// Vetores e métodos

let alunos = ["Marcelo Pereira", "Ana", "Pedro", "Chico"];
let cursos = ["Html", "React", "Python", "Next"];

p(alunos);
p(cursos);

p(alunos.toString());
p(cursos.toLocaleString());

// Retorna um novo vetor com os itens adicionados nele.
const newArray = alunos.concat(cursos);
p(newArray);

// Converte um vetor em uma string com os valores do vetor separados pelo valor do parâmetro sep
const newString = alunos.join("*");
p(newString);

// shift() -	Remove e retorna o primeiro item
const firstItem = cursos.shift();
p(firstItem);
p(cursos);

// pop() -	Remove e retorna o último item
const lastItem = alunos.pop();
p(lastItem);
p(alunos);

// reverse() -	Reverte o vetor
p(alunos.reverse());

// slice(start, end)	Retorna um sub-vetor
p(cursos);
const newVetor = cursos.slice(0, 2);
p(newVetor);

// Prover uma função opcional para fazer a comparação
p(cursos.sort());

// splice()
cursos.push("PHP", "Java");
p(cursos);
const cursoRemovido = cursos.splice(3, 1);
p(cursoRemovido);
p(cursos);

// push()	Push adiciona um ou mais itens ao final
alunos.push('Márcia')
p(alunos)

// unshift()	Acrescenta itens ao começo do vetor
alunos.unshift('Juliano')
p(alunos)



