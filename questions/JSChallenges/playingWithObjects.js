let generalObject = {
  name: 'rumon',
  getName() {
    return this.name;
  },
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  addPerson(name) {
    return (this.name = name);
  }
}

const newPerson = new Person();
console.log(newPerson.addPerson('rumon'));
