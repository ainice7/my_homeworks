"use strict"

//fisrt task

let mileena = 12;
let jade = mileena * 3;
let kitana = mileena + jade;

alert(mileena);
alert(jade);
alert(kitana);

//second task

let firstName = prompt('', 'Enter your first name');
let lastName = prompt('', 'Enter your last name');
alert('What’s up ' + firstName + ' ' + lastName);

//third task

let x = +prompt('', 'Enter x');
let y = +prompt('', 'Enter y');

alert(x * y);
alert(x / y);
alert(x - y);
alert(x + y);

//fourth task

let workHours = +prompt('', 'Enter work hours');
let workDays = +prompt('', 'Enter work days');
let payPerHour = +prompt('', 'Enter pay per hour');
let totalPay = workHours * workDays * payPerHour;

alert(totalPay);

//fifth task

let userValue = +prompt('', 'Enter your value');
function isOdd(num) { return num % 2 === 1; }

alert(isOdd(userValue));

//sixth task

let userValue2 = isFinite(prompt('', 'Enter your value'));

alert(userValue2); 

//seventh task 

let randVal = Math.round(Math.random() * 100);
let userVal = +prompt('', 'Enter your value');
let whichIsBigger = 
    (randVal > userVal) ? ("Random value " + randVal + " is bigger than " + userVal) : ("User value " + userVal + " is bigger than " + randVal);

alert(whichIsBigger);

//eighth task

let str = prompt('Что вам нравится изучать?','');
let whatILike = prompt('а ещё что?','');//Заполнять без "Мне нравится изучать..."

alert(`Ваше увлечение "${whatILike}" ${str.includes(whatILike) ? 'уже было' : 'ещё не было'} введено`);

let substr = str.substring(0,21);
let result = alert(`${substr}${whatILike}`);
