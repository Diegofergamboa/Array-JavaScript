
//! Implementando filter, para hacer un buscador de Pokemons que sean de una API.

//* Probaré si función con un minuscula o mayúscula sin importar eso

const Pokemons = [
    {
        'id' : 1 ,
        'namePokemon' : 'Pikachu' ,
        'levelPower' : 90 ,
    } ,
    {
        'id' : 2 ,
        'namePokemon' : 'Bulbasaur' ,
        'levelPower' : 15 ,
    } ,
    {
        'id' : 3 ,
        'namePokemon' : 'Charmander' ,
        'levelPower' : 70 ,
    } ,
    {
        'id' : 4 ,
        'namePokemon' : 'Charizard' ,
        'levelPower' : 100 ,
    } ,
    {
        'id' : 5 ,
        'namePokemon' : 'Squirtle' ,
        'levelPower' : 70 ,
    } ,
    {
        'id' : 6 ,
        'namePokemon' : 'Wartortle' ,
        'levelPower' : 1 ,
    } ,
    {
        'id' : 7 ,
        'namePokemon' : 'Ivysaur' ,
        'levelPower' : 77 ,
    }
];

//* Función para crear otro array con los Pokemones más poderosos por filter.

const strongerPokemon = Pokemons.filter(character => character.levelPower >= 70);
// console.log(`Los pokemones más poderoso con un level Power superior a 70 son, ${strongerPokemon}`);

//* Para buscar el Pokemón de la búsqueda.

const querySearch = (query) => {
    return Pokemons.filter(pokemon => {
        return pokemon.namePokemon.includes(query);
    })
}

const valueInput = 'Pika'; 
const resultSearch = querySearch(valueInput);

