import { tasks } from './add.js';

export default function status() {
  const checkbox = document.querySelectorAll('.check');
  const index = Array.from(checkbox).indexOf(this);
  const input = document.querySelectorAll('.listlabel');
  const hide = document.querySelectorAll('.hide');
  const icon = document.querySelectorAll('.jvicon');
  let value = false;
  setTimeout(() => {
    if (this.checked === true) {
      value = true;
      tasks[index].completed = value;
      input[index].style.textDecoration = 'line-through';
      input[index].style.color = 'rgba(139, 134, 134, 0.8)';
      input[index].disabled = true;
      icon[index].style.display = 'none';
      hide[index].style.display = 'block';
      localStorage.setItem('array', JSON.stringify(tasks));
    } else {
      tasks[index].completed = value;
      input[index].style.textDecoration = 'none';
      input[index].style.color = 'inherit';
      input[index].disabled = false;
      icon[index].style.display = 'block';
      hide[index].style.display = 'none';
      localStorage.setItem('array', JSON.stringify(tasks));
    }
  }, 100);
}