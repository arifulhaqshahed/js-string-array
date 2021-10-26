const products = [
    'Dell i9 laptop',
    'iphone 12 pro max phone',
    'yellow laptop with black camera',
    '1X59 Lenovo commercial yoga laptop',
    'LG Supernova Laptop',
    'HTC low price mobile Phone'
]
const searching = 'Laptop';

// indexOf

const output = [];
for (const product of products) {
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        output.push(product);
    }
}
console.log(output);

includes();
startsWith();
endsWith()