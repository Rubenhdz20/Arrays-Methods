const products = [
    {title: 'Pizza', price: 123, id: '🍕'},
    {title: 'Burguer', price: 121, id: '🍔'},
    {title: 'Jokies', price: 134, id: '🥞'}
];

const myProducts = [];

const productIndex = products.findIndex(item => item.id === '🍔');
if(productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}

console.log("productos", products);
console.log("misproductos", myProducts);

const inmutableProduct = products.filter(item => item.id != '🍔');

console.log("inmutable", inmutableProduct);

// Update 

const products2 = [
    {title: 'Pizza', price: 123, id: '🍕'},
    {title: 'Burguer', price: 121, id: '🍔'},
    {title: 'Jokies', price: 134, id: '🥞'}
];

const update = {
    id: '🍕',
    changes: {
        price: 200,
        description: 'vegan pizza'
    }
}