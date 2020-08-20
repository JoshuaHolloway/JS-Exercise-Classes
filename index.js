console.log('index.js');
/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

console.log('----------Task-1----------');
class Person {
  constructor(x) {
      this.name = x.name;
      this.age = x.age;
      this.stomach = [];
  }
  eat(food) {
    if (this.stomach.length < 10) 
        this.stomach.push(food);
  }
  poop() {
    this.stomach = [];
  };

  // to string
  toString() {
    return `${this.name}, ${this.age}`;
  };
}
console.log('Create 3 people:');
const person_1 = new Person("steve", 53);
const person_2 = new Person("allen", 32);
const person_3 = new Person("jessica", 43);
console.log(person_1);
console.log(person_2);
console.log(person_3);

console.log('Person 3 eats:');
person_3.eat("tacos");
person_3.eat("pizza");
person_3.eat("ramen");
console.log(person_3);

console.log('Person 3 poops:');
person_3.poop();
console.log(person_3);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');


/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

console.log('----------Task-2----------');

class Car {
    constructor(model, mpg) {
        this.model = model;
        this.milesPerGallon = mpg;
        this.tank = 0;
        this.odometer = 0;   
    }
    
    fill(gallons) {
        this.tank += gallons;
    };

    // Stretch 2.1:
    drive(miles) {
        
        // Stetch 2.2: -Requirement 1: 
        //  -A car which runs out of `fuel` while driving can't drive any more distance.
        //  -The `drive` method should return a string "I ran out of fuel at x miles!".
        if (this.tank <= 0) {
            console.log(`I ran out of fuel at ${this.odometer} miles!`);
        } else {

            // Stretch 2.1 - Requirement 1: The distance driven causes the `odometer` to go up:
            this.odometer += miles;

            // Stretch 2.1 - Requirement 2:
            // -The distance driven causes the the `tank` to go down taking `milesPerGallon` into account.
            //
            // (gallon / mile)  =  (1 / milesPerGallon)
            // miles * ( gallon / mile ) = gallons
            const gallons_per_mile = (1 / this.milesPerGallon);
            const gallons_used = miles * gallons_per_mile;
            this.tank -= gallons_used;

            console.log(`After driving (another) ${miles}-miles the odometer is at: ${this.odometer} and the gas-level is at: ${this.tank}!`);

        }
    };
}

// Test car
const car = new Car('chevy', 10); // Create chevy car with 10-mpg
car.fill(2);  // -fill with 2 gallons
car.drive(10); // -drive 10 miles
car.drive(10); // -drive 10 more miles (at the end of this 10 miles we should be out of gas)
car.drive(10); // -attempt to drive 10 more miles. Shold be out of gas though!!!
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');

/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/
class Lambdasian {
    constructor(x) {
        this.name = x.name;
        this.age = x.age;
        this.location = x.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/
class Instructor {

}

/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before Lambda School
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/
class Student {

}

/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager {

}

/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/
