const combine = (n, k) => {
  let collection = [];

  // main dfs function to create subsets
  const dfs = (start, subset) => {
    // base case condition
    if (subset.length === k) {
      collection.push([...subset]);
      return;
    }

    for (let i = start; i <= n; i++) {
      const num = i;
      subset.push(num);
      dfs(i + 1, subset);
      subset.pop(); // removing the last number in subset
    }
  };

  // starting from 1 as per condition
  dfs(1, []);

  return collection;
};

// using dfs to generate all the combinations for subset
console.log(combine(4, 2));
