import './style.css';

import { tasks, add } from './modules/add.js';

import remove from './modules/remove.js';

import status from './modules/status.js';

import {
  edit, outclick,
} from './modules/edite.js';

function removecompleted() {
  const completedarray = tasks.filter((tasks) => tasks.completed === true);
  for (let i = 0; i < completedarray.length; i += 1) {
    const index = (completedarray[i].index - 1) - i;
    tasks.splice(index, 1);
  }
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  localStorage.setItem('array', JSON.stringify(tasks));
}

const displaytasks = () => {
  const list = document.querySelector('.list');
  let items = '';
  for (let i = 0; i < tasks.length; i += 1) {
    items += `<div id="style" class="div"><div class="listdiv"><input class="check" type="checkbox" name="${tasks[i].description}"><input class="listlabel style" for="${tasks[i].description}" value="${tasks[i].description}"></div><button class="jvicon delete"><i class="fa-solid fa-ellipsis-vertical" style="color: #acadaf"></i></button><button class="hide delete"><i class="fa-solid fa-trash-can"></i></button></div>`;
  }
  list.innerHTML = items;
  for (let i = 0; i < tasks.length; i += 1) {
    const icon = document.querySelectorAll('.jvicon');
    const hide = document.querySelectorAll('.hide');
    hide[i].addEventListener('click', remove);
    const input = document.querySelectorAll('.listlabel');
    input[i].addEventListener('keyup', edit);
    input[i].addEventListener('click', outclick);
    const checkbox = document.querySelectorAll('.check');
    checkbox[i].addEventListener('click', status);
    if (tasks[i].completed === true) {
      input[i].style.textDecoration = 'line-through';
      input[i].style.color = 'rgba(139, 134, 134, 0.8)';
      input[i].disabled = true;
      icon[i].style.display = 'none';
      hide[i].style.display = 'block';
      checkbox[i].checked = true;
    } else {
      input[i].style.textDecoration = 'none';
      input[i].style.color = 'inherit';
      input[i].disabled = false;
      icon[i].style.display = 'block';
      hide[i].style.display = 'none';
      checkbox[i].checked = false;
    }
  }
  const button = document.querySelector('.button');
  button.addEventListener('click', removecompleted);
  button.addEventListener('click', displaytasks);
};

const addbutton = document.querySelector('.spanicon');
const form = document.querySelector('.form');
addbutton.addEventListener('click', add);
addbutton.addEventListener('click', displaytasks);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  add();
  displaytasks();
  const input = document.querySelector('.addinput');
  input.value = '';
});

displaytasks();