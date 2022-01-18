const numbers = [1,30,50,60,20,20];


let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30) {
        rta = element;
        break;
    }
}

console.log(rta);

const rta2 = numbers.find(num => num == 30);
console.log(rta2);

// Retornar valores.
// Cuando no encuentra un elemento devuelve undefined.

//!Tambien se puede encontrar con finINdex.

//* Indica la posición del elemento en específico. del index. Si no lo encuentra retorna un -1.



