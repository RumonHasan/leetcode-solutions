const distanceBetweenBusStops = (distance, start, destination) => {
  let array = distance.map((num, index) => {
    return {
      distance: num,
      location: index,
    };
  });

  // clockwise distance
  let clockWiseArray = [
    ...array.slice(start + 1, array.length),
    ...array.slice(0, start),
  ];

  // anticlockwise array
  let antiCloclWiseArray = [
    ...array.slice(0, start).reverse(),
    ...array.slice(start + 1, array.length).reverse(),
  ];

  // gets the distance after passing on the data
  const getDistance = (array, destination, type) => {
    let distance = 0;
    let end = 0;
    while (end < (type === 'anti' ? array.length : destination)) {
      distance += array[end].distance;
      if (destination === array[end].location) {
        break;
      }
      end++;
    }
    return distance;
  };

  //let clockwiseDistance = getDistance(clockWiseArray, destination);
  let antiDistance = getDistance(antiCloclWiseArray, destination, 'anti');
  let clockDistance = getDistance(clockWiseArray, destination, 'normal');
  return Math.min(antiDistance, clockDistance);
};

//console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 1));
