//The reduce method
//executes a reducer function on each element of the array, resulting in a single value.
//summing an array
[3, 5, 7, 9, 11].reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
});

//another example: summing up total elements in an array

let prices = [9.99, 1.50, 19.99, 49.99, 30.50];
let total = prices.reduce((total, prices) => {
    return total + prices;
});

//finding the minimum value in an array
//just take the examples of the array prices for understanding the below mentioned code
let minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})
console.log(minPrice)