
const destor = (t, n, d) => {
  console.log(t);
  console.log(n);
  console.log(d);
  return d;
};

class Person {
  constructor(name) {
    this.name = name;
  }

  @destor
  getName() {
    return this.name;
  }
}

console.log(new Person('haha').getName());
