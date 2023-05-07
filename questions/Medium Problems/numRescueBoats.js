const numRescueBoats = (people, limit) => {
  people.sort((a, b) => a - b);
  let leftIndex = 0;
  let rightIndex = people.length - 1;
  let boatCounter = 0;
  while (leftIndex <= rightIndex) {
    if (people[leftIndex] + people[rightIndex] <= limit) {
      boatCounter++;
      leftIndex++;
      rightIndex--;
    } else if (people[leftIndex] + people[rightIndex] > limit) {
      rightIndex--;
      boatCounter++;
    }
  }
  return boatCounter;
};

//console.log(numRescueBoats([3, 2, 2, 1], 3));
