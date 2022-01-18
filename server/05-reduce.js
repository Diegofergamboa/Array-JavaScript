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

const numbers =  [1,2,1,2,1,2,3,4,3,5,10];

const histograma = numbers.reduce((objeto,num)=>{
    if (!objeto[num]) {
        objeto[num] = 1 ;
    } else {
        objeto[num] += 1 ;
        }
    return objeto;
},{});

console.log(histograma);


