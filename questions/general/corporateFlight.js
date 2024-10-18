const corporateFlights = (bookings, n) => {
  let totalBookings = new Array(n + 1).fill(0);
  let index = 0;
  for (let booking of bookings) {
    const flightOne = booking[0];
    const flightTwo = booking[1];
    const seats = booking[2];
    // subtracting the bookings
    totalBookings[flightOne - 1] += seats;
    totalBookings[flightTwo] -= seats;
    index++;
  }
  // getting prefix sum
  let total = 0;
  for (let i = 0; i < totalBookings.length; i++) {
    total += totalBookings[i];
    totalBookings[i] = total;
  }
  return totalBookings.slice(0, -1);
};

// note: number of seats booked for a particular flight and the first two indices are given ranges for the flight numbers
console.log(
  corporateFlights(
    [
      [3, 3, 5],
      [1, 3, 20],
      [1, 2, 15],
    ],
    3
  )
);
