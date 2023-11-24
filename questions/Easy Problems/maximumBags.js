const maximumBags = (capacity, rocks, additionalRocks) => {
  console.log(capacity);
  const intuitiveApproach = () => {
    let totalCapacity = 0;
    let index = 0;
    while (index < capacity.length) {
      const cap = capacity[index];
      const rockCount = rocks[index];
      totalCapacity += cap - rockCount;
      index++;
    }
    console.log(totalCapacity);
    if (additionalRocks >= totalCapacity) return rocks.length;
    totalCapacity = 0;
    rocks.sort((a, b) => a - b);
    for (let index = 0; index < capacity.length; index++) {
      totalCapacity += rocks[index];
      if (totalCapacity > additionalRocks) return index;
    }
  };
};

console.log(maximumBags([2, 3, 4, 5], [1, 2, 4, 4], 2));
