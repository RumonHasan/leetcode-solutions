const mostPopularCreator = (creators, ids, views) => {
  let viewMap = new Map();
  let creatorMap = new Map();
  const commonLen = creators.length;

  for (let i = 0; i < commonLen; i++) {
    const currCreator = creators[i];
    const currView = views[i];
    viewMap.set(currCreator, (viewMap.get(currCreator) || 0) + currView);
  }
  // finding the most popular video creators
  let viewerArray = [];
  viewMap.forEach((key, value) => viewerArray.push([value, key]));
  viewerArray.sort((a, b) => b[1] - a[1]);
  let maxViews = viewerArray[0][1];
  viewerArray = viewerArray.filter((item) => item[1] === maxViews);
  viewMap = new Map(viewerArray); // contains the most popular guys

  // checking the movie ids
  for (let i = 0; i < commonLen; i++) {
    const currId = ids[i];
    const currCreator = creators[i];
    const currView = views[i];
    if (creatorMap.has(currCreator)) {
      creatorMap.get(currCreator).push({
        id: currId,
        viewCount: currView,
      });
    } else {
      creatorMap.set(currCreator, [{ id: currId, viewCount: currView }]);
    }
  }
  // sorting the creator map
  creatorMap.forEach((value, _) => {
    value.sort((a, b) => {
      if (b.viewCount !== a.viewCount) {
        return b.viewCount - a.viewCount;
      }
      return a.id.localeCompare(b.id);
    });
  });

  let result = [];
  // populating the result based on the id and values
  viewMap.forEach((value, key) => {
    const creatorArray = creatorMap.get(key);
    const array = [key, creatorArray[0].id];
    result.push(array);
  });

  return result;
};

// two maps in order to store the creators to the views then the creators to the ids
console.log(
  mostPopularCreator(
    ['alice', 'bob', 'alice', 'chris'],
    ['one', 'two', 'three', 'four'],
    [5, 10, 5, 4]
  )
);
