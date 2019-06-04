"use strict";

let money = prompt("Ваш Бюджет в месяц");
let time = prompt("Введите дату в формате YYYY-MM-DD");


let appData = {
    Moneys: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "",
    income: [],
    saving: false
};

for (let i=0; i < 2; i++) {
    appData.expenses[prompt("Введите обязательную статью расходов в этом месяце")] =
    +prompt("Во сколько обойдется?");
}
alert("Ваш бюджет: " + money/30);
console.log(appData.expenses);