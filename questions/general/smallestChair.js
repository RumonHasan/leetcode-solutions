const smallestChair = (times, targetFriend) => {
  let newTimes = [];

  for (let i = 0; i < times.length; i++) {
    const friendId = i;
    const arrivalTime = times[i][0];
    const departureTime = times[i][1];
    newTimes.push([arrivalTime, true, friendId]);
    newTimes.push([departureTime, false, friendId]);
  }

  // sorting the new times based on arrival preference
  newTimes.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] ? 1 : -1; // if its arrival then sort by arrival preference
  });

  let occupiedChairs = new Map();
  let availableSeats = [];
  let nextSeat = 0;

  // assigning the chair to the friend then returning the answer
  for (let i = 0; i < newTimes.length; i++) {
    const [_, isArrival, friendId] = newTimes[i];
    if (isArrival) {
      // means its an arrival time
      let chairToAssign;
      if (availableSeats.length > 0) {
        // assign the smallest chair
        availableSeats.sort((a, b) => a - b);
        chairToAssign = availableSeats.shift(); // removing the available chair after assigning
      } else {
        chairToAssign = nextSeat;
        nextSeat++; // adds because it iterates to the next chair
      }
      // update occupied chairs
      occupiedChairs.set(friendId, chairToAssign);

      if (friendId === targetFriend) {
        // if the friend finds a seat then immediately return the chair
        return chairToAssign;
      }
    } else {
      const chair = occupiedChairs.get(friendId);
      availableSeats.push(chair);
      // remove friends from occupied chairs because she is no longer there
      occupiedChairs.delete(friendId);
    }
  }
  return -1;
};

console.log(
  smallestChair(
    [
      [99998, 99999],
      [99999, 100000],
    ],
    1
  )
);
