class Person {
  constructor(name, classType, location) {
    this.name = name;
    this.classType = classType;
    this.location = location || [0, 0];
  }
  
  introduce() {
    return `Hello, my name is ${this.name} and my class is ${this.classType}`
  }

  updateX(val) {
    this.location[0] += val;
  }

  updateY(val) {
    this.location[1] += val;
  }
}

// let person1 = new Person('ava', 'mage', [0, 0]);
// {
// name: 'ava',
// classType: 'mage',
// location: [0, 0]
// }

// let person2 = new Person('ava', 'mage');
// {
// name: 'ava',
// classType: 'mage',
// location: [0, 0]
// }

module.exports = Person;