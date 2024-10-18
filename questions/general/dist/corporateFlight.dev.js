"use strict";

var corporateFlights = function corporateFlights(bookings, n) {
  var totalBookings = new Array(n + 1).fill(0);
  var index = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = bookings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var booking = _step.value;
      var flightOne = booking[0];
      var flightTwo = booking[1];
      var seats = booking[2]; // subtracting the bookings

      totalBookings[flightOne - 1] += seats;
      totalBookings[flightTwo] -= seats;
      index++;
    } // getting prefix sum

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var total = 0;

  for (var i = 0; i < totalBookings.length; i++) {
    total += totalBookings[i];
    totalBookings[i] = total;
  }

  return totalBookings.slice(0, -1);
}; // note: number of seats booked for a particular flight and the first two indices are given ranges for the flight numbers


console.log(corporateFlights([[3, 3, 5], [1, 3, 20], [1, 2, 15]], 3));