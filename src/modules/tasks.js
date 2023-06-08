import saveData from './saveData.js';

const tasksList = JSON.parse(localStorage.getItem('todo')) || [];

const listContainer = document.querySelector('.tasks-container');
const submit = document.querySelector('#addDo');

export default class Tasks {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  static addTask = () => {
    const task = new Tasks(submit.value, false, tasksList.length + 1);
    if (submit.value !== '') {
      tasksList.push(task);
      saveData(tasksList);
    }
  }

  static displayTasks = () => {
    let singleTask = '';
    tasksList.forEach((task) => {
      singleTask += `<li class="task-item" id='${task.index}'>
                      <div class="checkList">
                       <input type="checkbox" name="check" class="chcek" ${task.completed === true ? 'checked' : ''}>
                       <!-- put the description inside input so the user can edit it -->
                       <input tabindex="-1" class='inputDesc ${!task.completed ? '' : 'completed'}' value="${task.description}">
                        </div>
                      <i class="fa-solid fa-trash delete"></i>
                  </li>`;
      listContainer.innerHTML = singleTask;
    });
    // Implement the delete task
    const delButton = document.querySelectorAll('.delete');
    delButton.forEach((delBtn, i) => {
      delBtn.addEventListener('click', () => {
        Tasks.removeTask(i);
      });
    });

    // Implement the editing task
    const editTaskInput = document.querySelectorAll('.inputDesc');

    editTaskInput.forEach((editTask, i) => {
      editTask.addEventListener('change', () => {
        if (editTask.value) {
          tasksList[i].description = editTask.value;
          saveData(tasksList);
        }
      });
    });
  };

  static removeTask = (index) => {
    tasksList.splice(index, 1);

    tasksList.forEach((val, i) => {
      val.index = i + 1;
    });

    listContainer.innerHTML = '';
    saveData(tasksList);
    Tasks.displayTasks();
  }
}

export { submit, listContainer, tasksList };