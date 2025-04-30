const generateParenthesis = (n) => {
  let result = [];
  const dfs = (open, close, subset) => {
    if (open === n && close === n) {
      return result.push(subset.join('')); // adds the subset after joining the brackets
    }
    if (open < n) {
      subset.push('(');
      dfs(open + 1, close, subset);
      subset.pop();
    }
    if (close < open) {
      subset.push(')');
      dfs(open, close + 1, subset);
      subset.pop();
    }
  };
  dfs(0, 0, []);
  return result;
};

console.log(generateParenthesis(3));
