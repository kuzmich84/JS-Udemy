'use strict';
let money;
let time;

money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

for (let i = 0; i < 2; i++) {
  let
    a = prompt("Введите обязательную статью расходов в этом месяце"),
    b = prompt("Во сколько обойдется?");
  appData.expenses[a] = b;

  if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null && a !== "" && b !== "" && a.length < 50) {
    appData.moneyPerDay = appData.budget / 30;
  } else {
    alert("Необходимо ввести все данные");
  }
}

// let count = 0;
// while(count < 2){
//   let
//     a = prompt("Введите обязательную статью расходов в этом месяце"),
//     b = prompt("Во сколько обойдется?");
//     appData.expenses[a] = b;
//     count++;
//
//   if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null && a !== "" && b !== "" && a.length < 50) {
//     appData.moneyPerDay = appData.budget / 30;
//   } else {
//     alert("Необходимо ввести все данные");
//   }
// }

// let count = 0;
//
// do{
//   let
//     a = prompt("Введите обязательную статью расходов в этом месяце"),
//     b = prompt("Во сколько обойдется?");
//   appData.expenses[a] = b;
//   count++;
//
//   if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null && a !== "" && b !== "" && a.length < 50) {
//     appData.moneyPerDay = appData.budget / 30;
//   } else {
//     alert("Необходимо ввести все данные");
//   }
//
// }while(count < 2);

console.log(appData);
alert('Бюджет за один день: ' + appData.moneyPerDay);
if(appData.moneyPerDay <= 100){
  console.log("Минимальный уровень достатка");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
  console.log("Средний уровень достатка");
}else if(appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else{
  console.log("Произошла ошибка");
}

