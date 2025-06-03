const fairCookiesDistribution = (cookies, k) => {
  let minDistribution = Infinity;

  const backtrack = (index, subset) => {
    if (index > cookies.length) return;

    if (index === cookies.length) {
      const maxValue = Math.max(...subset);
      minDistribution = Math.min(minDistribution, maxValue);
      return;
    }

    const currValue = cookies[index];

    for (let i = 0; i < k; i++) {
      subset[i] += currValue;
      backtrack(index + 1, subset);
      subset[i] -= currValue;
    }
  };

  backtrack(0, new Array(k).fill(0));

  return minDistribution;
};

console.log(fairCookiesDistribution([8, 15, 10, 20, 8], 2));
