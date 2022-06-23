let counter = 10;

function countdown(){
    if (counter > 0)
    {
    console.log(counter);
    counter--;
    }
}

setInterval(countdown, 1000)