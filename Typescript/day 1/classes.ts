// Possiamo definire le classi in maniera simile a quella che utilizziamo per le classi ES6
// Ma con dei poteri in più
class Person {
  private _age: number;

  // Age è un parametro opzionale
  constructor(private _name: string, private _surname: string, _age = 0) {
    this._age = _age;
  }

  // Getters
  get age(): number {
    return this._age;
  }

  get name(): string {
    return this._name;
  }

  get surname(): string {
    return this._surname;
  }

  // Setters
  set age(_age: number) {
    this._age = _age;
  }

  set name(_name: string) {
    this._name = _name;
  }

  set surname(_surname: string) {
    this._surname = _surname;
  }
  
  // Override del metodo toString
  toString(): string {
    return `[Name=${this.name};Surname=${this.surname}]`;
  }
}

const person1: Person = new Person("Mario", "Rossi", 19);
console.log(person1); // Visualizzazione standard ( non chiama to string! )
console.log(person1.toString()); // Esplicita
console.log("" + person1); // Implicita


