'use strict';
alert("Привет, куратор!");
console.log("Привет, куратор!");


let title = 'Мое второе дз';
let screens = 'ПРОСТЫЕ, СЛОЖНЫЕ, ИНТЕРАКТИВНЫЕ';
let screenPrice = 290;
let rollback = 99;
let fullPrice = 10000;
let adaptive = true;


console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов' + " " + screenPrice + " " + 'рублей');
console.log('Стоимость разработки сайта' + " "  + fullPrice + " " + 'рублей');
console.log(screens.toLowerCase());
console.log(screens.toLowerCase().split(" "));
console.log(fullPrice * (rollback/100));

title = prompt('Как называется ваш проект?', "Мое второе дз");
screens = prompt('Какие типы экранов нужно разработать?', "ПРОСТЫЕ, СЛОЖНЫЕ, ИНТЕРАКТИВНЫЕ");
screenPrice = +prompt('Сколько будет стоить данная работа?', "290");
adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
    console.log(service1);
let servicePrice1 = +prompt('Сколько это будет стоить?');
    console.log(servicePrice1);
let service2 = prompt('Какой дополнительный тип услуги нужен?');
    console.log(service2);
let servicePrice2 = +prompt('Сколько это будет стоить?');
    console.log(servicePrice2);
fullPrice = (screenPrice + servicePrice1 + servicePrice2);
    console.log(fullPrice);

let servicePercentPrice = (screenPrice + servicePrice1 + servicePrice2 - 10000);
    console.log(servicePercentPrice);

if (fullPrice > 30000) {
    console.log('Даем скидку в 10%')
}
if (15000 < fullPrice < 30000) {
    console.log('Даем скидку в 5%')
}
if (15000 > fullPrice > 0) {
    console.log('Скидка не предусмотрена')
}
if (fullPrice < 0) {
    console.log('Что то пошло не так')
}