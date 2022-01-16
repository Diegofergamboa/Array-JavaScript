// const words = ['spray', 'limit', 'elite' , 'exuberant'];


// const newArray = [];
// for (let index = 0; index < words.length; index++) {
//     const item = words[index];
//     if (item.length > 6) {
//         newArray.push(item); 
//     }
// }

// // console.log('newArray ', newArray)
// // console.log('words ' , words)

// const arrayFilter = words.filter(item => item.length>6);
// // console.log(arrayFilter);

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


// Todas las ordenes que se encuentren aprobadas en el estado de la orden.


const filterStateOrder = orders.filter(item => item.stateOrder && item.nameClient.length>5)
// console.table(filterStateOrder);

//! Se pueden crear consultas que sean un poco más avanzadas. Es decir con consultas directas de query.

const search = (query) => {
    return orders.filter(item => {
        return item.nameClient.includes(query);
    })
}

