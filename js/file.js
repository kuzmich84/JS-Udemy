"use strict";
let money;
let time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let
        a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");
      if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null && a !== "" && b !== "" && a.length < 50) {
        appData.expenses[a] = b;
      } else {
        i = i - 1;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = appData.budget / 30;
    alert('Бюджет за один день: ' + appData.moneyPerDay.toFixed());
  },
  detectLevel: function () {
    if (appData.moneyPerDay <= 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSaving: function () {
    if (appData.savings) {
      let
        save = +prompt("Какова сумма накоплений?", ""),
        percent = +prompt("Под какой процент?", "");
      appData.monthInCome = save / 100 / 12 * percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthInCome.toFixed());
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i <= 3; i++) {
      let nonExpenses = prompt("Статья необязательных расходов?", "");
      if (typeof (nonExpenses) === "string" && typeof (nonExpenses) != null && nonExpenses.length < 50) {
        appData.optionalExpenses[i] = nonExpenses;
      } else {
        i = i - 1;
      }
    }
  },
  chooseIncome: function () {
    let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

    while (items === "" || items === null) {
      alert("вы ввели не строку");
      items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
      if (items.match(/^[-\+]?\d+/) !== null) {
        alert("вы ввели не строку");
        items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
      }
    }
    appData.income = items.split(", ");
    appData.income.push(prompt("Может что-то еще?"));
    appData.income.sort();
    appData.income.forEach(function (item, i) {
      alert((i + 1) + ": " + item);
    });
  }
};

appData.chooseIncome();


for (let key in appData) {
  console.log("Наша программа включает в себя данные: " + key + appData[key]);
}


