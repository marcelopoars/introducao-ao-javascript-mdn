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
    lastName: lastName // ou apenas 'lastName'
  }
}

function createPersonFullName(person) {
  return `${person.firstName} ${person.lastName}`
}
const person = createPerson('Marcelo', 'Pereira')
p(createPersonFullName(person))

/*
  Isso funciona, mas é muito feio. Terminamos com uma dúzias de funções em seu escopo global. 
  
  O que nós realmente precisamos é uma forma de anexar uma função a um objeto. Visto que funções são objetos, isso é fácil:
*/


function getPersonData(firstName, lastName) {
  return {
    firstName,
    lastName,
    fullName: function() {
      //'this' refere-se ao objeto corrente
      return `${this.firstName} ${this.lastName}`
    }
  }
}
const newPerson = getPersonData("Maria", 'Lisboa')
p(newPerson.fullName())

