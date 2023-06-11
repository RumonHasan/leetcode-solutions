const distributeCandies = (candies, num_people) => {
  let people_array = new Array(num_people).fill(0);
  let candyCounter = 1;
  let totalCandies = 0;
  let index = 0;
  let exceedIndex = 0;
  while (totalCandies < candies) {
    if (index === num_people) {
      index = 0;
    }
    people_array[index] += candyCounter;
    totalCandies += candyCounter;
    if (totalCandies > candies) {
      exceedIndex = index;
    }
    candyCounter++;
    index++;
  }
  const exceededCandies = people_array.reduce((a, b) => a + b) - candies;
  people_array[exceedIndex] = people_array[exceedIndex] - exceededCandies;
  return people_array;
};

// gotta deplete the candies within the same number of people
// the remaining people gets the remaining candies to the first person
// console.log(distributeCandies(10, 3));
