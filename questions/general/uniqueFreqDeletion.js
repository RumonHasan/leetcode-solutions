const uniqueFreqDeletion = (s) => {
  let min_counter = 0;
  // get occurence
  let map = new Map();
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  // sort according to ascending order of the frequency
  let order_freq_array = [...map.values()].sort((a, b) => b - a);
  // reorder map for freq occurence
  let oc_map = new Map();
  for (let i in order_freq_array) {
    let num = order_freq_array[i];
    oc_map.set(num, (oc_map.get(num) || 0) + 1);
  }
  // main algo to check and prevent repetition
  for (let i = 0; i < order_freq_array.length; i++) {
    while (oc_map.get(order_freq_array[i]) > 1) {
      oc_map.set(order_freq_array[i], oc_map.get(order_freq_array[i]) - 1);
      order_freq_array[i] -= 1; // main value reduced
      min_counter += 1;
      if (order_freq_array[i] > 0) {
        if (oc_map.has(order_freq_array[i])) {
          oc_map.set(order_freq_array[i], oc_map.get(order_freq_array[i]) + 1);
        } else {
          oc_map.set(order_freq_array[i], 1);
        }
      }
    }
  }
  return min_counter;
};

// [3,2,2,1]

//console.log(uniqueFreqDeletion('ceabaacb'));
