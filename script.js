
console.log('Assignment 1');
alert('This progam calculates your age in days.');
let username = prompt('Please enter your name?');
let age = prompt('Please enter your age?');
let gndr = prompt('Please enter your GENDER (M/F)');
alert(gndr);
let numdays=365;
let daysalive=(age*numdays);
alert(username+', you are '+daysalive+' days old');
if (gndr === 'M' || gndr ==='m') 
{alert('The global life expectancy at birth for Men is 70 years or 25550 days');}
else if (gndr === 'F'|| gndr ==='f' )
{alert('The global life expectancy at birth for Women is 75 years or 27375 days');}
else {alert('You are alive');}