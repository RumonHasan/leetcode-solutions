const interchangeRects = (rectangles) => {
  let map = new Map();
  for (let i = 0; i < rectangles.length; i++) {
    const [width, height] = rectangles[i];
    const ratio = width / height;

    if (map.has(ratio)) {
      map.set(ratio, map.get(ratio) + 1);
    } else {
      map.set(ratio, 1);
    }
  }

  let counter = 0;
  for (const [_, value] of map) {
    counter += (value * (value - 1)) / 2;
  }
  return counter;
};

console.log(
  interchangeRects([
    [4, 8],
    [3, 6],
    [10, 20],
    [15, 30],
  ])
);
