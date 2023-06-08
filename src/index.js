import './style.css';
import tasks, { submit, listContainer } from './modules/tasks.js';

window.onload = tasks.displayTasks();

submit.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    tasks.addTask();
    submit.value = '';
    listContainer.innerHTML = '';
    tasks.displayTasks();
  }
});