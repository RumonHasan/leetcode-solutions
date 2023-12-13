var peopleIndexes = function (favoriteCompanies) {
  const intuitiveButSlowApproach = () => {
    const isSubsetCheck = (setOne, setTwo) => {
      let set = new Set(setTwo);
      return setOne.every((company) => set.has(company));
    };
    let indexes = [];
    for (let index = 0; index < favoriteCompanies.length; index++) {
      let companySetOne = favoriteCompanies[index];
      let counter = 0;
      for (let subIndex = 0; subIndex < favoriteCompanies.length; subIndex++) {
        let companySetTwo = favoriteCompanies[subIndex];
        if (subIndex !== index) {
          if (!isSubsetCheck(companySetOne, companySetTwo)) {
            counter++;
          }
        }
      }
      if (counter === favoriteCompanies.length - 1) {
        indexes.push(index);
      }
    }
    return indexes;
  };
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
