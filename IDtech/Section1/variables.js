// global scope with var keyword
// ability to change the variable
var number_of_students = 30;

console.log(number_of_students);

number_of_students = 20;

console.log(number_of_students);

//local scope let keyword
//ability to change the variable
function studentName() {
    let myName = "Cheetah";

    console.log(myName); 

    myName = "Clayton";

    console.log(myName);
}

studentName();


//local scope const keyword
//don't have the ability to change the variable
const city = "Boston";
console.log(city);

//single-line comment

/* 
multi
line
comment
*/
 

//var isboy = true;

// numbers/ integers
let myTestScore = 97.5;
console.log(myTestScore);

console.log(97.5+10)

//strings/ text
let favoriteFood = "Cheesecake";
console.log(favoriteFood);

let greetings = "Hello Class!";
let message = "Welcome to Javascript Coding!";

console.log(greetings + " " +  message);

// boolean/ true/ false
letweekend = false;
console.log(weekend);

letweekend = true;
console.log(weekend);