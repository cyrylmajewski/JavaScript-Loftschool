/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер
 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

document.addEventListener('mousemove', (e) => {
});

export function createDiv() {
    const newDiv = document.createElement("div");
    newDiv.height = (Math.random() * 100);
    newDiv.width = (Math.random() * 100);
    newDiv.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255} )`;
    newDiv.className = '.draggable-div';
    newDiv.top = Math.random() * 200;
    newDiv.bottom = Math.random() * 200;
    newDiv.left = Math.random() * 200;
    newDiv.right = Math.random() * 200;
    homeworkContainer.appendChild(newDiv);
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
    createDiv();
});
