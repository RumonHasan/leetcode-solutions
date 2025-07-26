const wildcardMatching = (s, p) => {
  const cache = new Map();

  const dfs = (i, j) => {};

  return dfs(0, 0);
};

/**
 * Using dfs approach and memoization to record the boolean results in already visited paths
 */
console.log(wildcardMatching('abcdecb', 'a*c?b'));
