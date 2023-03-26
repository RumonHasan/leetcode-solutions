const maxDistanceHouse = (colors) => {
  let maxDistance = 0;
  for (let index = 0; index < colors.length; index++) {
    let checkHouseIndex = index;
    for (
      let secondIndex = index + 1;
      secondIndex < colors.length;
      secondIndex++
    ) {
      let houseIndex = secondIndex;
      if (colors[index] !== colors[secondIndex]) {
        maxDistance = Math.max(
          maxDistance,
          Math.abs(checkHouseIndex - houseIndex)
        );
      }
    }
  }
  return maxDistance;
};

//console.log(maxDistanceHouse([1, 8, 3, 8, 3]));
