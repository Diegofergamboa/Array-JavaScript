const elements = [1,1,2,3];
const otherElements = [3,3,4,4];

const newArray = [...elements];
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element);
}

const rtaConcant = elements.concat(otherElements);

const rtaSplitOperation = [...elements , ...otherElements];
console.log(rtaSplitOperation);
console.log('Fusionando los arrays con un for clásico: ' + newArray);
console.log('Fusionando los arrays con un concat: ' + rtaConcant);

