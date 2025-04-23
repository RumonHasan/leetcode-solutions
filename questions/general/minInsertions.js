const minInsertions = (s) => {
  let openCount = 0;
  let closeCount = 0;
  const OPEN = '(';

  for (let i = 0; i < s.length; i++) {
    const currBracket = s[i];
    if (currBracket === OPEN) {
      openCount++;
    } else {
      if (openCount > 0) {
        openCount--;
      } else {
        closeCount++;
      }
    }
  }
  closeCount += openCount;
  return closeCount;
};

console.log(minInsertions('))())('));
