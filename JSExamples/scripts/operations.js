/* VARIABLE DEFINITION */
function variables() {
    console.log('---variables---')
    const MAX_VALUE = 20;

    for (let number of [1, 2, 3, 4]) {
        console.log(number);
    }
}

/* OOP */
class Person {
    constructor(fname, lname, age) {
        this.firstName = fname;
        this.lastName = lname;
        this.pAge = age;
    }
    get name() {
        return this.firstName.toUpperCase();
    }
    set name(fname) {
        this.firstName = fname;
    }
    get fullname() {
        return this.firstName + ' ' + this.lastName;
    }
    formatted() {
        return 'Name is: ' + this.firstName;
    }
}

/* TEMPLATED STRINGS */
function templates() {
    let people = [new Person('Ahmet', 'Demir', 37), new Person('Canan', 'Karaca', 28)];
    for (let person of people) {
        console.log(`Fullname: ${person.fullname}, Age: ${person.pAge}`);
        console.log(`Formatted: ${person.formatted()}`)
    }
}
/* GENERATOR FUNCTIONS */
function* generator(value) {
    let num = value;
    yield num;

    num = num * 2;
    yield num;

    num = num ** 2;//Means:  Math.pow(num,2)
    yield num;

    yield num / 2;
}

function generatorConsume() {
    console.log('---generatorConsume---')
    // Create the generator object
    const generatorObject = generator(5);
    // Start end resume the executions
    console.log(generatorObject.next());
    console.log(generatorObject.next());
    console.log(generatorObject.next());
    console.log(generatorObject.next());
    console.log(generatorObject.next());
}

/* ARROW FUNCTIONS */
function arrowFunctionExpression() {
    console.log('---arrowFunctionExpression---')

    const numbers = [18, 16, 91, 4, 101, 20, 3];
    let numbersSorted = numbers.sort((a, b) => a - b);
    console.log(numbersSorted);
}

function arrowFunctionMapFilter() {
    console.log('---arrowFunctionMapFilter---')

    let people = [new Person('Sedat', 'Demir', 24), new Person('Ahmet', 'Can', 37), 
    new Person('Hasan', 'Katmer', 27)];
    var fullnames = people.filter(p => p.pAge >= 25).map(p => p.fullname);
    console.log(fullnames);
}

/* OBJECT LITERALS */
function objectLiterals() {
    console.log('---objectLiterals---')

    let name = 'Zeynep Ela',
        age = 12;
    let person = {
        name,
        age
    };

    console.log(person.name + ' => ' + person.age)

}
/* Destructuring Assignments */
function destructuringAssignments() {
    var person = {
        name: 'Zeynep Ela',
        surname: 'Divan'
    };

    var { name, surname } = person;
    console.log(name, surname);

}

