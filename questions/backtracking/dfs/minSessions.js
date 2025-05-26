const minSessions = (tasks, sessionTime) => {
  let minSessionLength = Infinity;

  const backtrack = (taskIndex, session) => {
    if (session.length >= minSessionLength) {
      // dont explore if the session length is bigger than the minSessionlength since the objective is to find the min Length
      return;
    }

    if (taskIndex === tasks.length) {
      // get the minimum length of current sessions when it reaches final index
      minSessionLength = Math.min(minSessionLength, session.length);
      return;
    }

    const currentTask = tasks[taskIndex];
    // checking whether existing sessions can have current task or not
    for (
      let currSessIndex = 0;
      currSessIndex < session.length;
      currSessIndex++
    ) {
      if (
        session.length &&
        session[currSessIndex] + currentTask <= sessionTime
      ) {
        session[currSessIndex] += currentTask;
        backtrack(taskIndex + 1, session);
        session[currSessIndex] -= currentTask; // removing the current session to backtrack
      }
    }

    // if the current session exceeds the limit then add a new session then backtrack by popping
    session.push(currentTask);
    backtrack(taskIndex + 1, session);
    session.pop();
  };

  backtrack(0, []);

  return minSessionLength;
};

/*
Basic backtrack approach where we keep track of the session array and perform backtrack in order to keep track 
of the current tasks that fit within the session array... then return the minimum final session length
*/

console.log(minSessions([3, 1, 3, 1, 1], 8));
