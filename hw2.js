"use strict"

//IF tasks
//first task

let userX = +prompt('Enter value of x', '');

if (userX > 0) {
    alert('X is positive');
} else if (userX < 0) {
    alert('X is negative');
} else {
    alert('X is 0');
};

//second task
let a = 32;
let b = 0;
let c = -3;
      
if (a > b) {
    if (b > c) {
        alert('c = ' + c + ' is min value');
    } else {
        alert('b = ' + b + ' is min value'); 
    }
} else if (a > c) {
    if (c > b) {
        alert('b = ' + b + ' is min value');
    } else {
        alert('c = ' + c + ' is min value'); 
    }
} else {
    alert('a = ' + a + ' is min value');
}
//or
Math.min(a,b) == a ? 
        (Math.min(a,c) == a ? alert('a = ' + a + ' is min value') : alert('c = ' + c + ' is min value')) 
       : (Math.min(b,c) == b ? alert('b = ' + b + ' is min value') : alert('c = ' + c + ' is min value'));

//third task

let accumMoney1 = +prompt('Сколько накопили?','');
let accumMoney2 = +prompt('Сколько накопил ваш друг?','');
let ourMoney = accumMoney1 + accumMoney2;

ourMoney > 1000 ? alert('Летите на Майорку') : alert('Выпейте пива');

//fourth task

let age = +prompt('Введите ваш возраст','');

if ((age >= 20) && (age < 27)) {
    alert('Выслать повестку');
} 

//fifth task

let myBus = +prompt('Введите номер подъехавшей маршрутки','');

((myBus == 7) || (myBus == 255) || (myBus == 225)) ? alert('Едьте домой') : alert('Дождитесь следующую');

//sixth task 

let day = new Date();
let today = day.getDay();

switch(today) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        alert('Надо работать');
        break;
    case 6:
    case 0:
        alert('Пора отдыхать');
        break;
    default:
        alert('Упс, что-то пошло не так!');
}

//seventh task

let x = +prompt('Enter value of X from -20 to 20','');
let y = +prompt('Enter value of Y from -20 to 20','');

((x <= 1) && ((y >= 3) || (y < 0))) ? alert(x + y) : alert('Wrong!');

//eighth task

(((x > 2) && (x < 11)) || ((y >= 6) && (y < 14))) ? alert(x * 2) : alert(x + 5);

//ninth task 

let greetingUser = prompt('Enter your User Name','');

if ((greetingUser == null) || (greetingUser == "")) {
    alert('You didn\'t enter your Name');
} else {
    alert('Hello ' + greetingUser); 
}

//tenth task

let greeting = '';
let lang = prompt('Enter your language', 'en, ru or de');

if (lang == 'ru') {
    greeting = 'Привет!';
    alert(greeting);
} else if (lang == 'en') {
    greeting = 'Hello!';
    alert(greeting);
} else if (lang == 'de') {
    greeting = 'Hallo!';
    alert(greeting);
} else {
    alert('Wrong language');
}

//or

switch (lang) {
    case 'ru':
        greeting = 'Привет!';
        alert(greeting);
        break;
    case 'en': 
        greeting = 'Hello!';
        alert(greeting);
        break;
    case 'de':
        greeting = 'Hallo!';
        alert(greeting);
        break;
    default: 
        alert('Wrong language');
}

//eleventh task

let date = new Date();
let month = date.getMonth();

switch (month) {
    case 0: 
        alert('Сейчас Январь - зимний месяц');
        break;
    case 1: 
        alert('Сейчас Февраль - зимний месяц');
        break;
    case 2: 
        alert('Сейчас Март - весенний месяц');
        break;
    case 3: 
        alert('Сейчас Апрель - весенний месяц');
        break;
    case 4: 
        alert('Сейчас Май - весенний месяц');
        break;
    case 5: 
        alert('Сейчас Июнь - летний месяц');
        break;
    case 6: 
        alert('Сейчас Июль - летний месяц');
        break;
    case 7: 
        alert('Сейчас Август - летний месяц');
        break;
    case 8: 
        alert('Сейчас Сентябрь - осенний месяц');
        break;
    case 9: 
        alert('Сейчас Октябрь - осенний месяц');
        break;
    case 10: 
        alert('Сейчас Ноябрь - осенний месяц');
        break;
    case 11: 
        alert('Сейчас Декабрь - зимний месяц');
        break;
}

//twelveth task 

let lang1 = prompt('Choose your language','ru or en');
let date1 = new Date();
let day1 = date1.getDay();
let result;

switch (lang1) {
    case 'ru':
        switch (day1) {
            case 0:
                result = 'Воскресенье';
                break;
            case 1:
                result = 'Понедельник';
                break;
            case 2:
                result = 'Вторник';
                break;
            case 3:
                result = 'Среда';
                break;
            case 4:
                result = 'Четверг';
                break;
            case 5:
                result = 'Пятница';
                break;
            case 6:
                result = 'Суббота';
                break;
        }
        alert('Сегодня ' + result);
        break;
    
    case 'en':
        switch (day1) {
            case 0:
                result = 'Sunday';
                break;
            case 1:
                result = 'Monday';
                break;
            case 2:
                result = 'Tuesday';
                break;
            case 3:
                result = 'Wednesday';
                break;
            case 4:
                result = 'Thursday';
                break;
            case 5:
                result = 'Friday';
                break;
            case 6:
                result = 'Saturday';
                break;
        }
        alert('Today is ' + result);
        break;
    
    default: 
        alert('Wrong language');
}

//Circle tasks

//first task 

let sharb = '.';

for (let i = 0; i < 5; i++) {
    sharb += '#.';
}

alert(sharb);

//second task

let sqOdd = 1;

for (let j = 2; j <= 30; j++) {
    if (j % 2 != 0) continue;
    sqOdd = j*j;
    console.log(sqOdd);
}

//third task

let happyBDUser = prompt('What is your name?','Feduk');
let happyBDText = 'Happy birthday to you \n ';

for (let b = 1; b < 4; b++) {
    if (b == 3) console.log('Happy birthday dear ' + happyBDUser);
    console.log(happyBDText);
}

//fourth task

let circleHell = confirm('Do you want to end this?');

while (circleHell == false) {
    circleHell = confirm('Do you want to end this?'); 
}

//fifth task

let userValue = +prompt('Enter your value', '');
let sum = 0;

for(let k = 0; k < userValue; k++) {
    if (k % 2 == 0) continue;
    sum += k;
    console.log(sum);
}

//sixth task

let counter = 0;
let randValue;

while(true){
   counter++;
   randValue = Math.random();
   if(randValue > 0.9){
       alert('Прервавшее число: ' + randValue + '\nКоличество итераций: ' + counter);
       break;
   }
}

//seventh task

let result1; 

for (let t = 1; t <= 10; t++) {
    for (let r = 1; r <= 10; r++) {
        result1 = (t * r);
        console.log(t + ' * ' + r + ' = ' + result1);
    } 
}

//eighth task

// let n = +prompt('','');
// var fib = []; 

// fib[0] = 0;
// fib[1] = 1;
// for (i = 2; i <= n; i++, 
//     (fib[i] = fib[i - 2] + fib[i - 1])) {
// }

// console.log(fib.join(', '));

// //
// let n = +prompt('','');
// let a = 1, b = 1;
// let fibonacci = '0, 1, 1, ';

// for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//     console.log(b);
// }

let n = +prompt('','');
let x = 0, y = 1, z;
let fibonacci = [0 , 1];

for (let i = 2; i <= n; i++, fibonacci.push(x + y),
    z = x + y,
    x = y,
    y = z) {};

console.log(fibonacci.join(', '));

//ninth task

let uVal = +prompt('Enter your value','');
let total = [];
let sum = uVal;
let average;

for (let u = 0; ; u++) {
    total[u] = uVal;
    uVal = +prompt('Enter your value','');
    sum += uVal;
    if (uVal == 0) break;
}

average = sum / total.length;

alert('Введенные значения: ' + total.join(', ') + '\nОбщая сумма: ' + sum + '\nСреднее значение: ' + average);

//tenth task 

let password = prompt('Enter your password','');

if(password == 'comein') {
    alert('You have been logged in successfully');
} else if(password == null) {
    let quest = confirm('Do you want to cancel authorization?');
    if (quest == true) alert('You have canceled authorization');
} else {
    while (password != 'comein') {
        password = prompt('Enter your password again','');
        if (password == null) {
            quest = confirm('Do you want to cancel authorization?');
            if (quest == true) {
                alert('You have canceled authorization');
                break;
            } else continue;
        }
    }
    if(password == 'comein') alert('You have been logged in successfully');
}

