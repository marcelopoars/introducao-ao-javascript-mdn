function p(content) {
  console.log(content);
}

// Objetos
// Tudo em JavaScript é objeto

// Criamdo um objeto em JS

// Forma 1
var obj1 = new Object();
p(obj1);

// Forma 2
// Sintaxe de objeto literal (mais conveniente)
// Essa sintaxe é também o coração do formato JSON e deveria ser sempre preferida.
var obj2 = {};
p(obj2);

// Forma 1
obj2.name = "João";
var name = obj2.name;
p(name);

// Forma 2 - oferece mais vantagens de uso
obj2["city"] = "Salvador";
var city = obj2.city;
p(city);

// A sintaxe de objeto literal pode ser usada para inicializar completamente um objeto:
var aluno1 = {
  name: "Maria",
  city: "Porto Alegre",
};
p(aluno1);

var aluno2 = {
  name, // aqui a chave e a variável são iguais, então podemos simplificar
  city, // aqui a chave e a variável são iguais, então podemos simplificar
  course: {
    languages: ["JavaScript", "PHP", "Python"],
    design: ["Photoshop", "Illustrator"],
  },
};
p(aluno2);
p(aluno2.course.languages);
p(aluno2["course"]["design"]);
