"use strict";

var maxBeauty = function maxBeauty(items, queries) {
  var result = new Array(queries.length).fill(0);
  items.sort(function (a, b) {
    return a[0] - b[0];
  });
  var sortedQueries = queries.map(function (query, index) {
    return [query, index];
  }).sort(function (a, b) {
    return a[0] - b[0];
  });
  var maxBeauty = 0;
  var index = 0;

  for (var i = 0; i < sortedQueries.length; i++) {
    var query = sortedQueries[i][0];
    var queryIndex = sortedQueries[i][1]; // needs to find the max beauty for each query starting from the query index

    while (index < items.length && items[index][0] <= query) {
      maxBeauty = Math.max(maxBeauty, items[index][1]); // keeping track of the max beauty

      index++;
    }

    result[queryIndex] = maxBeauty;
  }

  return result;
}; // console.log(
//   maxBeauty(
//     [
//       [1, 2],
//       [3, 2],
//       [2, 4],
//       [5, 6],
//       [3, 5],
//     ],
//     [1, 2, 3, 4, 5, 6]
//   )
// );


var prefixScore = function prefixScore(nums) {
  var result = new Array(nums.length).fill(0);
  var max = nums[0];

  for (var i = 0; i < nums.length; i++) {
    var currNum = nums[i];
    max = Math.max(max, currNum);
    result[i] = max + currNum;
  }

  var dp = [result[0]];
  console.log(result);

  for (var index = 1; index < result.length; index++) {
    dp[index] = dp[index - 1] + result[index];
  }

  return dp;
}; // console.log(prefixScore([2, 3, 7, 5, 10]));
// making sure all the binary 1s are atleast k distance apart from each other


var kLengthApart = function kLengthApart(nums, k) {
  var index = 0;
  var lastOneIndex = -1; // Track the last seen 1's position

  while (index < nums.length) {
    if (nums[index] === 1) {
      var difference = index - lastOneIndex - 1;

      if (lastOneIndex !== -1 && difference < k) {
        return false; // Check distance between consecutive 1s
      }

      lastOneIndex = index;
    }

    index++;
  }

  return true;
}; //console.log(kLengthApart([1, 1, 1, 0], 2));


var goatLatin = function goatLatin(sentence) {
  var vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'I', 'E', 'O', 'U']);
  var array = sentence.split(' ');
  var aCount = 1;

  for (var i = 0; i < array.length; i++) {
    var currWord = array[i];

    if (vowels.has(currWord[0])) {
      currWord += 'ma' + 'a'.repeat(aCount);
      array[i] = currWord;
    } else {
      currWord += currWord[0] + 'ma' + 'a'.repeat(aCount);
      array[i] = currWord.slice(1, currWord.length);
    }

    aCount++;
  }

  return array.join(' ');
}; // console.log(goatLatin('I speak Goat Latin'));
// goal is to find the longest substring without duplicate values


var longestStringWithoutDuplicates = function longestStringWithoutDuplicates(s) {
  var max_len = 1;
  var map = new Map();
  var end = 0;
  var start = 0;

  while (end < s.length) {
    map.set(s[end], (map.get(s[end]) || 0) + 1); // reduce the window if the size exceeds the length of string

    while (end - start + 1 > map.size) {
      if (map.has(s[start])) {
        map.set(s[start], map.get(s[start]) - 1);

        if (map.get(s[start]) === 0) {
          map["delete"](s[start]);
        }
      }

      start++;
    }

    max_len = Math.max(max_len, end - start + 1);
    end++;
  }

  return max_len;
};

console.log(longestStringWithoutDuplicates('pwwkew'));