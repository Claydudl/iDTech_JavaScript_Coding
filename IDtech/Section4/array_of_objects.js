const car1 = {
    name: "Ford Mustang",
    color: "blue",
    price: 27205
}; 

const car2 = {
    name: "BMW",
    color: "grey",
    price: 53400
}; 

const car3 = {
    name: "Toyota Camry",
    color: "red",
    price: 25505
}; 

let carCollection = [
    car1,
    car2,
    car3
];

console.log(carCollection);
console.log(carCollection[1]);
console.log(carCollection[1].color);

carCollection.push(
    {
        name: "Bronco",
        color: "Silver",
        price: 40042
    }
);

console.log(carCollection)