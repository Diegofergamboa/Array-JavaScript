const pets = ['perros', 'gatos', 'loros'];

let includeInArray = false;
for (let index = 0; index < pets.length ; index++) {
    const element = pets[index];
    if(element == 'perros') {
        includeInArray = true;
        break;
    }
}

console.log(includeInArray);

rta2 = pets.includes('perros');
console.log(rta2);
