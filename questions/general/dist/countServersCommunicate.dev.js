"use strict";

var countServerCommunication = function countServerCommunication(grid) {
  // will contain the row and col checks for server count
  var rowPrefSum = new Array(grid.length).fill(0);
  var colPrefSum = new Array(grid[0].length).fill(0);
  var serverCount = 0; // populating the row and col prefix sums

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      var currRack = grid[i][j];

      if (currRack === 1) {
        // note: this count for the total servers to be accumulated based on the current row indices hence its incremented
        rowPrefSum[i]++;
        colPrefSum[j]++;
      }
    }
  } // getting the server count by taking reference from both row and col count


  for (var _i = 0; _i < grid.length; _i++) {
    for (var _j = 0; _j < grid[_i].length; _j++) {
      var _currRack = grid[_i][_j];

      if (_currRack === 1) {
        // if one of them is above 1 that means the col is also connected and there are two instances of connected servers
        if (rowPrefSum[_i] > 1 || colPrefSum[_j] > 1) {
          serverCount++;
        }
      }
    }
  }

  return serverCount;
}; // console.log(
//   countServerCommunication([
//     [1, 1, 0, 0],
//     [0, 0, 1, 0],
//     [0, 0, 1, 0],
//     [0, 0, 0, 1],
//   ])
// );
// return a new array with the number of arrays that are bigger than the current number within the same array


var smallerNumbersThanCurrent = function smallerNumbersThanCurrent(nums) {
  var result = new Array(nums.length).fill(0);
  var arr = nums.map(function (num, i) {
    return [num, i];
  }); // sorting based on ascending

  arr.sort(function (a, b) {
    return a[0] - b[0];
  }); // populating sorted array

  var prevNum = arr[0][0];

  for (var index = 1; index < arr.length; index++) {
    var currNum = arr[index][0]; // currrent number

    if (prevNum == currNum) {
      result[arr[index][1]] = result[arr[index - 1][1]]; // when the number is the same used the previous index from result arry
    } else {
      result[arr[index][1]] = index;
      prevNum = currNum;
    }
  } // handling the duplication issue of similar numbers


  return result;
}; //console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));


var answerQueries = function answerQueries(nums, queries) {
  var result = new Array(queries.length).fill(0);
  nums.sort(function (a, b) {
    return a - b;
  });

  for (var queryIndex in queries) {
    var total = 0;
    var counter = 0;

    for (var i = 0; i < nums.length; i++) {
      var currNum = nums[i];
      total += currNum;
      counter++;

      if (total > queries[queryIndex]) {
        break;
      } // reaches end case then add one plus the entire length


      if (i === nums.length - 1) {
        counter++;
      }
    }

    result[Number(queryIndex)] = counter - 1;
  }

  return result;
};

console.log(answerQueries([4, 5, 2, 1], [3, 10, 21]));