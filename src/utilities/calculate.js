const add = (first, second) => {
    return first + second;
}

const multiple = (first, second) => {
    return first * second;
}

// const numbers = [10, 39, 59, 90, 100];
// const sumReducer = (previous, current) => previous + current;
// const total = numbers.reduce(sumReducer, 0);

// const items = [
//     {id: 1, name: 'Alta', price: 200},
//     {id: 1, name: 'Alta', price: 200},
//     {id: 1, name: 'Alta', price: 200},
//     {id: 1, name: 'Alta', price: 200},
//     {id: 1, name: 'Alta', price: 200},
// ];

// const itemSumReduce = (previous, current) => previous + current.price;
// const itemTotal = items.reduce(itemSumReduce, 0);

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}




// export default add;
export {
    add, 
    multiple, 
    getTotalPrice as getTotal
};