const groupThePeople = (groupSizes) => {
  let map = new Map();
  for (let index = 0; index < groupSizes.length; index++) {
    if (map.has(groupSizes[index])) {
      map.get(groupSizes[index]).push(index);
    } else {
      map.set(groupSizes[index], [index]);
    }
  }
  let collection = [];
  for (let [key, value] of map) {
    // local grouping algorithm
    let stack = [];
    let groupCount = value.length / Number(key);
    let localLength = Number(key);
    for (let end = 0; end < value.length; end++) {
      if (localLength === 0) {
        groupCount--;
        collection.push(stack);
        stack = [];
        localLength = Number(key);
      }
      stack.push(value[end]);
      if (end === value.length - 1) collection.push(stack);
      localLength--;

      if (groupCount === 0) break;
    }
  }
  return collection;
};
//console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
