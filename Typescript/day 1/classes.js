// Possiamo definire le classi in maniera simile a quella che utilizziamo per le classi ES6
// Ma con dei poteri in più
class Person {
    _name;
    _surname;
    _age;
    // Age è un parametro opzionale
    constructor(_name, _surname, _age = 0) {
        this._name = _name;
        this._surname = _surname;
        this._age = _age;
    }
    // Getters
    get age() {
        return this._age;
    }
    get name() {
        return this._name;
    }
    get surname() {
        return this._surname;
    }
    // Setters
    set age(_age) {
        this._age = _age;
    }
    set name(_name) {
        this._name = _name;
    }
    set surname(_surname) {
        this._surname = _surname;
    }
    // Override del metodo toString
    toString() {
        return `[Name=${this.name};Surname=${this.surname}]`;
    }
}
const person1 = new Person("Mario", "Rossi", 19);
console.log(person1); // Visualizzazione standard ( non chiama to string! )
console.log(person1.toString()); // Esplicita
console.log("" + person1); // Implicita
