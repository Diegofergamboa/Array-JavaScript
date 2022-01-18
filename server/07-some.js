//! Aplicación clásica.

const numbers = [1,9,3,7];

let respuestaClasica = false;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        respuestaClasica = true;
        break;
    }
}

// console.log('respuesta clásica ' + respuestaClasica);

//! Repuesta con some resumida a una sola linea de código en un script.

const respuestaSome = numbers.some(item => item % 2 === 0);
// console.log('respuesta con Some ' + respuestaSome)

//! Usando con objetos el metodo de array de some.

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

//* Si al menos una orden ha sido entregada.

entregaEnTrue = orders.some(order => order.stateOrder);
// console.log(entregaEnTrue); // Dice como output que sí


