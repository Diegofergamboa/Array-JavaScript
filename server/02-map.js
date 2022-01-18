const letters = ['a' , 'b' , 'c'];


// const newArray = [];
// for (let index = 0 ; index < letters.length ; index ++) {
//     let element = letters[index];
//     newArray.push(element + '++');

// }
const newArray = letters.map(item => item + '++');

console.log('original', letters);
console.log('new ' + newArray);

const array = ['a', 'bb', 'ccc']; 
const rta = array.map(item => item.length);
console.log(rta);