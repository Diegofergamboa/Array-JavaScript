// const products = [
//     {title: 'Pizza' , price: 150 , id: 1 } ,
//     {title: 'Burger' , price: 120 , id: 2 } ,
//     {title: 'Meal' , price: 75 , id: 3 } ,
// ];

// const myProducts = [];

// const productIndex = products.find(item => item.id === 2);
// if(productIndex !== -1) {
//     myProducts.push(products[productIndex]);
//     products.splice(productIndex, 1);
// }

// console.log('products', products);
// console.log('myProducts', myProducts);
// console.log('-'.repeat(10));


// Update
const products2 = [
    {title: 'Pizza' , price: 150 , id: 1 } ,
    {title: 'Burger' , price: 120 , id: 2 } ,
    {title: 'Meal' , price: 75 , id: 3 } ,
];
const update = {
    id : 2, 
    changes: {
        price: 200 ,
        descripcion: 'delicioso' ,
    } ,
};

const productIndex = products2.findIndex(item => item.id === update.id);
products2[productIndex] = {
    ...products2[productIndex] ,
    ...update.changes
    };
console.log(products2);