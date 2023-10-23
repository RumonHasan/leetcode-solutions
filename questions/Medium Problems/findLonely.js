const findLonely = (nums) => {
  const intuitiveApproach = () => {
    let map = new Map();
    for (let index in nums) {
      const number = nums[index];
      map.has(number)
        ? map.set(number, map.get(number) + 1)
        : map.set(number, 1);
    }
    let collection = [];
    for (let [key, value] of map) {
      if (value === 1) {
        const added = Number(key) + 1;
        const decreased = Number(key) - 1;
        if (map.has(added) || map.has(decreased)) {
          continue;
        }
        collection.push(Number(key));
      }
    }
    return collection;
  };
  //console.log(intuitiveApproach());
};

//console.log(findLonely([62, 35, 59, 55, 84, 61, 38, 87, 55, 82]));
