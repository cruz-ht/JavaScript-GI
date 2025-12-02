// Person Constructor
class Person {

    constructor(name, job, age) {

        this.name = name;

        this.job = job;

        this.age = age;

    }

    exercise(){
        console.log(`${this.name} likes to Move !`);
    }

    fetchJob(){
        console.log(`${this.name} is a ${this.job}.`);
    }

}

// Programmer Constructor

class Programmer extends Person {

constructor(name, job, age, languages) {

    // calling parent aka "person" constructor
    super(name, job, age);

    this.languages = languages;

    this.busy = true;

}

    completeTask() {
        this.busy = false;
    }

    acceptNewTask() {
        this.busy = true;
    }

    offerNewTask() {
        if (this.busy){
            console.log(`${this.name} can't accept any new tasks right now.`);
        }
            else {
                console.log(`${this.name} would love to take on a new responsibility.`);
            }
    
    }


// New language(input) that's being added
learnLanguage(language) {
    this.languages.push(language)
}
// List of the all the languages including the newly added language
listLanguages() {
    console.log(`${this.name} knows these languages: ${this.languages.join(", ")}`);
}
}


// Creating Person and Programmer for Testing

const Person1 = new Person("Jessica", "Front-End Web Developer", "22");

const Programmer1 = new Programmer ("Billy", "Backend Engineer", "35", ["JSON", "JavaScript"]);

const Programmer2 = new Programmer ("Jean", "Data Analyst", "27", ["Python", "SQL", "R"]);

Programmer1.learnLanguage("SASS");

Programmer2.learnLanguage("JavaScript");





// TESTING FOR PROGRAMMER

console.log(Programmer1);
console.log(Programmer1.fetchJob());
console.log(Programmer1.listLanguages());
console.log(Programmer1.offerNewTask());


console.log(Programmer2);
console.log(Programmer2.exercise());
console.log(Programmer2.listLanguages());
console.log(Programmer2.completeTask());
console.log(Programmer2.offerNewTask());


// TESTING FOR PERSON

console.log(Person1);

console.log(Person1.exercise());

console.log(Person1.fetchJob());



