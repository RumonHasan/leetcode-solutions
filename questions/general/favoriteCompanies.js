const favoriteCompanies = (favoriteCompanies) => {
  // checking for found subsets
  let indices = [];

  for (let i = 0; i < favoriteCompanies.length; i++) {
    let subsetCheck = false;
    for (let j = 0; j < favoriteCompanies.length; j++) {
      if (i !== j) {
        let subSet = new Set([...favoriteCompanies[j]]);
        const check = favoriteCompanies[i].every((company) =>
          subSet.has(company)
        );
        if (check) {
          subsetCheck = check;
          break;
        }
      }
    }
    if (!subsetCheck) {
      indices.push(i);
    }
  }

  return indices.sort((a, b) => a - b);
};

console.log(
  favoriteCompanies([
    ['leetcode', 'google', 'facebook'],
    ['google', 'microsoft'],
    ['google', 'facebook'],
    ['google'],
    ['amazon'],
  ])
);
