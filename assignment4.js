// Lesson 4 - Random Number Guessing game

const messages = [
    "The minimun number entered is invalid", // messages[0]
    "The maximum number entered is invalid", // messages[1]
    "Please enter a minimum number",         // messages[2]
    "Please enter a maximum number",         // messages[3]
    "Sorry! Your numbers did not match the Random Number. ", // messages[4]
    "The Random Number is: ", // messages[5]
    "Good Job!!! You lucky Duck. Your Number matched the  + Random Number: "]; // messages[6]
    var minv = 0;
    var maxv = 100;
    count = 0;
function getrandomno(minvalue,maxvalue ) {
    let rminval= randomnumber.minnum.value;
    let rmaxval= randomnumber.maxnum.value;
    let randomno= Math.floor(Math.random() * 101)
    count++;
 
    if (rminval < 0 && rminval !=null)
    {
        window.alert("The minimun number entered is invalid")
    };
    
    if (!rminval)
    {
        window.alert("The minimum number entered is invalid")
        document.getElementById("getrandom").innerHTML = "Please enter a minimum number" 
    };

    if (rminval > maxv )
    {  window.alert("The minimum number entered is greater than the maximum value")
    }
    if (rmaxval < 0 && rmaxval !=null)
    {
        document.getElementById("getrandom").innerHTML = "The maximum number entered is invalid" 
    };

    if (!rmaxval)
    {
        alert("The maximum number entered is invalid")
        document.getElementById("getrandom").innerHTML = "Please enter a maximum number" + rmaxval
    };

    if (rmaxval > maxv )
    {  window.alert("The maximum number entered is greater than the maximum value")
        document.getElementById("getrandom").innerHTML = "The maximum number entered is invalid" + rmaxval}
    
    if (rminval && rminval != randomno && rmaxval && rmaxval !=randomno)
        {
            document.getElementById("getrandom").innerHTML = "Sorry! Your numbers did not match the Random Number. " + "The Random Number is: " + randomno
            for 
                (cnt = 1; cnt < 4; cnt += 1)
                {
                    document.getElementById("imoji").innerHTML = '&#128549';
                }
        }
    else
    if (rminval == randomno || rmaxval == randomno)
    {
        document.getElementById("getrandom").innerHTML = "Good Job!!! You lucky Duck. Your Number matched the Random Number: "+ randomno
        document.getElementById("imoji").innerHTML = '&#128512';
    }
    return };

    // Display number of entries

let numMatch = false;
function numberValidation(minvalue, maxvalue) 
{   let rminval= randomnumber.minnum.value;
    let rmaxval= randomnumber.maxnum.value;
    if (typeof rminval=== 'number' && typeof rminval === 'number')
    { count++; return true;}
}

function displayCount() 
{document.getElementById('count').innerHTML = 'Number of attempts: ' + count;}
window.addEventListener("submit", (event) =>
{displayCount();});

