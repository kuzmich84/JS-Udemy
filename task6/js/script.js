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



