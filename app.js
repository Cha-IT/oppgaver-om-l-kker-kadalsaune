// Skriv ut tallene fra 1 til 10 med for-løkke:

document.write(`<h1>For-løkke</h1>`)
for(let i = 1; i < 11; i++){
    document.write(`${i} <br>`)
}

// Skriv ut tallene fra 1 til 10 med en while-løkke
// document.write(`<h1>While-løkke</h1>`)
// let j = 1;

// while(j < 11){
//     document.write(`${j} <br>`);
//     j++;
// }

// Skriv ut alle partall fra 0 til 100
document.write(`<h1>Partall</h1>`)

for(let i = 2; i <= 100; i += 2){
    document.write(`${i} <br>`)
}

// Skriv ut alle partall fra 0 til 100
document.write(`<h1>Oddetall</h1>`)

for(let i = 1; i <= 100; i += 2){
    document.write(`${i} <br>`)
}


// Skriv ut alle partall fra 0 til 100 med modulo
document.write(`<h1>Partall med modulo</h1>`)

for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        document.write(`${i} <br>`)
    }
}

// Skriv ut alle oddetall fra 0 til 100 med modulo
document.write(`<h1>Oddetall med modulo</h1>`)

for(let i = 0; i <= 100; i++){
    if(i % 2 != 0){
        document.write(`${i} <br>`)
    }
}