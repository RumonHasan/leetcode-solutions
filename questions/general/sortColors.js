const sortColors = (nums) => {
  let map = new Map();
  let colors = [0, 1, 2];
  let colorIndex = 0;
  let end = 0;

  for (let color of nums) {
    map.set(color, (map.get(color) || 0) + 1);
  }

  while (end < nums.length) {
    const colorKey = colors[colorIndex];
    while (map.has(colorKey)) {
      nums[end] = colorKey;
      map.set(colorKey, map.get(colorKey) - 1);
      if (map.get(colorKey) === 0) {
        map.delete(colorKey);
      }
      end++;
    }
    colorIndex++;
  }
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
