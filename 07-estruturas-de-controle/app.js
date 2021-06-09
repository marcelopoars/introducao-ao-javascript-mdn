function p(content) {
    console.log(content)
}


// if / else

let userName = 'Ana'
if (userName == 'Chico') {
    userName += ' Bento'
} else if (userName == 'Roberto') {
    userName += ' Carlos'
} else {
    userName = 'Olá ' + userName 
}

p(userName)


// while
let counter = 0
while (counter < 5) {
    p('oi\n')
    p('-')
    counter++
}

// for
for (let i = 1; i <= 5; i++) {
    p(i)
}

// operador '&&'
let city = 'Canoas' && 'Porto Alegre'
p(city)

let city2 = 'Canoas' || 'Porto Alegre'
p(city2)



// Operador ternário
let age = 21
let allowed  = (age >= 18) ? 'Maior' : 'Menor' 
p(allowed)


// switch
let color = 'red'
switch (color) {
    case 'red':
        p(`Cor selecionada: ${color}`)
        // break
    case 'green':
        p(`Cor selecionada: ${color}`)
        break
    case 'blue':
        p(`Cor selecionada: ${color}`)
        // break
    default:
        p('Cor não encontrada')
}

