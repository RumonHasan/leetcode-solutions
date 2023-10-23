const dividePlayers = (skill) => {
  const intuitiveApproach = () => {
    let sortedSkill = skill.sort((a, b) => a - b);
    let collection = [];
    for (let index = 0; index < sortedSkill.length / 2; index++) {
      collection.push([
        sortedSkill[index],
        sortedSkill[sortedSkill.length - 1 - index],
      ]);
    }
    if (collection.length === 1) {
      return collection[0][0] * collection[0][1];
    }
    let sum = collection[0][0] + collection[0][1];
    for (let index = 1; index < collection.length; index++) {
      const localSum = collection[index][0] + collection[index][1];
      if (localSum !== sum) {
        return -1;
      }
    }
    let totalSum = 0;
    for (let index = 0; index < collection.length; index++) {
      const prod = collection[index][0] * collection[index][1];
      totalSum += prod;
    }
    return totalSum;
  };
};

//console.log(dividePlayers([3, 2, 5, 1, 3, 4]));
