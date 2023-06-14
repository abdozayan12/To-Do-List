import saveData from './save.js';
import { tasksList } from './tasks.js';

export default class TaskStatus {
    static updateStatus = () => {
      const checkBox = document.querySelectorAll('.chcek');

      checkBox.forEach((ch, i) => {
        ch.addEventListener('change', () => {
          if (!tasksList[i].completed) {
            tasksList[i].completed = true;
            saveData(tasksList);
            ch.nextElementSibling.classList.add('completed');
          } else {
            tasksList[i].completed = false;
            saveData(tasksList);
            ch.nextElementSibling.classList.remove('completed');
          }
        });
      });
    };

    static clearCompleted = () => {
      const clrCompleted = document.querySelector('.clrBtn');
      clrCompleted.addEventListener('click', () => {
        const notCompleted = tasksList.filter((task) => task.completed !== true);
        notCompleted.forEach((e, i) => {
          e.index = i + 1;
        });
        saveData(notCompleted);
        window.location.reload();
      });
    }
}
