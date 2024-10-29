"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var palindromePartitioning = function palindromePartitioning(s) {
  var result = []; // pal check

  var palCheck = function palCheck(s, i, j) {
    while (i <= j) {
      if (s[i] !== s[j]) return false;
      i++;
      j--;
    }

    return true;
  }; // main dfs search to check for every partition


  var dfs = function dfs(index, partition) {
    if (index > s.length - 1) {
      return result.push(_toConsumableArray(partition)); // update the partition if the index hits the last element
    }

    for (var j = index; j < s.length; j++) {
      if (palCheck(s, index, j)) {
        var partitionSub = s.slice(index, j + 1);
        partition.push(partitionSub);
        dfs(j + 1, partition); // dfs call to start from the next index

        partition.pop(); // cleaning up for backtracking
      }
    }

    return partition;
  };

  dfs(0, []);
  return result;
};

console.log(palindromePartitioning('aab'));