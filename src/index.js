import './style.css';
import tasks, { submit, listContainer } from './modules/tasks.js';
import TaskStatus from './modules/Status.js';

window.onload = tasks.displayTasks();
TaskStatus.updateStatus();
TaskStatus.clearCompleted();

const refersh = document.querySelector('.refresh');
refersh.addEventListener('click', () => {
  window.location.reload();
});

submit.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    tasks.addTask();
    submit.value = '';
    listContainer.innerHTML = '';
    tasks.displayTasks();
    TaskStatus.updateStatus();
  }
});