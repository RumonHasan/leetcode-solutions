const validStrings = (n) => {
  let result = [];
  const dfs = (currSub) => {
    if (currSub.length === n) {
      result.push(currSub);
      return;
    }
    // include 1
    dfs(currSub + '1');
    if (currSub[currSub.length - 1] !== '0') {
      dfs(currSub + '0');
    }
  };
  dfs('');
  return result;
};

console.log(validStrings(3));



