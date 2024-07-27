"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var findRestaurant = function findRestaurant(list1, list2) {
  // not the best way but its not nested for loop
  var map = new Map();

  for (var wordIndex in list1) {
    map.set(list1[wordIndex], [Number(wordIndex), false]);
  }

  for (var _wordIndex in list2) {
    if (map.has(list2[_wordIndex])) {
      map.get(list2[_wordIndex])[1] = true;
      map.get(list2[_wordIndex])[0] += Number(_wordIndex);
    }
  }

  var collection = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      if (value[1]) {
        collection.push({
          word: key,
          val: value[0]
        });
      }
    }
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

  collection.sort(function (a, b) {
    return a.val - b.val;
  });
  var val = collection[0].val;
  var result = [];

  for (var _i = 0, _collection = collection; _i < _collection.length; _i++) {
    var item = _collection[_i];
    result.push(item.val === val && item.word);
  }

  return result.filter(function (item) {
    return typeof item === 'string';
  });
};

console.log(findRestaurant(['Shogun', 'Tapioca Express', 'Burger King', 'KFC'], ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun']));