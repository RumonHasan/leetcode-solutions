const makeThreeStringsEqual = (s1, s2, s3) => {
  let lng = Math.max(s1.length, s2.length, s3.length);
  let i = 0;
  let j = 0;
  let k = 0;
  let longPrefix = '';

  while (i < lng) {
    if (s1[i] === s2[j] && s1[i] === s3[k]) {
      longPrefix += s1[i];
      j++;
      k++;
      i++;
    } else {
      break;
    }
  }
  if (longPrefix.length === 0) {
    return -1;
  }

  return (
    s1.length -
    longPrefix.length +
    s2.length -
    longPrefix.length +
    s3.length -
    longPrefix.length
  );
};

//console.log(makeThreeStringsEqual('baacbab', 'bcc', 'bca'));
