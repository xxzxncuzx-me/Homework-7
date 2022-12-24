const userYear = prompt("Введіть свій рік народження");
const userCity = prompt("Введіть місто, в якому Ви проживаш");
const userSport = prompt("Введіть Ваш улюблений вид спорту");

let cityResult = '';
let yearResult = '';
let sportResult = '';

const today = new Date();

if (userYear === null || userYear === '') {
    yearResult = 'Шкода, що Ви не захотіли ввести свій рік народження';
} else if (1900 > Number(userYear) || Number(userYear) > 2020 || isNaN(userYear)) {
    yearResult = 'Ви ввели невалідне число!';
} else {
    yearResult = `Вам ${today.getFullYear() - Number(userYear)} років`;
}

if (userCity === null || userCity === '') {
    cityResult = 'Шкода, що Ви не захотіли ввести своє місто проживання';
} else if (!isNaN(userCity)) {
    cityResult = 'Такого міста не існує!';
} else if (userCity === 'Київ') {
    cityResult = 'Ви живете у столиці України';
} else if (userCity === 'Вашингтон') {
    cityResult = 'Ви живете у столиці США';
} else if (userCity === 'Лондон') {
    cityResult = 'Ви живете у столиці Англії';
} else {
    cityResult = `Ви живете у місті ${userCity}`;
}


if (userSport === null || userSport === '') {
    sportResult = 'Шкода, що Ви не захотіли ввести свій улюблений вид спорту';
} else if (userSport === 'баскетбол') {
    sportResult = 'Круто! Хочете стати як Майкл Джордан?';
} else if (userSport === 'футбол') {
    sportResult = 'Круто! Хочете стати як Кріштіану Роналду?';
} else if (userSport === 'бокс') {
    sportResult = 'Круто! Хочете стати як Олександр Усик?';
} else {
    sportResult = 'Я не знаю такого виду спорту :(';
}


alert(`${yearResult}
${cityResult}
${sportResult}`);