function p(content) {
    console.log(content)
}

// Valores que podem ser convertidos em boolean

p("Valores que retornam 'false'")
p(Boolean(''))
p(Boolean(0))
p(Boolean(NaN))
p(Boolean(null))
p(Boolean(0))
p(Boolean(undefined))
p(Boolean(false))

p("Valores que retornam 'true'")
p(Boolean('Joao'))
p(Boolean(123))


p( false || 2 && 1 || 56)
