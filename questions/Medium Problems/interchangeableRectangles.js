const interchangeableRectangles = (rectangles) => {
  console.log(rectangles);
  // brute force
  const bruteForceTimeExceeded = () => {
    let rectMap = new Map();
    for (let index = 0; index < rectangles.length; index++) {
      let checkRect = rectangles[index];
      let recRatio = checkRect[1] / checkRect[0];
      for (let subIndex = index + 1; subIndex < rectangles.length; subIndex++) {
        let subRect = rectangles[subIndex];
        let subRatio = subRect[1] / subRect[0];
        if (subRatio === recRatio) {
          rectMap.set(subRatio, (rectMap.get(subRatio) || 0) + 1);
        }
      }
    }
    let total = 0;
    for (let [key, val] of rectMap) {
      total += val;
    }
    return total;
  };

  // formulaic approach
  const optimizedApproach = () => {
    let ratioMap = new Map();
    for (let dimensions of rectangles) {
      const ratio = dimensions[1] / dimensions[0];
      ratioMap.set(ratio, (ratioMap.get(ratio) || 0) + 1);
    }
    let total = 0;
    for (let [key, value] of ratioMap) {
      total += (value * (value - 1)) / 2;
    }
    return total;
  };

  console.log(optimizedApproach());
};

console.log(
  interchangeableRectangles([
    [4, 8],
    [3, 6],
    [10, 20],
    [15, 30],
  ])
);
