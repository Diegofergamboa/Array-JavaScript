const totals = [1,2,3,4,5,6,7,8,9];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum += element
}
console.log('respuesta en for clásico ' + sum);

const sumOnReduce = totals.reduce((sum, element) => {
    return sum += element ;
}, 0)
console.log('respuesta con reduce method es: ' + sumOnReduce);

//! Realizar un histograma con reduce.

