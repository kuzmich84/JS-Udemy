'use strict';
let money;
let time;

money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

let appData ={
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses:{},
  income:[],
  savings: false
};
let
expens = prompt("Введите обязательную статью расходов в этом месяце"),
howMuch = prompt("Во сколько обойдется?"),
expens1 = prompt("Введите обязательную статью расходов в этом месяце"),
howMuch2 = prompt("Во сколько обойдется?");

appData.expenses.expens = howMuch;
appData.expenses.expens1 = howMuch2;

alert('Бюджет за один день: ' + appData.budget / 30);






