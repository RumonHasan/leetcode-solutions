// simple straightforward and backward approaches for recursion
const recursiveBackIteration = (nums, type) => {
  // conditional based recursive front and back
  const recursiveIterationFrontAndBack = (arr, index, type) => {
    if (type === 'front' ? index > nums.length - 1 : index < 0) {
      return arr;
    }
    arr.push(nums[index]);
    return recursiveIterationFrontAndBack(
      arr,
      type === 'front' ? index + 1 : index - 1,
      type
    );
  };
  let result = recursiveIterationFrontAndBack(
    [],
    type === 'front' ? 0 : nums.length - 1,
    type
  );
  return result;
};

//console.log(recursiveBackIteration([1, 2, 3, 4, 5], 'back'));
let json = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    coordinates: {
      latitude: 37.1049502,
      longitude: -113.6335371,
    },
  },
  orders: [
    {
      id: 1,
      items: [
        {
          name: 'Widget',
          price: 10.99,
        },
        {
          name: 'Gadget',
          price: 19.99,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          name: 'Thingamajig',
          price: 7.99,
        },
      ],
    },
  ],
};
const iterateNestedJson = (data) => {
  const recursive = (localData, id) => {
    for (let [key, value] of Object.entries(localData)) {
      if (key === 'orders' && Array.isArray(localData[key])) {
        value.forEach((singleValue) => {
          if (Array.isArray(singleValue.items) && singleValue.id === id) {
            singleValue.items.forEach((item) => {
              return (item.name = 'rumon');
            });
          }
        });
      } else {
        if (typeof localData[key] === 'object') {
          recursive(localData[key], id);
        }
      }
    }
  };
  recursive(data, 1);
  console.log(data);
};

// Example usage to change the item names for orders with id 1
iterateNestedJson(json);
