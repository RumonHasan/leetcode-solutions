const partitionLabels = (s) => {
  let lastSeenMap = new Map();
  let end = 0;
  let sizes = [];
  while (end < s.length) {
    const letter = s[end];
    const index = end;
    lastSeenMap.set(letter, index);
    end++;
  }
  let maxEnd = 0;
  let size = 1;
  // iterating while keeping track of the previous index
  for (let index = 0; index < s.length; index++) {
    // keeping track and updating the max end
    if (lastSeenMap.get(s[index]) > maxEnd) {
      maxEnd = lastSeenMap.get(s[index]);
    }
    if (maxEnd === index) {
      sizes.push(size);
      size = 0;
      prevIndex = index;
    }
    size++;
  }
  return sizes;
};
// try to check for the partition that includes the first letter then reduce the partition based on the sliding window appraoch
// create as many partitions as possible with as many unique characters as possible per partition
// populate the map with the first and last character of the partition labels in order to traverse the array
// console.log(partitionLabels('ababcbacadefegdehijhklij'));
