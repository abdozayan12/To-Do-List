import saveData from './save.js';

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
      singleTask += `<li class="task-item draggable" draggable="true" id='${task.index}'>
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

// Drag and Drop functionality

let dragStartIndex;
let dragOverIndex;

function dragStart(event) {
  dragStartIndex = parseInt(event.target.id, 10);
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/html', this.innerHTML);
  this.classList.add('dragging');
}

function dragEnter() {
  this.classList.add('over');
}

function dragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
  const bounding = this.getBoundingClientRect();
  const offset = bounding.y + bounding.height / 2;
  if (event.clientY - offset > 0) {
    this.style.borderBottom = 'solid 2px red';
    this.style.borderTop = '';
  } else {
    this.style.borderTop = 'solid 2px red';
    this.style.borderBottom = '';
  }
}

function dragLeave() {
  this.classList.remove('over');
  this.style.borderTop = '';
  this.style.borderBottom = '';
}

function dragDrop(event) {
  event.preventDefault();
  const dropIndex = parseInt(this.id, 10);
  dragOverIndex = dropIndex;

  if (dragStartIndex === dragOverIndex) {
    return;
  }

  const draggedTask = tasksList.find((task) => task.index === dragStartIndex);
  const draggedTaskIndex = tasksList.findIndex((task) => task.index === dragStartIndex);
  const dropTaskIndex = tasksList.findIndex((task) => task.index === dragOverIndex);

  tasksList.splice(draggedTaskIndex, 1);
  tasksList.splice(dropTaskIndex, 0, draggedTask);

  saveData(tasksList);
  Tasks.displayTasks();
}

function dragEnd() {
  this.classList.remove('over');
  this.style.borderTop = '';
  this.style.borderBottom = '';
  const draggableItems = document.querySelectorAll('.draggable');
  draggableItems.forEach((item) => {
    item.classList.remove('dragging');
  });
}

function addDragAndDropListeners() {
  const draggableItems = document.querySelectorAll('.draggable');
  draggableItems.forEach((item) => {
    item.removeEventListener('dragstart', dragStart);
    item.removeEventListener('dragenter', dragEnter);
    item.removeEventListener('dragover', dragOver);
    item.removeEventListener('dragleave', dragLeave);
    item.removeEventListener('drop', dragDrop);
    item.removeEventListener('dragend', dragEnd);

    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragleave', dragLeave);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragend', dragEnd);
  });
}

export {
  submit, listContainer, tasksList, addDragAndDropListeners,
};