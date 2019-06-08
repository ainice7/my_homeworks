'use strict'

// 1.	Создайте объект calculator с методами:
// a.	read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
// b.	sum() возвращает сумму этих двух значений
// c.	multi() возвращает произведение этих двух значений
// d.	diff() возвращает разницу
// e.	div() возвращает частное
//AT = 15 MIN, ET = 10 MIN

let calculator = {
    read : function() {
        this.x = +prompt('Enter x','');
        this.y = +prompt('Enter y','');
    },
    sum : function() {
        return this.x + this.y;
    },
    multi : function() {
        return this.x * this.y;
    },
    diff : function() {
        return this.x - this.y;
    },
    div : function() {
        return this.x / this.y;
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );

// 2.	Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(), при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message.
//AT = 10 MIN, ET = 10 min

let coffeeMachine = {
    message : 'Your coffee is ready!',
    start : function() {
        setTimeout(() => alert(this.message), 3000);
    },
}
coffeeMachine.start();

//3.	Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом возврата текущего значения. 
//Используйте концепцию chaining для создания цепочки вызовов.
//AT = 10 MIN, ET = 10 min

let counter = {
    count : 0,
    inc : function() {
        this.count++;
        return this;
    },
    dec : function() {
        this.count--;
        return this;
    },
    getValue : function() {
        return this.count;
    }
}

var current = counter.inc().inc().dec().inc().dec().getValue();
alert(current); 

//4.	Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. 
//Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. 
//Для расчетов все методы используют функционал ранее созданного калькулятора.
//AT = 20 MIN, ET = 15 min

let me = {
    getSum : (a,b) => {
        this.x = a;
        this.y = b;
        return (a + ' + ' + b + ' = ' + calculator.sum.call(this, x, y))
    },
    getDiff : (a,b) => {
        this.x = a;
        this.y = b;
        return (a + ' - ' + b + ' = ' + calculator.diff.call(this, x, y));
    },
    getMulti : (a,b) => {
        this.x = a;
        this.y = b;
        return (a + ' * ' + b + ' = ' + calculator.multi.call(this, x, y));
    },
    getDiv : (a,b) => {
        this.x = a;
        this.y = b;
        return (a + ' / ' + b + ' = ' + calculator.div.call(this, x, y));
    }
}

alert(me.getSum(1, 1));
alert(me.getDiv(1, 0));

//5.	Есть следующий код:
//Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях.
//AT = 15 MIN, ET = 5 min

var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

format.call(country, '',''); // Ukraine
format.apply(country, ['[',']']); // [Ukraine]
format.call(country.capital, '',''); // Kyiv
format.apply(country.capital, ['','']); // Kyiv
format.apply(null,['']); // undefined

//6.	Создайте объект user с полем name. Создайте функцию format с параметрами start и end:
//Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя
// Реализуйте 2 версии текущего задания, используя:
// 1. Анонимную функцию;
// 2. Метод bind().
//AT = 20 MIN, ET = 20 min
let user = {
    name : 'John'
}

let format = function(start, end) {
    console.log(start + this.name + end)
};

let userFormat = function() {format.apply(user, arguments)};

userFormat('<<<', '>>>'); // <<<John>>>
//or

let user = {
    name : 'John'
}

let format = function(start, end) {
    console.log(start + this.name + end)
};

let userFormat = format.bind(user);

userFormat('<<<', '>>>'); // <<<John>>>

// 7.	Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: разделитель и строки передаются в параметрах функции. 
//Используя карринг, создайте новую функцию hello, которая которая выводит приветствие тому, кто передан в ее параметре:
//AT = 15 MIN, ET = 12 min

function concat(a, b, c) {
    return a + b + c;
}

let hello = concat.bind(null, 'Hello', ' ');
hello('World'); // Hello World
hello('John'); // Hello John

//8.	Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:
//AT = 15 MIN, ET = 45 min

function cube(x) {
    let result = 1;
    for (let i = 3; i > 0; i--) {
        result *= x;
    }
    return result;
}

function cube(x, n = 3) {
    if (n != 1) {
        return  x * cube(x, n - 1);
    } else {
        return x;
    }
} 

console.log( cube(2) ); 

//9.	Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:
//AT = 15 MIN, ET = 45 min

function sum(...arr) {
    if (arr.length == 1) return +arr[0] // base case
    return +arr[0] + sum.apply(null, arr.slice(1))  // recurse
}

console.log( sum(1, 2, 3, 4, 5) ); // 15