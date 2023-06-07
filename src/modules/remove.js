import { tasks } from './add.js';

export default function remove() {
  const button = document.querySelectorAll('.hide');
  const parent = document.querySelector('.list');
  const index = Array.from(button).indexOf(this);
  const remo = this.parentNode;
  parent.removeChild(remo);
  tasks.splice(index, 1);
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  localStorage.setItem('array', JSON.stringify(tasks));
}