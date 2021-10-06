'use strict';
alert("Привет, куратор!");
console.log("Привет, куратор!");


let title = prompt('Как называется ваш проект?', "project");
let screens = prompt('Какие типы экранов нужно разработать?', "ПРОСТЫЕ, СЛОЖНЫЕ, ИНТЕРАКТИВНЫЕ");
let screenPrice = 290;
let rollback = 99;
let fullPrice = 10000;
let adaptive = true;
screenPrice = +prompt('Сколько будет стоить данная работа?', "290");
adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
fullPrice = (screenPrice + servicePrice1 + servicePrice2);
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)));

const showTypeOf = function(a) {
    console.log(a, typeof a)
}

const getRollbackMessage = function(price) {

    if (price >= 30000) {
        return 'Даем скидку в 10%'
    }
    else if (15000 <= price && price < 30000) {
        return 'Даем скидку в 5%'
    }
    else if (15000 > price && price >= 0) {
        return 'Скидка не предусмотрена'
    }
    else if (price < 0) {
        return 'Что то пошло не так'
    }
}


const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
}


function getFullPrice() {
    return screenPrice + allServicePrices;
}


const getTitle = function(title) {
    if (!title) return title;

    return title[0].toUpperCase() + title.slice(1);
}


const getServicePercentPrices = function() {
    return Math.ceil(fullPrice - (fullPrice * (rollback/100)))
}



showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
getAllServicePrices()
let allServicePrices = getAllServicePrices();
getFullPrice();
fullPrice = getFullPrice();
getTitle()
title = getTitle()
getServicePercentPrices()
servicePercentPrice = getServicePercentPrices();


console.log(screens.length);
console.log('Стоимость верстки экранов' + " " + screenPrice + " " + 'рублей');
console.log(getRollbackMessage(fullPrice));
console.log(getAllServicePrices());
console.log(getTitle());
console.log(getServicePercentPrices());
console.log(screens.split(" "));