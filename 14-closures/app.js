function p(content) {
  console.log(content);
}

// Closures

// Isto nos leva a uma das abstrações mais poderosas que JavaScript tem a oferecer — mas também a mais potencionalmente confusa.

function makeAdder(a) {
  return function(b) {
    return a + b;
  };
}
var x = makeAdder(5);
var y = makeAdder(20);
p(x(6))
p(y(7))