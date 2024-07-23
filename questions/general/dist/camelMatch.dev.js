"use strict";

var camelMatch = function camelMatch(queries, pattern) {
  var result = [];

  var patternCreator = function patternCreator(pattern) {
    var patternUpper = [];
    var str = pattern[0];

    for (var i = 1; i < pattern.length; i++) {
      if (pattern[i] === pattern[i].toUpperCase()) {
        patternUpper.push(str);
        str = '';
        str += pattern[i];
      } else {
        str += pattern[i];
      }

      if (i === pattern.length - 1) {
        patternUpper.push(str);
      }
    }

    return patternUpper;
  };

  var patternCheck = function patternCheck(patOriginal, checkPat) {
    var patCount = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = patOriginal[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var pat = _step.value;
        var patIndex = 0;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = checkPat[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var patCheck = _step2.value;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = patCheck[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var patCheckLetter = _step3.value;

                if (pat[patIndex] && pat[patIndex].toUpperCase() === pat[patIndex] && patCheckLetter.toUpperCase() === patCheckLetter && pat[patIndex] !== patCheckLetter) {
                  return false;
                }

                if (pat[patIndex] === patCheckLetter) {
                  patIndex++;
                }
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                  _iterator3["return"]();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
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

        if (patIndex === pat.length) {
          patCount++;
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

    return patCount === patOriginal.length;
  };

  var patternUpper = patternCreator(pattern);
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = queries[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var query = _step4.value;
      var queryPattern = patternCreator(query);
      result.push(!patternCheck(patternUpper, queryPattern));
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return result;
};

console.log(camelMatch(['uAxaqlzahfialcezsLfj', 'cAqlzyahaslccezssLfj', 'AqlezahjarflcezshLfj', 'AqlzofahaplcejuzsLfj', 'tAqlzahavslcezsLwzfj', 'AqlzahalcerrzsLpfonj', 'AqlzahalceaczdsosLfj', 'eAqlzbxahalcezelsLfj'], 'AqlzahalcezsLfj'));