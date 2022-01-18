const elements = ['Fire' , 'Water' , 'Air' , 'Earth'];
let rtaFinal = '';
let separator = '---';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal += element + separator;
}
//*

const rtaJoin = elements.join('---');

console.log('for clásico ' + rtaFinal);
console.log('join method ' + rtaJoin);



