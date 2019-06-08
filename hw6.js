'use strict'

//Создайте базовый класс Figure, который будет хранить координаты (x, y) и цвет фигуры. На базе класса Figure создайте три класса – Line, Rect, Circle, каждый из которых создает соответствующую фигуру. Пример создания экземпляров каждого класса и параметры фигур:
//Все три класса-наследника имеют метод draw для рисования фигуры с соответствующими параметрами (координаты, размеры, цвет).
//Фигуры рисуются на Canvas. Для рисования на канвасе создайте еще один класс – Canvas, в котором инициализируется элемент <canvas> из DOM. Класс Canvas – final, он не наследуется. В этом классе есть метод add, который и отображает созданные вами фигуры на странице. Обратите внимание, добавлять фигуры на канвас можно как по отдельности, так и списком.
//ET = 60 min, AT = 60 MIN

function Figure(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

function Line(x1, y1, x2, y2, color) {
    Figure.call(this, x1, y1, color);
    this.draw = function (ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = color;
        ctx.stroke();
    };
}

function zigZag(x, y, zigZagSpacing, count, color) {
    Figure.call(this, x, y, color);
    this.draw = function (ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        for(var i = 0; i < count; i++) {
            var likeX = this.x + ((i + 1) * zigZagSpacing);
            var likeY;
            if (i % 2 == 0) { // if n is even...
                likeY = this.y + 25;
            }
            else { // if n is odd...
                likeY = this.y;
            }
            ctx.lineTo(likeX, likeY);
        }
        ctx.strokeStyle = color;
        ctx.stroke();
    };
}

function Rect(x, y, w, h, color) {
    Figure.call(this, x, y, color);
    this.draw = function (ctx) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
        ctx.fill();
    };
}

function Circle(x, y, r, color) {
    Figure.call(this, x, y, color);
    this.draw = function (ctx) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.fillStyle = color;
        ctx.arc(x, y, r, 0, Math.PI*2);
        ctx.fill();
    };
}

var line = new Line(50, 250, 200, 200, 'grey');
var line1 = new Line(40, 240, 190, 190, 'grey');
var circle = new Circle(120, 120, 50, 'rgba(64,224,208, 0.5)');
var circle1 = new Circle(80, 80, 25, 'rgba(64,224,208, 0.5)');
var rect = new Rect(260, 130, 60, 120, 'rgba(64,224,208, 0.5)');
var rect1 = new Rect(280, 120, 100, 50, 'rgba(153,50,204, 0.5)');
var rect2 = new Rect(360, 150, 65, 40, 'rgba(218,165,32, 0.3)'); 
var zigZagLine = new zigZag(0, 0, 10, 50, 'red');

function Canvas(id) {
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext('2d');
    this.add = function (...figures) {
        figures.forEach(function(item) {
            item.draw(ctx)
        });
    }
}

var drawArea = new Canvas("canvasID");
drawArea.add(line);
drawArea.add(circle, rect, circle1);
drawArea.add(zigZagLine, line1, rect2, rect1);

