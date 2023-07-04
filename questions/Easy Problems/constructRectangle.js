const constructRectangle = (area) => {
  let searchPointWidth = Math.floor(Math.sqrt(area));
  while (searchPointWidth > 0) {
    let checkLength = Math.floor(area / searchPointWidth);
    if (
      checkLength >= searchPointWidth &&
      checkLength * searchPointWidth === area
    ) {
      return [checkLength, searchPointWidth];
    }
    searchPointWidth--;
  }
};

//console.log(constructRectangle(37));
