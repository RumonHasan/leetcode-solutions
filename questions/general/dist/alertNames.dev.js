"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var alertNames = function alertNames(keyName, keyTime) {
  // function to assign arithmetic value in order to sort later
  var minuteGenerator = function minuteGenerator(time) {
    var timeArr = time.split(':');
    var minutes = Number(timeArr[0]) * 60;
    var extraMins = Number(timeArr[1]);
    return minutes + extraMins;
  }; // sorting into a map based on keynames


  var map = new Map();
  var LEN = keyName.length;

  for (var i = 0; i < LEN; i++) {
    var currKeyName = keyName[i];
    var currKeyTime = keyTime[i];

    if (map.has(currKeyName)) {
      map.get(currKeyName).push({
        time: currKeyTime,
        mins: minuteGenerator(currKeyTime)
      });
    } else {
      map.set(currKeyName, [{
        time: currKeyTime,
        mins: minuteGenerator(currKeyTime)
      }]);
    }
  } // sorting based on time using basic time arithmetics


  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          _ = _step$value[1];

      map.get(key).sort(function (a, b) {
        return a.mins - b.mins;
      });
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

  var set = new Set(); // needs a counter for time check and minute counter check
  // now checking for three consequtive similar hours

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          _key = _step2$value[0],
          minVals = _step2$value[1];

      // timeCounterMap.set(key, )
      for (var _i2 = 0; _i2 < minVals.length; _i2++) {
        var checkVal = minVals[_i2];
        var interval = [checkVal.mins, checkVal.mins + 60];
        var counter = 1;

        for (var j = _i2 + 1; j < minVals.length; j++) {
          var currMinValMins = minVals[j].mins;

          if (currMinValMins >= interval[0] && currMinValMins <= interval[1]) {
            counter++;
          }
        }

        if (counter >= 3) {
          if (set.has(_key)) {
            break;
          }

          set.add(_key);
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return _toConsumableArray(set).sort();
};

console.log(alertNames(['leslie', 'leslie', 'leslie', 'clare', 'clare', 'clare', 'clare'], ['13:00', '13:20', '14:00', '18:00', '18:51', '19:30', '19:49']));