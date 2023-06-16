import editTask from '../__mocks__/editTask.js';
import updateStatus from '../__mocks__/updateStatus.js';
import clearCompleted from '../__mocks__/clearCompleted.js';

describe('Test edit and complete status ', () => {
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

  test('Edit description ..', () => {
    // Act - Call the edit function
    editTask();
    // Assert
    const list = document.querySelector('.tasks-container li').innerHTML;
    expect(list).toMatch('Matching test');
  });

  test('update the completed status ..', () => {
    // Act - Call the edit function
    const update = updateStatus();
    // Assert
    expect(update).toBeTruthy();
  });

  test('clear completed testing ..', () => {
    // Act - Call the edit function
    const clear = clearCompleted();
    // Assert - that 2 elements with complete:true are deleted
    expect(clear).toHaveLength(1);
  });
});
