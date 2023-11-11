const minimumCompleteRounds = (tasks) => {
  tasks.sort((a, b) => a - b);
  let counter = 0;
  let taskMap = new Map();
  for (let index in tasks) {
    const task = tasks[index];
    taskMap.has(task)
      ? taskMap.set(task, taskMap.get(task) + 1)
      : taskMap.set(task, 1);
  }
  let taskValues = [...taskMap.values()];
  let checkEdge = taskValues.some((val) => val === 1);
  if (checkEdge) return -1;
  for (let [key, value] of taskMap) {
    if (value % 3 === 0) {
      counter += value / 3;
    } else if (value === 2) {
      counter++;
    } else {
      const modVal = Math.floor(value / 3);
      counter += modVal + 1;
    }
  }
  return counter;
};

//console.log(minimumCompleteRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4]));
