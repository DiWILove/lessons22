//const salary = 250;
//const percent = 10;

//const sales = prompt("How Much?", 0);

//console.log(typeof  sales);

//const salaryTotal = 250 + +sales / 100 * percent;

//alert('Your income is' + salaryTotal);

//1 Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран.
//const num1 = +prompt("Num 1", 0);

//const sqr = num1 * num1;

//console.log(sqr);

//2 Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.
//const num1 = +prompt("Num 1", 0);
//const num2 = +prompt("Num 2", 0);

//const div = (num1 + num2) / 2;

//console.log(div);

//3 Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.
//const num1 = +prompt("Num 1", 0);

//const sqr = num1 * num1;

//console.log(sqr);

//4 Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили).
// 1 км = 0,621371 миль. Это значение укажите в коде как константу.
//const num1 = prompt("Num 1", 0);
///const mil = 0.621371;

//const con = (num1 * mil);

//console.log(con);

//5 Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.

//const num1 = +prompt("Num 1", 0);
//const num2 = +prompt("Num 2", 0);

//const sum = num1 + num2;
//const del = num1 - num2;
//const div = num1 / num2;
//const pr = num1 * num2;

//console.log(`Sum is ${sum}. Del is ${del}. Div is ${div}. Pr is ${pr}`);

//6 Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.

//const a = +prompt("a", 0);
//const b = +prompt("b", 0);

//const x = (0 - b) / a;

//console.log(x);

//7 Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня.

//const hov1 = +prompt("Введите часы", 0);
//const min1 = +prompt("Введите минуты", 0);

//const hov2 = 24 - hov1;
//const min2 = 60 - min1;

//console.log(`До следующего дня ${hov2} часов и ${min2} минут`);

//8 Запросите у пользователя трехзначное число и выведите вторую цифру этого числа.
// Для решения задачи используйте оператор % (остаток от деления).

// const num = +prompt("Введите число", 0);
//
// const num2 = Math.floor(num % 100 / 10);
//
// console.log(num2);

//9  Запросите у пользователя пятизначное число и переместите последнюю цифру в начало
// (из числа 12345 должно получиться число 51234).

// const num = +prompt("Введите число", 0);
//
// const num1 = num % 10;
// const num2 = Math.floor(num / 10);
//
// console.log(`${num1}${num2}`);

//10 Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.

// const num = +prompt("Введите число", 0);
//
// const num1 = (num / 100 *10) + 250;
//
// console.log(num1);

//1 Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!»

//const name = prompt("Name", 0);

//console.log(`Привет, ${name}`);

//2 Запросите у пользователя год его рождения, посчитайте,
// сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

//const year1 = 2019;
//const year2 = prompt("Year", 0);

//const age = year1 - year2;

//console.log(age);

//3 Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

//const a = +prompt("Сторона квадрата", 0);

//const p = a * 4;

//console.log(p);

//4 Запросите у пользователя радиус окружности и выведите площадь такой окружности.

//const pi = 3.14;
//const a = prompt("Введите радиус", 0);

//const s =  pi * (a * a);

//console.log(s);

//5 Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться.
// Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

//const s = +prompt("Расстояние (км)", 0);
//const t = +prompt("Время (час)", 0);

//const v = s / t;

//console.log(`Скорость ${v} км/час`);

//6 Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

//const eur1 = 0.8874;
//const usd = +prompt("Введите сумму в долларах", 0);

//const eur2 = usd * eur1;

//console.log(`${eur2} eur`);

//7 Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.

//const mb1 = 1024;
//const gb = +prompt("Введите GB", 0);

//const mb2 = (gb * mb1) / 820;
//x = Math.floor(mb2);

//console.log(`${x} файл(ов)`);

//8 Пользователь вводит сумму денег в кошельке и цену одной шоколадки.
// Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.

// const money1 = +prompt("Сумма денег в кошельке (грн)", 0);
// const money2 = +prompt("Цена одной шоколадки", 0);
//
// const money3 = Math.floor (money1 / money2) ;
// const money4 = money1 - (money3 * money2);
//
// console.log(`${money3} шоколадок и ${money4} грн сдачи`);

//9 Запросите у пользователя трехзначное число и выведите его задом наперед.
// Для решения задачи вам понадобится оператор % (остаток от деления).

// const num = +prompt("Введите число", 0);
//
// const num1 = num % 10;
// const num2 = Math.floor(num % 100 / 10);
// const num3 = Math.floor(num / 100);
//
// console.log(`${num1}${num2}${num3}`);
//
//10 Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых.
// Вывести сумму начисленных процентов.

// const sum = +prompt("Введите сумму", 0);
//
// const x = (sum * 5 / 100) * 2 / 12;
//
// console.log(x);





