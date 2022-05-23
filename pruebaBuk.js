const reverseCase = (frase) => {
    let fraseUpper = frase.toUpperCase()
    let separarFrase = fraseUpper.split(' ');
    let palabras = []
    for(let i = 0; i < separarFrase.length; i++) {
        palabras[i]= separarFrase[i].split('')
    }
    for(let i = 0; i < palabras.length; i++) {
        let lowerCase = palabras[i][0].toLowerCase();
        palabras[i][0] = lowerCase
        let newFrase = palabras[i].join('')
        palabras[i] = newFrase
    }
    let reversedCase = palabras.join(' ')

    return reversedCase
}

console.log(reverseCase('esto es un string de prueba'))