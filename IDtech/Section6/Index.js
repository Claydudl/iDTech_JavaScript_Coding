//anonymous function
(function (sentence) {
    let arrayOfWords = sentence.split(" ");
    console.log(arrayOfWords);
}) ("Hello, my name is Cheetah!"); 

//creating fat arrows
/**function creatingLoops(x) 
{
    for (let i = 0; i < x; i++) 
    {
          console.log(i);
    }
}
creatingLoops(20); **/

let creatingLoops = (x) => {
    for (let i = 0; i < x; i++) 
    {
          console.log(i);
    }
};
creatingLoops(5);