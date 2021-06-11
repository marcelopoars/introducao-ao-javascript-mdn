function p(content) {
  console.log(content);
}

// Objetos Personalizados
/*
  Na clássica Programação Orientada a Objetos, objetos são coleções de dados e métodos que operam sobre esses dados.

  JavaScript é uma linguagem baseada em protótipos que não contém a estrutura de classe.

  JavaScript usa funções como classes.
*/

function createPerson(firstName, lastName) {
  return {
    firstName: firstName, // ou apenas 'firstName'
    lastName: lastName, // ou apenas 'lastName'
  };
}

function createPersonFullName(person) {
  return `${person.firstName} ${person.lastName}`;
}
const person = createPerson("Marcelo", "Pereira");
p(createPersonFullName(person));

/*
  Isso funciona, mas é muito feio. Terminamos com uma dúzias de funções em seu escopo global. 
  
  O que nós realmente precisamos é uma forma de anexar uma função a um objeto. Visto que funções são objetos, isso é fácil:
*/

function getPersonData(firstName, lastName) {
  return {
    firstName,
    lastName,
    fullName: function () {
      //'this' refere-se ao objeto corrente
      return `${this.firstName} ${this.lastName}`;
    },
  };
}
const newPerson = getPersonData("Maria", "Lisboa");
p(newPerson.fullName());

// Podemos tirar vantagem da palavra chave 'this' para melhorar nossa função:
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

// new é fortemente relacionada a 'this'
const person1 = new Person("João", "Silva");
p(person1.fullName());

// Nossos objetos pessoa estão ficando melhor mas ainda existem algumas arestas feias. Toda vez que criamos um objeto pessoa, criamos duas marcas de nova função dentro dele — não seria melhor se este código fosse compartilhado?
function personFullName() {
  return `${this.firstName} ${this.lastName}`;
}
function Person2(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = personFullName;
}

// Assim está melhor: estamos criando as funções de método apenas uma vez, e atribuimos referências para elas dentro do construtor. Podemos fazer algo melhor do que isso? A resposta é sim:
function Person3(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person3.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}
