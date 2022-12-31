// leetcode 881, Boats to Save people
const numRescueBoats = (people, limit) => {
  let sortedPeople = people.sort((a, b) => a - b);
  let index = 0;
  let backIndex = sortedPeople.length;
  let boatCollection = [];
  while (index < backIndex) {
    if (sortedPeople[index] <= limit) {
      // if within the limit then adds both element and reduces the indexes on either side
      if (sortedPeople[index] + sortedPeople[backIndex - 1] <= limit) {
        boatCollection.push([sortedPeople[index], sortedPeople[backIndex - 1]]);
        index++;
        backIndex--;
      } // if its bigger than adds the bigger right side to the list
      else if (sortedPeople[index] + sortedPeople[backIndex - 1] > limit) {
        boatCollection.push([sortedPeople[backIndex - 1]]);
        backIndex--;
      }
    }
  }
  return boatCollection.length;
};

//console.log(numRescueBoats([3, 2, 2, 1], 3));

// finding the minimum number of boats to carry all the passengers
