const carPooling = (trips, capacity) => {
  trips.sort((a, b) => a[1] - b[1]);

  let currPass = 0;
  let map = new Map(); // will contain the passengers and drop off points

  for (let i = 0; i < trips.length; i++) {
    const [pass, start, stop] = trips[i];
    currPass += pass;
    // checking through the map to remove passengers if its less than start

    for (const [end, pass] of map) {
      if (end <= start) {
        currPass -= pass;
        map.delete(end); // remove it after the passenger is dropped
      }
    }

    // adding to the map the end and passengers
    map.set(stop, (map.get(stop) || 0) + pass);
    if (currPass > capacity) return false;
  }

  return true;
};

console.log(
  carPooling(
    [
      [2, 1, 5],
      [3, 5, 7],
    ],
    3
  )
);
