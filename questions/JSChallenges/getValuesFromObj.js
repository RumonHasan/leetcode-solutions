let input = [
  { name: 'John', age: 21, city: 'New York' },
  { name: 'Mike', age: 28, city: 'Moscow' },
  { name: 'Danny', age: 30, city: 'London' },
  { name: 'Lisa', age: 26, city: 'Paris' },
  { name: 'Sophie', age: 19, city: 'Berlin' },
];

const getValues = (inputs, property) => {
  let array = [];
  for (let index in inputs) {
    array.push(inputs[index][property]);
  }
  return array;
};

console.log(getValues(input, 'name'));

// object
const basicObject = {
  name: 'Rumon',
  age: 26,
  address: 'tokyo',
  getDetails: function (newName) {
    return (this.name = newName);
  },
  get latestDetails() {
    return this.address;
  },
};

basicObject.getDetails('new');
console.log(basicObject);
console.log(basicObject.name);
