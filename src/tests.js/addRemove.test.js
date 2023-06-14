import addTask from '../__mocks__/addTask.js';
import removeTask from '../__mocks__/removeTask.js';

describe('test add and remove functions', () => {
  test('Add one new item to the list', () => {
    // Arrange
    document.body.innerHTML = `<section class="listCont">
            <div class="title">Today's To Do <i class="fa-solid fa-arrows-rotate refresh"></i></div>
            <div id="add">
                <input type="text" placeholder="Add to your list..." name="addDo" id="addDo">
                <i class="fa-solid fa-arrow-turn-down enter"></i>
            </div>
            <ul class="tasks-container">
            </ul>
            <div class="clearCont">
                <button class="clrBtn">Clear all completed</button>
            </div>
        </section>`;
    // Act
    const add = document.querySelector('#addDo');
    add.value = 'hello';
    addTask();
    // Assert
    const list = document.querySelectorAll('.tasks-container li');
    expect(list).toHaveLength(1);
  });

  test('Remove one new item from the list', () => {
    // Arrange
    document.body.innerHTML = `<section class="listCont">
            <div class="title">Today's To Do <i class="fa-solid fa-arrows-rotate refresh"></i></div>
            <div id="add">
                <input type="text" placeholder="Add to your list..." name="addDo" id="addDo">
                <i class="fa-solid fa-arrow-turn-down enter"></i>
            </div>
            <ul class="tasks-container">
              <li>Hello Remove testing</li>
            </ul>
            <div class="clearCont">
                <button class="clrBtn">Clear all completed</button>
            </div>
        </section>`;
    // Act
    removeTask();
    // Assert
    const list = document.querySelectorAll('.tasks-container li');
    expect(list).toHaveLength(0);
  });
});
