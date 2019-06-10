"use strict";

let money = +prompt(10,"Ваш Бюджет в месяц");
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
    let a = prompt("Введите обязательную статью расходов в этом месяце"), 
        b = parseInt(prompt("Во сколько обойдется?"));
    console.log(b);
    if ((typeof(a) != null) && (typeof(b) != null) && (a != "") && (b != "")) {
        appData.expenses[a] = b;
    } else {
        alert("Повторите ввод");
        i--;
    }

}
appData.moneyPerDay = appData.Moneys / 30;

alert("Ваш бюджет: " + appData.moneyPerDay);
console.log(appData.expenses);