const peopleIndexes = (favoriteCompanies) => {
  console.log(favoriteCompanies);
  // using map to record indexes
  let coMap = new Map();
  for (let index = 0; index < favoriteCompanies.length; index++) {
    let favRow = favoriteCompanies[index];
    const mainIndex = index;
    for (let subIndex = 0; subIndex < favRow.length; subIndex++) {
      const company = favRow[subIndex];
      if (coMap.has(company)) {
        coMap.get(company).push(mainIndex);
        break;
      } else {
        coMap.set(company, [mainIndex]);
      }
    }
  }
  console.log(coMap);
};

console.log(
  peopleIndexes([
    ['leetcode', 'google', 'facebook'],
    ['google', 'microsoft'],
    ['google', 'facebook'],
    ['google'],
    ['amazon'],
  ])
);
