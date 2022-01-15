const orders = [
    {
        'nameClient' : 'Valentina' ,
        'orderProduct' : 'Shoes' ,
        'stateOrder' : false ,
    } ,
    {
        'nameClient' : 'Pedro' ,
        'orderProduct' : 'SmartWatch' ,
        'stateOrder' : true ,
    } ,
    {
        'nameClient' : 'Richard' ,
        'orderProduct' : 'Laptop' ,
        'stateOrder' : false ,
    } ,
    {
        'nameClient' : 'Christian' ,
        'orderProduct' : 'WifiModem' ,
        'stateOrder' : true ,
    } ,
    {
        'nameClient' : 'Kenny' ,
        'orderProduct' : 'Keyboard' ,
        'stateOrder' : false ,
    } ,
];

// const print = orders.forEach(element => {
//     console.table(element)
// });

// Para seleccionar solamente un conjunto especial de datos que pueda realizar.
// Uno de los mejores usos para extraer elementos en específico.

const orderProducts = orders.map(item => ` ${item.orderProduct}`)

console.log('Solo orderProducts' + orderProducts);

// Agregar un nuevo atributo a un array.

// ! Manera errónea.
// const addingElements = orders.map(item => {
//     item.tax = 0.19 ;
//     return item
// })
// // Cuando generamos una copia que es inmutable sino que trae la referencia en memoria y la cambia.
// console.log('Agregando el nuevo atributo de impuesto' + addingElements)
// console.table(orders);

// ! Manera correcta.
// // Esto solo pasa con Objetos y, se usa ... es usado en ECMAScript6
const addingElementsCorrect = orders.map((item => {
    //* Aqui estamos clonando los objetos en un nuevo espacio o una nueva referencia en memoria.
    return {
        ...item, 
        tax : 0.19
    };
}));
// Cuando generamos una copia que es inmutable sino que trae la referencia en memoria y la cambia.
console.table('Agregando el nuevo atributo de impuesto de manera correcta sin afectar la referencia al objeto original', addingElementsCorrect)
console.table(orders);