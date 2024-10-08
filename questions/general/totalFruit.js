const totalFruit = (fruits) => {
  let map = new Map();
  let end = 0;
  let start = 0;
  let size = 0;
  while (end < fruits.length) {
    const currFruit = fruits[end];
    map.set(currFruit, (map.get(currFruit) || 0) + 1);
    while (map.size > 2 && start < fruits.length) {
      if (map.has(fruits[start])) {
        map.set(fruits[start], map.get(fruits[start]) - 1);
      }
      if (map.get(fruits[start]) === 0) {
        map.delete(fruits[start]);
      }
      start++;
    }
    // since its only two values it can be taken directly from map
    size = Math.max(
      size,
      [...map.values()].reduce((a, b) => a + b, 0)
    );
    end++;
  }
  return size;
};

// longest substring with two distinct elements
//console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));
