// Algoritmo para validar que todos los jugadores del Equipo son mayores de 15 años
const players = [
    {
        'name': 'Cristiano' ,
        'age': 12 ,
    } ,
    {
        'name': 'Pedro' ,
        'age': 15 ,
    } ,
    {
        'name': 'Ronaldo' ,
        'age': 16 ,
    } ,
    {
        'name': 'Juan' ,
        'age': 19 ,
    } ,
    {
        'name': 'Carlos' ,
        'age': 22 ,
    } ,
];

const validationAgeOfPlayers = players.every(player => player.age > 15);
console.log('Si los jugadores son mayores a 15 años podrán jugar el campeonato');

console.log('En el caso de los jugadores la respuesta es: ' + validationAgeOfPlayers);

// Mostrando con 15
const ageRange15 = players.map(player =>  {
    if(player.age <= 15) {
        return player;
    }
    return console.log(player);
});
console.log('Los jugadores que no tienen más de 18 son ' + ageRange15);
