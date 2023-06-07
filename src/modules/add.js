export const tasks = JSON.parse(localStorage.getItem('array')) || [];

export const add = () => {
  const input = document.querySelector('.addinput');
  const value1 = input.value.trim();
  if ((value1.length !== 0)) {
    const obj = {
      description: `${input.value}`,
      completed: false,
      index: tasks.length + 1,
    };
    tasks.push(obj);
    localStorage.setItem('array', JSON.stringify(tasks));
  }
};