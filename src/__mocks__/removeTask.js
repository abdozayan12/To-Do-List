import saveData from '../modules/save.js';
import { tasksList } from '../modules/tasks.js';

const removeTask = (index) => {
  const listContainer = document.querySelector('.tasks-container');
  tasksList.splice(index, 1);

  tasksList.forEach((val, i) => {
    val.index = i + 1;
  });

  listContainer.innerHTML = '';
  save(tasksList);
};

export default removeTask;