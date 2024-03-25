const push_dominoes = (dominoes) => {
  let right = new Array(dominoes.length).fill(0);
  let left = new Array(dominoes.length).fill(0);
  let push_force = 0;
  // right
  for (let i = 0; i < dominoes.length; i++) {
    const piece = dominoes[i];
    if (piece == '.') {
      push_force -= 1;
    }
    if (piece == 'R') {
      push_force = dominoes.length;
    }
    if (piece == 'L') {
      push_force = 0;
    }
    right[i] = Math.max(0, push_force);
  }
  // left
  push_force = 0;
  for (let i = dominoes.length - 1; i >= 0; i--) {
    const piece = dominoes[i];
    if (piece == '.') {
      push_force -= 1;
    }
    if (piece == 'R') {
      push_force = 0;
    }
    if (piece == 'L') {
      push_force = dominoes.length;
    }
    left[i] = Math.max(0, push_force);
  }
  // final array
  let result = '';
  for (let i = 0; i < dominoes.length; i++) {
    const right_val = right[i];
    const left_val = left[i];
    if ((right_val == 0 && left_val == 0) || right_val === left_val) {
      result += '.';
    }
    if (right_val > left_val) {
      result += 'R';
    }
    if (left_val > right_val) {
      result += 'L';
    }
  }
  return result;
};

console.log(push_dominoes('.L.R...LR..L..'));
