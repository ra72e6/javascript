function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); //  생일
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  this.getKoreanFullName = function () {
    return `${this.lastName}${this.firstName}`;
  };
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  };
}

Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
Person.prototype.getKoreanFullName = function () {
  return `${this.lastName}${this.firstName}`;
};

// Class
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getKoreanFullName() {
    return `${this.lastName}${this.firstName}`;
  }
}

const person1 = new Person('John', 'Lennon', '1977-7-7');
const person2 = new Person('병천', '이', '2010-10-7');
const person3 = new Person('현종', '이', '2010-12-6');
console.log(person1);
console.log(person3);
console.log(person1.getFullName());
console.log(person1.getBirthYear());
console.log(person2.getKoreanFullName());
