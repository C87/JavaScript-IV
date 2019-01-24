// Base Class

class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

// Instructor Subclass

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }

    gradeStudent(student, cb) {
        if (student.grade > 70) return cb(`${student.name} has already graduated`);
        let isGoodResult = Math.round(Math.random());

        if (isGoodResult) {
            student.grade += 10;
            console.log(`Good work ${student.name}. Your grade is now ${student.grade}`);
        } else {
            student.grade -= 10;
            console.log(`Try harder ${student.name}. Your grade is now ${student.grade}`);
        }

        cb(student.graduate(student));
    }
}

// Student Subclass

class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.grade = props.grade;
        this.favSubjects = props.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach(subject => {
            console.log(subject);
        });
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }

    graduate(student) {
        if (student.grade > 70) {
            return `Congratulations ${student.name} you have officially graduated Lambda School!!`;
        } else {
            return `Keep them assignments coming ${student.name}`;
        }
    }
}

// PM Subclass

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

// Instructor Instance

const josh = new Instructor({
    name: 'Josh Knell',
    age: '31',
    location: 'Utah',
    gender: 'Male',
    specialty: 'Introduction to User Interface and Git',
    favLanguage: 'JavaScript',
    catchPhrase: 'BIG BOSS'
});

const cameron = new Instructor({
    name: 'Cameron Pope',
    age: '31',
    location: 'Utah',
    gender: 'Male',
    specialty: 'Introduction to User Interface and Git',
    favLanguage: 'JavaScript',
    catchPhrase: 'BIG BOSS'
});


// Student Instance

const shaun = new Student({
    name: 'Shaun Carmody',
    age: 31,
    location: 'Liverpool',
    gender: 'Male',
    previousBackground: 'Formula 1 Trader',
    className: 'Web17',
    grade: 50,
    favSubjects: [
        'Preprocessing I',
        'Preprocessing II',
        'JavaScript IV'
    ]
});

const jeremiah = new Student({
    name: 'Jeremiah Tenbrink',
    age: 32,
    location: 'Colorado',
    gender: 'Male',
    previousBackground: 'Navy',
    className: 'Web17',
    grade: 80,
    favSubjects: [
        'JavaScript I',
        'JavaScript II',
        'JavaScript III',
        'JavaScript IV'
    ]
});

const vlad = new Student({
    name: 'Vladimir Turcan',
    age: 24,
    location: 'Romania',
    gender: 'Male',
    previousBackground: 'Student',
    className: 'Web17',
    grade: 66,
    favSubjects: [
        'Git for Web Development',
        'Responsive Design II',
        'Preprocessing II',
        'JavaScript IV'
    ]
});

// PM Instance

const phil = new ProjectManager({
    name: 'Phil Hart',
    age: 24,
    location: 'Colorado',
    gender: 'Male',
    specialty: 'React',
    favLanguage: 'JavaScript',
    catchPhrase: 'Stand up time!',
    gradClassName: 'Web13',
    favInstructor: 'Josh Knell',
});

// Instructor

console.log(josh.gender); // Male
console.log(cameron.location); // Utah
console.log(josh.catchPhrase); // BIG BOSS
console.log(cameron.specialty); // Introduction to User Interface and Git

josh.grade(shaun, 'Responsive Design I'); // Shaun Carmody receives a perfect score on Responsive Design I
cameron.demo('Preprocessing I'); // Today we are learning about Preprocessing I

josh.gradeStudent(shaun, says => console.log(says));
josh.gradeStudent(shaun, says => console.log(says));
josh.gradeStudent(shaun, says => console.log(says));
josh.gradeStudent(shaun, says => console.log(says));


// Student
console.log(shaun);
console.log(vlad.location); // Romania
console.log(shaun.previousBackground); // Formula 1 Trader
console.log(jeremiah.className); // Web17

shaun.listsSubjects(); // JavaScript IV, Preprocessing II, Preprocessing I
shaun.speak(); // Hello my name is Shaun Carmody, I am from Liverpool
jeremiah.PRAssignment('Preprocessing I'); // Jeremiah Tenbrink has submitted a PR for Preprocessing I
vlad.sprintChallenge('JavaScript IV'); // Vladimir Turcan has begun sprint challenge on JavaScript IV


// PM

console.log(phil.gradClassName); // Web13
console.log(phil.age); // 24

phil.standUp('#Async_Phil'); // Phil Hart announces to #Async_Phil, @channel standy times!​​​​​
phil.debugsCode(vlad, 'User Interface I'); // Phil Hart debugs Vladimir Turcan's code on User Interface I


phil.gradeStudent(vlad, says => console.log(says));
phil.gradeStudent(vlad, says => console.log(says));
phil.gradeStudent(vlad, says => console.log(says));
phil.gradeStudent(vlad, says => console.log(says));
