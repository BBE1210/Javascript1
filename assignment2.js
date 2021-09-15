console.log('Assignment 2');
alert('This progam prints your favorite motto.');

function getMotto()
{var favmotto = "What is your favorite Motto?";
var motto = prompt(favmotto);
    let message = motto;
return motto
};

function getMottocnt()
{var cntmotto = "How many times do you wish to display the motto?";
var motto1 = prompt(cntmotto);
let mottocount = parseFloat(motto1)
return mottocount;
}

let motto = getMotto();
let mcount= getMottocnt();

// While Loop
//window.onload = (event) =>
//{
//let display = '';
//let i = 1;
//while (i <= mcount)
//{display += i + '<br>' + ' ' +motto +' '; i++;}
//document.getElementById('phrase1').innerHTML = display;
//};

// For Loop
window.onload = (event) =>
{
let display = '';
for (let i =1; i <= mcount; i++)
{display += i + '.' +'<br>' + ' ' +motto +' '; }
document.getElementById('phrase1').innerHTML = display;
};

// function printMotto(motto, mottocount)
//{let favoritemotto1 = getMotto();
//let mottocount1= getMottocnt();
//alert(favoritemotto1);
//alert(mottocount1);





    

 





