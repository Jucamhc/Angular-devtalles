export class Person {
  constructor(public name: string, private address: string) {}
}

/* export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    super(realName, 'New York')
  }
} */

export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {}
}
const tony = new Person('camilo', 'colombia')
const ironman = new Hero('Ironman', 45, 'Tony', tony)

console.log(ironman)
