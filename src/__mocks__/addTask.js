import Tasks, { tasksList } from '../modules/tasks.js';
import saveData from '../modules/save.js';

const addTask = () => {
  const add = document.getElementById('addDo');
  const listContainer = document.querySelector('.tasks-container');
  const task = new Tasks(add.value, false, tasksList.length + 1);
  if (add.value !== '') {
    tasksList.push(task);
    saveData(tasksList);
  }
  listContainer.innerHTML = `<li class="task-item" id='${task.index}'>
                      <div class="checkList">
                       <input type="checkbox" name="check" class="chcek" ${task.completed === true ? 'checked' : ''}>
                       <!-- put the description inside input so the user can edit it -->
                       <input tabindex="-1" class='inputDesc ${!task.completed ? '' : 'completed'}' value="${task.description}">
                        </div>
                      <i class="fa-solid fa-trash delete"></i>
                  </li>`;
  return task;
};

export default addTask;