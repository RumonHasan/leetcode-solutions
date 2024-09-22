"use strict";

var mostPopularCreator = function mostPopularCreator(creators, ids, views) {
  var viewMap = new Map();
  var creatorMap = new Map();
  var commonLen = creators.length;

  for (var i = 0; i < commonLen; i++) {
    var currCreator = creators[i];
    var currView = views[i];
    viewMap.set(currCreator, (viewMap.get(currCreator) || 0) + currView);
  } // finding the most popular video creators


  var viewerArray = [];
  viewMap.forEach(function (key, value) {
    return viewerArray.push([value, key]);
  });
  viewerArray.sort(function (a, b) {
    return b[1] - a[1];
  });
  var maxViews = viewerArray[0][1];
  viewerArray = viewerArray.filter(function (item) {
    return item[1] === maxViews;
  });
  viewMap = new Map(viewerArray); // contains the most popular guys
  // checking the movie ids

  for (var _i = 0; _i < commonLen; _i++) {
    var currId = ids[_i];
    var _currCreator = creators[_i];
    var _currView = views[_i];

    if (creatorMap.has(_currCreator)) {
      creatorMap.get(_currCreator).push({
        id: currId,
        viewCount: _currView
      });
    } else {
      creatorMap.set(_currCreator, [{
        id: currId,
        viewCount: _currView
      }]);
    }
  } // sorting the creator map


  creatorMap.forEach(function (value, _) {
    value.sort(function (a, b) {
      if (b.viewCount !== a.viewCount) {
        return b.viewCount - a.viewCount;
      }

      return a.id.localeCompare(b.id);
    });
  });
  var result = []; // populating the result based on the id and values

  viewMap.forEach(function (value, key) {
    var creatorArray = creatorMap.get(key);
    var array = [key, creatorArray[0].id];
    result.push(array);
  });
  return result;
}; // two maps in order to store the creators to the views then the creators to the ids


console.log(mostPopularCreator(['alice', 'bob', 'alice', 'chris'], ['one', 'two', 'three', 'four'], [5, 10, 5, 4]));