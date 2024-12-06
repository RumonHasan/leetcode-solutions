"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var findReplaceString = function findReplaceString(s, indices, sources, targets) {
  var stack = [];
  var index = 0;
  var map = new Map();

  for (var i = 0; i < indices.length; i++) {
    if (!map.has(indices[i])) {
      map.set(indices[i], []);
    }

    map.get(indices[i]).push([sources[i], targets[i]]); //pushing all the multiple indices combinations
  }

  while (index < s.length) {
    var currChar = s[index];

    if (map.has(index)) {
      var replacements = map.get(index);
      var matched = false; // if replacement is found them add it to stack and put matched as true and break

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = replacements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              source = _step$value[0],
              target = _step$value[1];

          var slice = s.slice(index, index + source.length);

          if (slice === source) {
            stack.push(target);
            index += source.length;
            matched = true;
            break;
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

      if (!matched) {
        // if there is no match but index present then just push the curr char and move to the next
        index++;
        stack.push(currChar);
      }
    } else {
      stack.push(currChar);
      index++;
    }
  }

  return stack.join('');
};

console.log(findReplaceString('abcde', [2, 2, 3], ['cde', 'cdef', 'dk'], ['fe', 'f', 'xyz'])); // abfe