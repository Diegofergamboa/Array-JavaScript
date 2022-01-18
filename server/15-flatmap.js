const users = [
    {userID : 1 , NameUser: 'Diego' , atributes : [25, 'Frontend', 'Rappi']},
    {userID : 2 , NameUser: 'Fernando' , atributes : [28, 'Analista', 'IBM']},
    {userID : 3 , NameUser: 'José' , atributes : [29, 'Data Scientist', 'Oracle']},
];

const rtaMapAtributes = users.map(user => user.atributes).flat();
console.log('Respuesta usando flat y map: ' + rtaMapAtributes);

const rtaMapFlat = users.flatMap(user => user.atributes);
console.log('Respuesta con flatMap: ' + rtaMapFlat);

