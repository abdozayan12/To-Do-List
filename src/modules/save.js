const saveData = (d) => {
  localStorage.setItem('todo', JSON.stringify(d));
};
export default saveData;