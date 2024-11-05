"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var favoriteCompanies = function favoriteCompanies(_favoriteCompanies) {
  // checking for found subsets
  var indices = [];

  for (var i = 0; i < _favoriteCompanies.length; i++) {
    var subsetCheck = false;

    for (var j = 0; j < _favoriteCompanies.length; j++) {
      if (i !== j) {
        var _ret = function () {
          var subSet = new Set(_toConsumableArray(_favoriteCompanies[j]));

          var check = _favoriteCompanies[i].every(function (company) {
            return subSet.has(company);
          });

          if (check) {
            subsetCheck = check;
            return "break";
          }
        }();

        if (_ret === "break") break;
      }
    }

    if (!subsetCheck) {
      indices.push(i);
    }
  }

  return indices.sort(function (a, b) {
    return a - b;
  });
};

console.log(favoriteCompanies([['leetcode', 'google', 'facebook'], ['google', 'microsoft'], ['google', 'facebook'], ['google'], ['amazon']]));