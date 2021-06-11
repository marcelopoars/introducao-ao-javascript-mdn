function p(content) {
  console.log(content);
}

// Funções anônimas
const avg = function () {
  let sum = 0;
  for (let i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length
};
p(avg(5, 15))
