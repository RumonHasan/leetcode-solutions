const maxImportanceRoads = (n, roads) => {
  let nodeMap = new Map();
  for (let i = 0; i < n; i++) {
    nodeMap.set(i, 0);
  }
  for (let road of roads) {
    const left = road[0];
    const right = road[1];
    nodeMap.set(left, (nodeMap.get(left) || 0) + 1);
    nodeMap.set(right, (nodeMap.get(right) || 0) + 1);
  }
  let sortedNodes = [];
  let nCount = 1; // for multiplication of the labels
  for (let [key, value] of nodeMap) {
    sortedNodes.push([Number(key), value]);
  }
  sortedNodes.sort((a, b) => a[1] - b[1]);
  let total = 0;
  for (let i = 0; i < sortedNodes.length; i++) {
    total += sortedNodes[i][1] * nCount;
    nCount++;
  }
  return total;
};

//console.log(maxImportanceRoads(5, [[0, 1]]));

const revString = (s) => {
  let left = 0;
  let right = Math.floor(s.length / 2);
  while (left < right) {
    let temp = s[left];
    s[left] = s[s.length - 1 - left];
    s[s.length - 1 - left] = temp;
    left++;
  }
  return s;
};

console.log(revString(['h', 'e', 'l', 'l', 'o']));
