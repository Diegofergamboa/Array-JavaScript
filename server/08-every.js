//! Contra-elemento de some y, se usa para decir qué todo y cada uno de los elementos cumple con una condición.


const numbers = [1,2,3,4,5,6,7,8,9,10];

let rta = true ;

for (let index = 0 ; index < numbers.length ; index ++ ) {
    const element = numbers[index];
    if (element >= 10) {
        rta = false;
        break;
    }
}

console.log(rta);

const rta2 = numbers.every(item => item < 11);
console.log(rta2);



