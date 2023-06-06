import './style.css';

const tasks = [{
  description: 'wash the dishes',
  completed: false,
  index: 1,
},
{
  description: 'project',
  completed: false,
  index: 2,
}];

const displaytasks = () => {
  const list = document.querySelector('.list');
  for (let i = 0; i < tasks.length; i += 1) {
    const div = document.createElement('div');
    div.classList.add('div');
    div.innerHTML = `<div class="listdiv"><input type="checkbox" name="${tasks[i].description}"><label class="listlabel" for="${tasks[i].description}">${tasks[i].description}</label></div><i class="fa-solid fa-ellipsis-vertical" style="color: #acadaf"></i>`;
    list.appendChild(div);
  }
};

displaytasks();