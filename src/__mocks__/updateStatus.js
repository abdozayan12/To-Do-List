const task = {
  description: 'hello completed',
  completed: false,
  index: 0,
};

const updateStatus = () => {
  task.completed = true;

  return task.completed;
};

export default updateStatus;