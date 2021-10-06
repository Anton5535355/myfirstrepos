'use strict';

let title = prompt('Как называется ваш проект?', "project");
let screens = prompt('Какие типы экранов нужно разработать?', "ПРОСТЫЕ, СЛОЖНЫЕ, ИНТЕРАКТИВНЫЕ");
let screenPrice = 290;
let rollback = 99;
let fullPrice = 10000;
let adaptive = true;
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)));
let allServicePrices = getAllServicePrices()
screenPrice = +prompt('Сколько будет стоить данная работа?', "290");
adaptive = confirm('Нужен ли адаптив на сайте?');
fullPrice = (screenPrice + servicePrice1 + servicePrice2);
fullPrice = screenPrice + allServicePrices;
servicePercentPrice = getServicePercentPrices();


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


function getFullPrice(fullPrice) {
    function fullPrice(scP, aSP) {
        console.log(scP + aSP);
    }
    fullPrice(screenPrice, allServicePrices);
}


const getTitle = function() {
    if (!title) return title;

    return title[0].toUpperCase() + title.slice(1);
}


const getServicePercentPrices = function() {
    return fullPrice - (fullPrice * (rollback/100))
}


const showTypeOf = function(a) {
    console.log(a, typeof a)
}



showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
getAllServicePrices();
getFullPrice();
getTitle()
getServicePercentPrices()



console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(fullPrice);
console.log(servicePercentPrice);
console.log(getRollbackMessage(fullPrice));
console.log(screens.length);
console.log('Стоимость верстки экранов' + " " + screenPrice + " " + 'рублей');
console.log('Стоимость разработки сайта' + " "  + fullPrice + " " + 'рублей');
console.log(screens.toLowerCase());
console.log(screens.toLowerCase().split(" "));
console.log(fullPrice * (rollback/100));
console.log(getAllServicePrices());
console.log(getTitle());
console.log(getServicePercentPrices());
console.log(screens.split(" "));