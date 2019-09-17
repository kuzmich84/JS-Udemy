// Восстановить порядок в меню, добавить пятый пункт
// //
// // ·        Заменить картинку заднего фона на другую из папки img
// //
// // ·        Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
// //
// // ·        Удалить рекламу со страницы
// //
// // ·        Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
// //
// // 3) Проверить, чтобы все работало и не было ошибок в консоли

let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu-item');
let li = document.createElement('li');
let title = document.querySelector('.title');
let column = document.querySelector('.adv');


menuItem[1].textContent = 'Второй пункт';
menuItem[2].textContent = 'Третий пунк';

li.classList.add('menu-item');
li.textContent = 'Пятый пункт';

menu.insertBefore(li, menuItem[4]);

document.body.style.background = 'url(img/apple_true.jpg)';

title.textContent = 'Мы продаем только подлинную технику Apple';

column.remove();

let question = prompt('Как вы относитель к технике Apple?');
let answer = document.querySelector('.prompt');
answer.textContent = 'Ваш ответ: ' + question;



