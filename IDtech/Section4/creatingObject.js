const person1 = {
    name: "Isabelle",
    age: 12,
    eyecolor: "brown"
}; 

const person2 = {
    name: "Matthew",
    age: 13,
    eyecolor: "green"
}; 

const person3 = {
    name: "John",
    age: 12,
    eyecolor: "blue"
}; 


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

console.log(car1.name); 

console.log(car2.name, car2.color, car2.price); 
console.log(car3.name, car3.color, car3.price); 

car3.name = "Honda Civic"; 
console.log(car3); 