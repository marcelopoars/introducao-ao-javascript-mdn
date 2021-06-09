console.log(0.1 + 0.2);

// ===================
// COnvertendo string para inteiro

let string = "32";

let number = parseInt(string);

console.log(typeof number);

console.log(parseInt("11", 10));
console.log(parseInt("11", 2));
console.log(parseInt("11", 8));
console.log('parseInt("10.2abc")', parseInt('10.2abc'));
console.log(parseInt('44marcalo21'))
console.log('+10.2abc', +'10.2abc');

console.log(+"42");
console.log(parseFloat("11", 10));
console.log(parseFloat("hello", 10));

// Verifica se é NaN
console.log(isNaN(2));
console.log(isNaN("2tthththt"));

// Verifica se é Infinity
console.log(isFinite(2));


