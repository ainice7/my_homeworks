'use strict'

//1.	Напишите функцию max, которая сравнивает два числа и возвращает большее: 
//AT = 10 min, ET = 5 min

let max = (a, ...end) => {
    return Math.max(a, ...end);
}

alert(max(0, -1, 5, 7, -13));

//2.	Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них
//AT = 10 min, ET = 15 min

let min = (a, ...end) => {
    let array = [a, ...end];
    let i = array.length;
    let min = array[0];
    while (i--) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
alert(min(0, -1, 100, 500, 100500));

//3.	Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции массивов:	
//a.	Отфильтруйте пользователей младше 18 лет
//b.	Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
//c.	Сформируйте новый массив, который содержит только полное имя пользователей
//AT = 30 min, ET = 60 min

let users = [{firstname: 'Jon', lastname: 'Snow', age: 23}, {firstname: 'Arya', lastname: 'Stark', age: 17}, 
{firstname: 'Sansa', lastname: 'Stark', age: 20}, {firstname: 'Brandon', lastname: 'Stark', age: 16}, 
{firstname: 'Shireen', lastname: 'Baratheon', age: 15}, {firstname: 'Rickon', lastname: 'Stark', age: 11}, 
{firstname: 'Daenerys', lastname: 'Targaryen', age: 23}, {firstname: 'Cersei', lastname: 'Lannister', age: 43},
{firstname: 'Jaime', lastname: 'Lannister', age: 43}, {firstname: 'Tyrion', lastname: 'Lannister', age: 39}];

let youngs = users.filter(function (user) {
    return user.age < 18;
});
console.log(youngs);

let addFullName = users.forEach(function(user) {
    return user.fullName = user.firstname + ' ' + user.lastname;
});
console.log(users);

let onlyFullName = users.map(user => {
    return user.fullName;
});

console.log(onlyFullName);
console.log(users);

//4.	Напишите функцию аналог метода массива shift. Функция удаляет из переданного в параметре массива первый элемент.
//AT = 10 min, ET = 10 min

let arrShifting = [1, 2, 3, 67, 454, 23];

let shiftFrom = (arr) => {
    return arr.splice(0,1);
}

shiftFrom(arrShifting);
console.log(arrShifting);

//5.	Напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов.
//AT = 10 min, ET = 10 min

let arrPushing = [1, 2, 3, 67, 454, 23];

let pushTo = (arr, ...many) => {
    return arr.splice([arr.length+1],0, ...many);
}

pushTo(arrPushing, 'penult', 'last');
console.log(arrPushing);

//6.	Напишите функцию аналог метода Object.assign(). Первый параметр функции - целевой объект, поля которого будут изменены или расширены. 
//Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.
//AT = 20 min, ET = 60 min

let obj = {firstname: 'Tom', age: 10};
let s = (target, ...prop) => {
    prop.forEach(function(item) {
        for(let key in item) {
            target[key] = item[key];
        };
    });
    return target;
};

console.log(s(obj, {firstname: 'John'}, {lastname: 'Doe'}));
console.log(obj); // {firstname: 'John', age: 10, lastname: 'Doe'}

//7.	Напишите функцию setComment с параметрами: date, message, author. 
//Дата и текст сообщения - обязательные параметры, если какой-то из них или оба отсутствуют, то выполнение функции должно обрываться, а пользователю выдаваться предупреждение (alert) о том, что данные переданы некорректно. 
//Параметр author - опциональный, но должна происходить проверка: если параметр не передан, то вместо него подставляется значение ‘Anonymous’. 
//Функция распечатывает в консоле текст в формате: 
//<имя_автора>, <дата>
//<текст_сообщения>
//AT = 20 min, ET = 30 min

let setComment = (date, message, author = 'Anonymous') => {
    if((date == undefined) || (message == undefined)) alert('Data is incorrect');
    let insideDate = new Date(date);

    let dd = insideDate.getDate();
    if (dd < 10) dd = '0' + dd;
      
    let mm = insideDate.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
      
    let yy = insideDate.getFullYear();
    if (yy < 10) yy = '0' + yy;
      
    insideDate = yy + '-' + mm + '-' + dd;
    return console.log(author + ', ' + insideDate + '\n' + message);
};

setComment('2016-11-02', 'Everything is ok', 'John');
setComment('2016-11-02', 'You could do it better!');

//8. Используя замыкание, напишите функцию createTimer, которая использует метод performance.now() для получения текущей временной метки и служит для замера времени выполнения другого кода:
//AT = 20 min, ET = 10 min

function createTimer() {
  let i = performance.now();
  return function() {
    return performance.now() - i;
  };
}

var timer = createTimer();
alert('!');  // код, время выполнения которого нужно измерить
alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()

//9. 2.	Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный параметр и возвращает функцию, которая добавляет к первому параметру второй. Функция работает по следующему принципу:
//AT = 20 min, ET = 60 min

function createAdder(x) {
    function grab(i) {
      return x + i;
    }

    return grab;
}

let hello = createAdder('Hello, ');
alert( hello('John') ); // Hello, John
alert( hello('Harry') ); // Hello, Harry

let plus = createAdder(5);
alert( plus(1) ); // 6
alert( plus(5) ); // 10
/////

// function createCounter() {
//   let counter = 0
//   const myFunction = function() {
//     counter = counter + 1
//     return counter
//   }
//   return myFunction
// }
// const increment = createCounter()
// const c1 = increment()
// const c2 = increment()
// const c3 = increment()
// console.log('example increment', c1, c2)