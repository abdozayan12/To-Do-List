const clearCompleted = () => {
  const allTasks = [{
    description: 'complete',
    completed: false,
    index: 0,
  },
  {
    description: 'complete 1',
    completed: true,
    index: 1,
  },
  {
    description: 'completed 2',
    completed: true,
    index: 2,
  }];

  return allTasks.filter((task) => !task.completed);
};

export default clearCompleted;