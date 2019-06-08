'use strict'

//first task. Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. 
//            Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.
//AT = 10 min, ET = 12 min

let mixedArray = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];

let sum = 0;
for(let i = 0; i < mixedArray.length; i++){
    if(isFinite(mixedArray[i]) == true) {
		mixedArray[i] = +mixedArray[i];
    } else {
	    mixedArray[i] = 0;	
    }
    sum += mixedArray[i];
}

console.log(sum);

//second task. Сгенерируйте массив из n случайных чисел с двумя знаками после запятой. 
//             Переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень, не используя функцию Math.pow().
//AT = 15 min, ET = 70 min

let n = +prompt('Enter n','');
let randArray = [];
let randNumb;

for (let j = 0; j < n; j++) {
    randNumb = +(Math.random()).toFixed(2);
    randArray[j] = +(randNumb**5).toFixed(2);
}
    
console.log(randArray);

//third task. Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// a.	Добавьте в начало массива значение ‘Backbone.js’
// b.	Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// c.	Добавьте в массив значение ‘CommonJS’ вторым элементом
// d.	Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”
//AT = 10 min, ET = 13 min 

let frameworks = ['AngularJS', 'jQuery'];
frameworks.unshift('Backbone.js');
frameworks.push('ReactJS', 'Vue.js');
frameworks.splice(2, 0, 'CommonJS');
frameworks.splice(frameworks.indexOf('jQuery'), 1);
alert( 'jQuery здесь лишний' + '\n' + frameworks);

//fourth task. Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’. 
//Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью любых методов массива (indexOf, splice ...). Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.
//AT = 20 min, ET = 14 min

let str = 'Как однажды Жак звонарь сломал фонарь головой';
let strArray = str.split(' ');
strArray.splice(4, 0, strArray.pop());
strArray = strArray.join(' ');
alert(str + '\n' + strArray);

//fifth task. Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей. 
//С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран. 
//Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.
//AT = 15 min, ET = 14 min

let person = {
    name: 'Nick',
    age: 25,
    proffession: 'web-developer'
};

let uKey = prompt('What property are you looking for?','');

if(uKey in person) {
    alert('Your person has your property!');
} else {
    alert('We don\'t have this property but we will add it');
    let uProp = prompt('Let\'s name our value','');
    person[uKey] = uProp;
}

for (let key in person) {
    alert( "Key: " + key + "\nvalue: " + person[key] );
}

//sixth task. 6.	Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.
//AT = 10 min, ET = 60 min

person.gadget = new Object();

while(true) {
    uKey = prompt('Enter properties of your gadget','');
    if(uKey == null) break;
    person.gadget[uKey] = prompt('Enter value of your properties','');
}

console.log(person.gadget);

//seventh task. 7.	Создайте объект dates для хранения дат. Первая дата – текущая, new Date. Вторая дата – текущая дата минус 365 дней. 
//Из prompt читается дата в формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат объекта dates.
//AT = 20 MIN, ET = much time

let dates = new Object();
dates.now = new Date();
let year = 365*(24*60*60*1000);
dates.yearAgo = new Date(dates['now'] - year);
console.log(dates);
let askDate = prompt('Enter date yyyy-mm-dd','');

function formatDate(date) {

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    let yy = date.getFullYear();
    if (yy < 10) yy = '0' + yy;
  
    return yy + '-' + mm + '-' + dd;
}

dates.now = formatDate(dates.now);
dates.yearAgo = formatDate(dates.yearAgo);

if((askDate < dates.now) && (dates.yearAgo < askDate)) {
    alert('You are in range');
} else {
    alert('You are not in range');
}

//eighth task. Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте в конец созданного массива. 
//После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.
//AT = 15 min, ET = 10 min

let arr = [];
let n = +prompt('How many values do you want?','');
let sum = 0;

for(let i = 0; i < n; i++) {
    let askValue = prompt('Enter a value','');
    arr[i]= askValue;
}
console.log(arr);

for(let j = 0; j < arr.length; j++){
    arr.sort();
    if(isFinite(arr[j]) == true) arr[j] = +arr[j];
    sum += arr[j];
}

alert(sum);

//ninth task. Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения.
//AT = 15 min, ET = 27 min

let multiTable = []; 
let result1;

for (let t = 1; t < 10; t++) {
    multiTable[t-1] = [];
    for (let r = 1; r <= 10; r++) {
        result1 = (t * r);
        multiTable[t-1][r-1] =  t + ' * ' + r + ' = ' + result1;
    } 
}

console.log(multiTable);

//tenth task. Создайте структуру данных, полностью описывающую html-разметку картинки.
//AT = 10 min, ET = 5 min

let markup = {
    "tag":"img",
    "src":"https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    "alt":"",
    "style":"border: 1px solid #ccc",
    "width":"200"
}
let str = JSON.stringify(markup);
console.log(str);