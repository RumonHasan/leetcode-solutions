const maxDistToClosest = (seats) => {
  const bruteForce = () => {
    let maxDistance = 0;
    for (let index = 0; index < seats.length; index++) {
      if (seats[index] === 0) {
        let left = seats.slice(0, index).reverse();
        let right = seats.slice(index + 1, seats.length);
        let leftCount = 0;
        let rightCount = 0;
        if (left.length > 0) {
          for (let index in left) {
            if (left[index] === 0) {
              leftCount++;
            }
            if (left[index] === 1) {
              break;
            }
          }
        }
        if (right.length > 0) {
          for (let index in right) {
            if (right[index] === 0) {
              rightCount++;
            }
            if (right[index] === 1) {
              break;
            }
          }
        }

        leftCount += 1;
        rightCount += 1;
        if (right.length === 0) rightCount = leftCount;
        if (left.length === 0) leftCount = rightCount;
        let closestPerson = Math.min(leftCount, rightCount);
        maxDistance = Math.max(closestPerson, maxDistance);
      }
    }
    return maxDistance;
  };

  const optimized = () => {};
};

console.log(maxDistToClosest([1, 0, 0, 0]));
