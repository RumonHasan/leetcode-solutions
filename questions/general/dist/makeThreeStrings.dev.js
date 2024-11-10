"use strict";

var makeThreeStringsEqual = function makeThreeStringsEqual(s1, s2, s3) {
  var lng = Math.max(s1.length, s2.length, s3.length);
  var i = 0;
  var j = 0;
  var k = 0;
  var longPrefix = '';

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

  return s1.length - longPrefix.length + s2.length - longPrefix.length + s3.length - longPrefix.length;
}; //console.log(makeThreeStringsEqual('baacbab', 'bcc', 'bca'));